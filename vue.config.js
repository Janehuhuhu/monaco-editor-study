const path = require('path')
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      new MonacoWebpackPlugin({
        languages: ["json", "javascript"],// 配置需要的languages，减少打包后的体积
        // features: ['coreCommands', 'find', 'format'], // 选择编辑器功能
      })
    ]
  }
}