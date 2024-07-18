<!--
 * @Date: 2024-07-16 18:59:37
 * @LastEditors: v_zhengping v_zhengping@baidu.com
 * @LastEditTime: 2024-07-18 16:16:00
 * @FilePath: /v2x-platform-front/src/views/info-publish/components/video-player-v1/index.vue
 * @Description: 视频播放器支持flv,m3u8,mp4等格式 
    文档 https://videojs.moyutime.cn/
    说明：此组件仅仅是video，宽度高度默认充满父元素，样式是原生video标签样式，无其他的样式
    适用场景：单纯的播放场景 兼容flv和m3u8格式,mp4等格式的视频
-->
<template>
    <video
        ref="videoPlayer"
        class="video-js vjs-default-skin vjs-big-play-centered"
        style="width: 100%; height: 100%;"
    ></video>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import { VideoPlayerConfig } from './video';
@Component
export default class VideoPlayerNew extends Vue {
    @Prop({required: true}) videoConfig!: VideoPlayerConfig;
    
    player = null;
    videoId = '';
    initPlayer() {
        // 播放器配置 设置默认值
        const currentPlayerConfig: VideoPlayerConfig = Object.assign({
            autoplay: false,
            controls: true,
            loop: false,
            muted: true,
            preload: 'auto',
            videoUrl: ''
        }, JSON.parse(JSON.stringify(this.videoConfig)));
        const option = {
            autoplay: currentPlayerConfig.autoplay,
            controls: currentPlayerConfig.controls,
            muted: currentPlayerConfig.muted,
            preload: currentPlayerConfig.preload,
            sources: [
                // FLV 视频流 \ HLS 视频流
                {
                    src: currentPlayerConfig.videoUrl,
                    type: this.getVideoStreamType(currentPlayerConfig.videoUrl)
                },
                {
                    src: currentPlayerConfig.videoUrl,
                    type: "video/mp4"
                },
                {
                    src: currentPlayerConfig.videoUrl,
                    type: "video/webm"
                }
            ]
        }
        // eslint-disable-next-line no-undef
        this.player = videojs(this.videoId, option);
    }
    /**
     * @description: 切换视频地址 防止频繁销毁/创建播放器，根据具体场景使用
     * @param {*} url
     * @return {*}
     */
    changeVideoUrl(url: string) {
        this.player.src(url);
    }
    /**
     * @description: 根据视频流的格式，设置sources的type类型：FLV：'video/x-flv'、HLS：'application/x-mpegURL'
     * @param {*} videoUrl
     * @return {*}
     */
    getVideoStreamType = (videoUrl: string) => {
        if (videoUrl.includes('.flv')) {
            return "video/x-flv";
        } else if (videoUrl.includes('.m3u8')) {
            return "application/x-mpegURL";
        }
        return "application/x-mpegURL";
    };
    /**
     * @description: 销毁播放器 父组件通过this.$refs.的方式，获取该组组件的实例，然后调用该实例的方法
     * @return {*}
     */
    dispose() {
        this.player.dispose();
        this.player = null;
    }
    mounted() {
        // 设置一个不会重复的id
        const sign = +new Date();
        this.$refs.videoPlayer.id = `videoPlayer_${sign}`;
        this.videoId = `videoPlayer_${sign}`;
        this.initPlayer();
    }
    beforeDestroy() {
        this.dispose();
    }
}
</script>