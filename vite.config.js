import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  pluggins: [react()],
  test: { // config de vitest
    environment: 'happy-dom' // happy-dom es una herramienta que emula un navegador parcheando todas las apis de la web.
  }
})
