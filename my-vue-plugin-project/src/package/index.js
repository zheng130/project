/*
 * @Author: v_zhengping v_zhengping@baidu.com
 * @Date: 2024-07-18 16:34:38
 * @LastEditors: v_zhengping v_zhengping@baidu.com
 * @LastEditTime: 2024-07-18 16:39:43
 * @FilePath: /project/my-vue-ts-project/package/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import VideoPlayer from '../components/video-player/index.vue'; // 引入封装好的组件
const array = [VideoPlayer]; // 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
const install = function (Vue) {
    array.forEach((com) => {
        Vue.component(com.name, com);
    });
};

export default install;