const path = require('path')

const resolve = dir => path.join(__dirname,dir)

const BASE_URL = process.env.NODE_ENV ==='procution' ? '/iview-admin/' : '/'

module.exports = {
  lintOnSave: false, //取消Elint检测
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  procutionSourceMap: false,//打包时不生成.map文件
  devServer: {
    proxy: 'http://localhost:4000'
  } 
}
