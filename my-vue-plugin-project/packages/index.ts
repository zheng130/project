/*
 * @Author: v_zhengping v_zhengping@baidu.com
 * @Date: 2024-07-18 17:38:10
 * @LastEditors: v_zhengping v_zhengping@baidu.com
 * @LastEditTime: 2024-07-22 10:46:37
 * @FilePath: /my-vue-plugin-project/packages/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import VideoPlayer from './video-player/src/index.vue';
// 定义组件类型，确保每个组件都有 name 属性
// interface ComponentWithName extends Vue {
// 	name: string;
//   }
// // 存储组件列表
const components = [
	VideoPlayer
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (VueInstance: typeof Vue) {
    // 判断是否安装
    if (install.installed) return
	// 遍历注册全局组件
	components.map(component => VueInstance.component(component.name, component))
}

install.installed = false;

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install,
	...components
}