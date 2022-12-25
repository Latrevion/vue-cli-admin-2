module.exports = {
  // 设置全局样式调用
  css: {
      loaderOptions: {
          scss: {
              //prependData: `@import "~@/assets/common/css/ict_global.scss";`
              additionalData: `@import "~@/assets/common/ict_global.scss";`
          }
      },
  },
  //设置标签栏logo
  pwa: {
      iconPaths: {
          favicon32: 'logo.png',
          favicon16: 'logo.png',
          appleTouchIcon: 'logo.png',
          maskIcon: 'logo.png',
          msTileImage: 'logo.png'
      }
  },
 devServer: {
     port:8888,
     // proxy: {
     //     '/api': {     //这里最好有一个 /
     //         target: 'http://45.105.124.130:8081',  // 后台接口域名
     //         ws: true,        //如果要代理 websockets，配置这个参数
     //         secure: false,  // 如果是https接口，需要配置这个参数
     //         changeOrigin: true,  //是否跨域
     //         pathRewrite:{
     //             '^/api':''
     //         }
     //     }
     // }
 },
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
}
