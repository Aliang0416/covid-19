const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://iwenwiki.com',
        ws: true,
        changeOrigin: true
      },
      '/api': {
        target: 'https://rijb.api.storeapi.net',
        ws: true,
        changeOrigin: true
      },
    }
  }
})
