/*
 * @Author: TerryMin
 * @Date: 2022-03-23 10:26:06
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-03-23 10:26:07
 * @Description: file not
 */

const debounce = {
  inserted: function (el, {value:{fn, event, time}}) {
    //没绑定函数直接返回
    if (typeof fn !== 'function') return
    el._timer = null
    //监听点击事件，限定事件内如果再次点击则清空定时器并重新定时
    el.addEventListener(event, () => {
      if (el._timer !== null) {
        clearTimeout(el._timer)
        el._timer = null
      }
      el._timer = setTimeout(() => {
        fn()
      }, time)
    })
  },
}

export default debounce

