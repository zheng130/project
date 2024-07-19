/*
 * @Author: v_zhengping v_zhengping@baidu.com
 * @Date: 2024-07-18 16:34:38
 * @LastEditors: v_zhengping v_zhengping@baidu.com
 * @LastEditTime: 2024-07-19 10:14:25
 * @FilePath: /project/my-vue-ts-project/package/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Vue from 'vue/types/umd';
import VideoPlayerComponent from './src/index.vue';
import { InstallableComponent } from '../types/videoPlayer';
const VideoPlayer: InstallableComponent = {
    install(vue: typeof Vue) {
      vue.component(VideoPlayerComponent.name, VideoPlayerComponent);
    },
  };
export default VideoPlayer