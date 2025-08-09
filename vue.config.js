const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/pheme.social/' : '/',
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('md-loader')
      .loader(path.resolve(__dirname, 'src/utils/mdLoader.js'))
      .end();
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/style.scss";
        `,
      },
    },
  },
});
