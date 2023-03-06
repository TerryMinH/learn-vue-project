<!--
 * @Author: TerryMin
 * @Date: 2022-12-26 13:58:25
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-12-27 14:53:40
 * @Description: file not
-->

# typescript 编译原理

1. [ts 配置详解](https://juejin.cn/post/6844904093568221191)

- tsconfig.json 作为其配置文件，它主要包含两块内容:

  - 1 定义编译选项:(https://juejin.cn/post/6924264635218542605)
    - 1.1 files:files 属性是一个数组，数组元素可以是相对文件路径和绝对文件路径。
    - 1.2 include、exclude: include 和 exclude 属性也是一个数组，但数组元素是类似 glob 的文件模式。它支持的 glob 通配符。
    - 1.3 注意事项:exclude 只对 include 有效，对 files 无效。即 files 指定的文件如果同时被 exclude 排除，那么该文件仍然会被编译器引入。
  - 2 指定待编译的文件: compilerOptions

- [ts 编译原理](https://juejin.cn/post/7009661133686734861)



[web-interview](https://github.com/febobo/web-interview)
