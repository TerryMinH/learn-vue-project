<!--
 * @Author: TerryMin
 * @Date: 2022-09-15 09:28:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-10-22 10:01:14
 * @Description: file not
-->
# Vue2 API学习

1. [computed与watch的区别](https://www.jianshu.com/p/5f83e06ae32f)

 - computed 是计算属性: 支持缓存不支持异步。如果computed属性值是函数，那么默认会走get方法。一般可用于页面有大量或者复杂的表达式去处理数据时使用。

 - watch 是侦听属性: 不支持缓存支持异步,一般可用于组件属性值变化的动态监听, watch函数有两个配置项deep(深度监听) immediate(组件加载立即触发回调函数的执行)

2. [Vue中$set的使用场景](https://blog.csdn.net/Web_J/article/details/86361105)
   [Vue中$set的实现原理](https://juejin.cn/post/7015214879330172964)


