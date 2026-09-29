import { defineConfig, Plugin } from 'vite';

function removeCrossorigin(): Plugin {
  return {
    name: 'remove-crossorigin',
    transformIndexHtml(html) {
      return html.replace(/ crossorigin(?:="[^"]*")?/g, '');
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [removeCrossorigin()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    target: ['es2021', 'safari15'],
    modulePreload: false
  }
});
