/*
 * @Author: v_zhengping v_zhengping@baidu.com
 * @Date: 2024-07-18 17:30:40
 * @LastEditors: v_zhengping v_zhengping@baidu.com
 * @LastEditTime: 2024-07-19 10:27:21
 * @FilePath: /my-vue-plugin-project/vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // pages: {
  //   index: {
  //     entry: "src/main.js",
  //     template: "public/index.html",
  //     filename: "index.html"
  //   }
  // },
  // 组件样式内联
  css: {
    extract: false,
    sourceMap: false // 为 CSS 禁用 source map
  },
  productionSourceMap: false,
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('~', resolve('packages'))
    //   if (process.env.NODE_ENV === 'production') {
    //     config.module.rule('ts').uses.delete('cache-loader');
  
    //     config.module
    //       .rule('ts')
    //       .use('ts-loader')
    //       .loader('ts-loader')
    //       .tap((opts) => {
    //         opts.transpileOnly = false;
    //         opts.happyPackMode = false;
    //         return opts;
    //       });
    //   }
  },
  // parallel: false,
};