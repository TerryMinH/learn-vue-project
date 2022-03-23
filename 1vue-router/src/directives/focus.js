/*
 * @Author: TerryMin
 * @Date: 2022-03-23 10:28:24
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-03-23 11:07:20
 * @Description: file not
 */
export default focus = {
  bind: function (el, binding, vnode) {
    // console.log(el, binding, vnode);
  },
  inserted: function (el) {
    el.focus()
  }
}