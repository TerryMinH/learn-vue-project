<!--
 * @Author: TerryMin
 * @Date: 2021-12-11 15:17:15
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-08 16:05:32
 * @Description: file not
-->

# Vue3 API 学习

1. [Ref 与 Reactive 区别](https://blog.csdn.net/cookcyq__/article/details/121618833)

一 ref、 toRef 、 toRefs
ref 的本质是拷贝，与原始数据没有引用关系.响应式数据发生改变，而原始数据并不会改变,界面会自动更新.

toRef 的本质是引用，与原始数据有关联,并不会触发 UI 界面的更新

toRefs 接收一个对象作为参数，它会遍历对象身上的所有属性，然后挨个调用 toRef 执行

toRef 与 toRefs 两者区别:

toRef 与 toRefs 都是将 reactive 的 json 内节点提取出来，做为独立的响应式结构。

toRef 是指定某一节点提取出来，toRefs 是一次性将所有节点提取出来。但 toRefs 只能提取一级节点！

toRefs 返回的变量修改，与原始值无任何响应式关联。toRefs 只提取第一级子节点


```js
let obj = { name: "alice", age: 12 };
let newObj = ref(obj.name);
let newObj2 = toRef(obj, "name");
let newObj3= toRefs(obj);

function change() {
  newObj.value = "Tom";
  console.log(obj, newObj);
}
```

2. [defineComponent 解决的问题](https://blog.csdn.net/qq_36157085/article/details/109498473)

3. [Vue3 父子组件通信](https://www.cnblogs.com/nangezi/p/16175091.html)

4. [Vue2 与 Vue3 最大的区别 — Vue2 使用选项类型 API（Options API）对比 Vue3 合成型 API（Composition API） 组合 API 使用](https://juejin.cn/post/6976830388580646942)

5. [vue3 全局变量定义](https://blog.csdn.net/weixin_50077637/article/details/118693210)

6. Hooks 与 Mixin 区别
   [自定义 Hooks](https://juejin.cn/post/7083401842733875208)

# Pinia 使用

1. 基本使用示例
