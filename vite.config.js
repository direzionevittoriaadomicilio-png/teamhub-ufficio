import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/teamhub-ufficio/',  // ← deve corrispondere esatto al nome del repository GitHub
})
