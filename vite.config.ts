import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configura base para GitHub Pages solo en CI.
  // Para repos de proyecto: https://username.github.io/<repo>/
  // Para repos de usuario/organización: https://<org|user>.github.io/ => base '/'
  base: (() => {
    const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
    if (!repo) return '/'
    return repo.endsWith('.github.io') ? '/' : `/${repo}/`
  })(),
})
