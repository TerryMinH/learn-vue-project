/*
 * @Author: TerryMin
 * @Date: 2022-03-24 11:43:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-03-24 11:43:01
 * @Description: file not
 */
import LoadingComponent from './loading.vue'

let Loading = {};

Loading.install = (Vue) => {
    Vue.component('loading', LoadingComponent)
}

export default Loading;

