import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/3D-port/', // Set base to your repository name
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf']
})
