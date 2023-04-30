'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // hash 模式下可使用
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 7777,
    open: false,
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/auth": {
        target: "http://ashuai.work:10000",
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: {
          "/auth": ""
        }
      },
    }
  },

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'main',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
