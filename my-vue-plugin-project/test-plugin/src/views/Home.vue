<!--
 * @Author: v_zhengping v_zhengping@baidu.com
 * @Date: 2024-07-18 16:57:59
 * @LastEditors: v_zhengping v_zhengping@baidu.com
 * @LastEditTime: 2024-07-19 09:34:57
 * @FilePath: /my-vue-ts-project/test-plugin/src/views/Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <video-player :video-config="{videoUrl: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv'}"></video-player>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  }
}
</script>
