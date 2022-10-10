/*
 * @Author: TerryMin
 * @Date: 2022-03-23 10:28:24
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-15 15:03:13
 * @Description: file not
 */
const focus = {
  bind: function (el, binding, vnode) {
    // console.log(el, binding, vnode);
  },
  inserted: function (el) {
    el.focus();
  },
};

export default focus;
