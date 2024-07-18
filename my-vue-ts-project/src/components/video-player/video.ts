/*
 * @Author: v_zhengping v_zhengping@baidu.com
 * @Date: 2024-07-18 15:22:02
 * @LastEditors: v_zhengping v_zhengping@baidu.com
 * @LastEditTime: 2024-07-18 15:22:12
 * @FilePath: /project/my-vue-ts-project/src/components/video-player/video.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface VideoPlayerConfig {
    autoplay: boolean,
    controls: boolean,
    loop: boolean,
    muted: boolean,
    preload: string,
    videoUrl: string
}