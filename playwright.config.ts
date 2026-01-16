import {defineConfig} from '@playwright/experimental-ct-react'
import react from '@vitejs/plugin-react'

export default defineConfig({
  testDir: './src/components',
  use: {
    ctViteConfig: {
      plugins: [react()]
    },
    viewport: {width: 900, height: 600}
  }
})
