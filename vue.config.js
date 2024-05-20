const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/portafolio/' : '/',
  assetsDir: 'assets',  // Asegúrate de que esto esté configurado
})
