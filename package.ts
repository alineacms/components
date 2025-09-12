import {$, Glob} from 'bun'
import {type Plugin, build} from 'esbuild'

await $`rm -rf dist`

// Create type declarations
await $`tsc`

const glob = new Glob('dist/**/*.d.ts')
const scannedFiles = await Array.fromAsync(glob.scan())
// Replace css imports in d.ts files with empty strings
for (const file of scannedFiles) {
  const content = await Bun.file(file).text()
  const updatedContent = content.replaceAll(/import '.*?\.css';/g, '')
  await Bun.write(file, updatedContent)
}

// Bundle it
await $`
  cd dist && dtsroll types/index.d.ts \
    --external react-aria-components \
    --external react --external react-dom \
    --external @react-stately/data \
    --external @react-types/overlays \
    --external @react-types/tooltip 
`

// Remove unused d.ts files
await $`cp dist/types/index.d.ts dist/index.d.ts`
await $`rm -rf dist/types`

// Create build
const externalize: Plugin = {
  name: 'externalize',
  setup(build) {
    Bun.write('dist/empty.js', '')
    Bun.write('dist/empty.d.ts', '')
    build.onResolve({filter: /.*/}, args => {
      if (args.kind === 'entry-point') return
      if (!args.path.startsWith('.')) return {path: args.path, external: true}
    })
  }
}

await build({
  format: 'esm',
  entryPoints: ['src/index.ts'],
  banner: {
    js: "'use client'\nimport '@alinea/components/css';"
  },
  outdir: 'dist',
  bundle: true,
  plugins: [externalize]
}).catch(err => {
  console.error(err)
  process.exit(1)
})
