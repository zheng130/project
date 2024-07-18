/*
 * @Author: v_zhengping v_zhengping@baidu.com
 * @Date: 2024-07-18 14:58:52
 * @LastEditors: v_zhengping v_zhengping@baidu.com
 * @LastEditTime: 2024-07-18 15:16:17
 * @FilePath: /project/my-vue-ts-project/src/shims-tsx.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      
    }
  }
}
