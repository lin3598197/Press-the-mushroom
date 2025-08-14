import { defineConfig } from 'vite';

// 若部署到 GitHub Pages，base 需設為 /<REPO_NAME>/
export default defineConfig({
  base: '/Press-the-mushroom/',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist'
  }
});
