import {execSync} from 'node:child_process'

const args = process.argv.slice(2)
if (args.length === 0) args.push('install')
try {
  execSync(`bun ${args.join(' ')}`, {stdio: 'inherit'})
} catch (error) {
  process.exit(error.status)
}
