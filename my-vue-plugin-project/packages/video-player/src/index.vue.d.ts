import { Vue } from 'vue-property-decorator';
import { VideoPlayerConfig } from '~/types/video-player';
export default class VideoPlayer extends Vue {
    videoConfig: VideoPlayerConfig;
    player: any;
    videoId: string;
    initPlayer(): void;
    /**
     * @description: 切换视频地址 防止频繁销毁/创建播放器，根据具体场景使用
     * @param {*} url
     * @return {*}
     */
    changeVideoUrl(url: string): void;
    /**
     * @description: 根据视频流的格式，设置sources的type类型：FLV：'video/x-flv'、HLS：'application/x-mpegURL'
     * @param {*} videoUrl
     * @return {*}
     */
    getVideoStreamType: (videoUrl: string) => "video/x-flv" | "application/x-mpegURL";
    /**
     * @description: 销毁播放器 父组件通过this.$refs.的方式，获取该组组件的实例，然后调用该实例的方法
     * @return {*}
     */
    dispose(): void;
    mounted(): void;
    beforeDestroy(): void;
}
