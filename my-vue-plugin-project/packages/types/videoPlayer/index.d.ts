/*
 * @Author: v_zhengping v_zhengping@baidu.com
 * @Date: 2024-07-18 19:05:37
 * @LastEditors: v_zhengping v_zhengping@baidu.com
 * @LastEditTime: 2024-07-18 19:06:35
 * @FilePath: /my-vue-plugin-project/src/types/videoPlayer/index.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface VideoPlayerConfig {
    autoplay: boolean;
    controls: boolean;
    loop: boolean;
    muted: boolean;
    preload: string;
    videoUrl: string;
}