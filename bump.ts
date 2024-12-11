import {write} from 'bun'
// @ts-ignore
import pkg from './package.json'

let semver = process.argv[2]
if (!semver) {
  console.error('Usage: bump.ts <semver>')
  process.exit(1)
}
if (semver.startsWith('v')) semver = semver.slice(1)
pkg.version = semver
await write('package.json', `${JSON.stringify(pkg, null, 2)}\n`)
console.log(`Bumped version to ${semver}`)
