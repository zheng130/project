<!--
 * @Author: v_zhengping v_zhengping@baidu.com
 * @Date: 2024-07-18 14:58:52
 * @LastEditors: v_zhengping v_zhengping@baidu.com
 * @LastEditTime: 2024-07-18 15:16:59
 * @FilePath: /project/my-vue-ts-project/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/video-player">video-player</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
</style>
