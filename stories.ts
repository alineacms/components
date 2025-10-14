import * as path from 'node:path'
import {type BunPlugin, Glob, build} from 'bun'

const glob = new Glob('./src/**/*.stories.{js,cjs,mjs,ts,mts,cts,jsx,tsx}')

const findEntries: BunPlugin = {
  name: '@entries',
  async setup(build) {
    const cwd = build.config.root ?? process.cwd()

    build.onResolve({filter: new RegExp(this.name)}, args => {
      return {path: args.path, namespace: this.name}
    })

    build.onLoad(
      {filter: new RegExp(this.name), namespace: this.name},
      async () => {
        let contents = 'let stories = []'
        for await (const file of glob.scan({cwd})) {
          const relative = path.relative(cwd, file).replace(/\\/g, '/')
          contents += `
          stories.push({
            meta: (await import('./${relative}')).default ?? {}, 
            file: '${relative}'
          })
        `
        }
        contents += 'export default stories'
        return {contents, loader: 'js'}
      }
    )
  }
}

async function loadStories() {
  const {
    outputs: [blob]
  } = await build({
    entrypoints: [findEntries.name],
    plugins: [findEntries],
    minify: true
  })
  const url = URL.createObjectURL(blob)
  const exports = await import(url)
  return exports
}

const stories: BunPlugin = {
  name: '@stories',
  async setup(build) {}
}
