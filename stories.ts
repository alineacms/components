import * as path from 'node:path'
import {type BunPlugin, Glob, build, serve} from 'bun'

const glob = new Glob('./src/**/*.stories.{js,cjs,mjs,ts,mts,cts,jsx,tsx}')

const findEntries: BunPlugin = {
  name: '@entries',
  async setup(build) {
    const cwd = build.config.root ?? process.cwd()

    build.onResolve({filter: new RegExp(findEntries.name)}, args => {
      return {path: args.path, namespace: findEntries.name}
    })

    build.onLoad(
      {filter: new RegExp(findEntries.name), namespace: findEntries.name},
      async () => {
        let contents = 'let stories = []'
        for await (const file of glob.scan({cwd})) {
          const relative = path.relative(cwd, file).replace(/\\/g, '/')
          await import(`./${relative}`, {with: {type: 'text'}})
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

const stories = loadStories()

const index = URL.createObjectURL(
  new Blob(['<html><body><div id="root">test</div>/body></html>'], {
    type: 'text/html'
  })
)

serve({
  routes: {
    '/': {
      index: index,
      files: []
    }
  },
  port: 3000,
  development: true
})
