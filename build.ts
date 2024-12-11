import {Glob} from 'bun'
import {type Plugin, build} from 'esbuild'

const tsx = new Glob('src/**/*.tsx')
const components = [...tsx.scanSync()]

const externalize: Plugin = {
  name: 'externalize',
  setup(build) {
    build.onResolve({filter: /.*/}, ({kind, path}) => {
      if (kind === 'entry-point') return
      if (path.includes('.css')) return
      if (path.endsWith('.tsx') || path.endsWith('.ts'))
        return {
          path: `${path.slice(0, path.lastIndexOf('.'))}.js`,
          external: true
        }
      return {path, external: true}
    })
  }
}

await build({
  format: 'esm',
  entryPoints: components,
  outdir: 'dist',
  bundle: true,
  plugins: [externalize]
}).catch(() => process.exit(1))
