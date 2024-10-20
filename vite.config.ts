import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/solana-sos/",
  plugins: [react(),nodePolyfills()],
  envDir: "env"
})
