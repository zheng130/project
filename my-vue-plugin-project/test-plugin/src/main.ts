/*
 * @Author: v_zhengping v_zhengping@baidu.com
 * @Date: 2024-07-18 16:57:59
 * @LastEditors: v_zhengping v_zhengping@baidu.com
 * @LastEditTime: 2024-07-19 09:34:04
 * @FilePath: /test-plugin/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VideoPlayer from 'my-vue-plugin-project'
Vue.config.productionTip = false
// Vue.use(VideoPlayer)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
