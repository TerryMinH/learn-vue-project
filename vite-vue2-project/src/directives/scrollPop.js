/*
 * @Author: TerryMin
 * @Date: 2022-03-23 11:14:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-16 11:29:56
 * @Description: file not
 */
const scrollPop = {
  bind(el) {
    //定义此时到元素的内容垂直滚动的距离
    el.st =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    let cssStr = `overflow: hidden;width: 100%; height: 100%; position: fixed; top: ${-el.st}px;`;
    document.querySelector("html").cssText = cssStr;
    document.body.style.cssText = cssStr;
  },
  unbind(el, { value }) {
    let cssStr =
      "overflow: auto; height: 100%; position: relative; top: 0px;scroll-behavior: auto";
    document.querySelector("html").cssText = cssStr;
    document.body.style.cssText = cssStr;
    document.querySelector("html").style.scrollBehavior = "auto";
    //手动设置滚动距离
    document.documentElement.scrollTop = el.st;
    document.body.scrollTop = el.st;
    if (value !== "smooth") return;
    //如果传了滚动方式为smooth平稳滚动即有感滚动，当滚动完毕后，把auto改回smooth
    setTimeout(() => {
      cssStr = `overflow: auto; height: 100%; position: relative; top: 0px; scroll-behavior: ${
        value || "smooth"
      }`;
      document.querySelector("html").cssText = cssStr;
      document.querySelector("html").style.scrollBehavior = value || "smooth";
      document.body.style.cssText = cssStr;
    }, 1);
  },
};

export default scrollPop;
