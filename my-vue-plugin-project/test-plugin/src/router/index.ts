/*
 * @Author: v_zhengping v_zhengping@baidu.com
 * @Date: 2024-07-18 16:57:59
 * @LastEditors: v_zhengping v_zhengping@baidu.com
 * @LastEditTime: 2024-07-18 17:02:55
 * @FilePath: /my-vue-ts-project/test-plugin/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
