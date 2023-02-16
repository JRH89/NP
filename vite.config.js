import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['dependency-name'], // add the name of the dependency here
    },
  },
});
