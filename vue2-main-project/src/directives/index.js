/*
 * @Author: TerryMin
 * @Date: 2022-03-23 10:25:15
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-03-23 13:18:43
 * @Description: https://juejin.cn/post/6953879183600648229
 */

// 导入指令定义文件
import debounce from './debounce'
import throttle from './throttle'
import focus from './focus'
import scrollPop from './scrollPop'
// 集成一起
const directives = {
  debounce,
  throttle,
  focus,
  scrollPop
}
//批量注册
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}

