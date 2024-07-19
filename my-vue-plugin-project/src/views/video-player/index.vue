<!--
 * @Author: v_zhengping v_zhengping@baidu.com
 * @Date: 2024-07-17 19:36:32
 * @LastEditors: v_zhengping v_zhengping@baidu.com
 * @LastEditTime: 2024-07-19 09:36:08
 * @FilePath: /plugin/src/views/video-player/index.vue
 * @Description:
-->

<template>
    <div class="video-container">
        <!-- http://220.250.5.20:83/openUrl/njsFlyo/playback.m3u8?beginTime=20240716T094326&endTime=20240716T094339 -->
        <!-- https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv -->
        <!-- <video-player :video-config="{videoUrl: 'http://220.250.5.20:83/openUrl/njsFlyo/playback.m3u8?beginTime=20240716T094326&endTime=20240716T094339'}"></video-player> -->
        <video-player :video-config="{videoUrl: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv'}"></video-player>
        <!-- <VideoPlayer :video-config="{videoUrl: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv'}"></VideoPlayer> -->
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
// import VideoPlayer from '@/components/video-player/index.vue';

@Component({
    components: {
        // VideoPlayer
    }
})
export default class VideoPlayerNew extends Vue {}
</script>

<style scoped>
.video-container {
    height: 300px;
    width: 400px;
    overflow: hidden;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
}
</style>