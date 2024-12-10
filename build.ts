import {join} from 'node:path'
import {Glob, m 'bun'

const root = 'src/components'
const glob = new Glob('**/*.tsx')
const transpiler = new Bun.Transpiler({
  loader: "tsx"
})

for await (const component of glob.scan(root)) {
  const code = await Bun.file(join(root, component)).arrayBuffer()
  const res = transpiler.transformSync(code)
  // ...
}