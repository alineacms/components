import {relative} from 'node:path'
import {Glob} from 'bun'
import {type Plugin, build} from 'esbuild'

const tsx = new Glob('src/**/*.tsx')
const entries = [...tsx.scanSync()]

const externalize: Plugin = {
  name: 'externalize',
  setup(build) {
    build.onResolve({filter: /.*/}, ({path, ...args}) => {
      if (args.kind === 'entry-point') return
      if (path.includes('.css')) return
      if (path.endsWith('.tsx') || path.endsWith('.ts'))
        return {
          path: `${path.slice(0, path.lastIndexOf('.'))}.js`,
          external: true
        }
      return {path, external: true}
    })
    const cssFiles: Array<string> = []
    build.onLoad({filter: /\.css$/}, ({path}) => {
      cssFiles.push(relative(process.cwd(), path))
      return {contents: ''}
    })
    build.onEnd(async () => {
      const res = await build.esbuild.build({
        stdin: {
          contents: `${cssFiles.map(path => `@import './${path}';`).join('\n')}`,
          loader: 'css',
          resolveDir: process.cwd(),
          sourcefile: 'index.css'
        },
        bundle: true,
        write: false
      })
      Bun.write('dist/index.css', res.outputFiles[0].text)
    })
  }
}

await build({
  format: 'esm',
  entryPoints: entries.filter(entry => !entry.includes('todo')),
  outdir: 'dist',
  bundle: true,
  plugins: [externalize]
}).catch(() => process.exit(1))
