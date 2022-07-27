<!--
 * @Author: TerryMin
 * @Date: 2022-07-27 18:06:28
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-07-27 19:56:57
 * @Description: file not
-->
# monorepo + [pnpm](https://www.pnpm.cn/) + Vue3 + Vite + TypeScript 多项目管理

## 全局安装依赖
比如所有的组件都需要使用到 lodash，就可以执行：
```
pnpm i lodash -w
```
这样就实现了在所有组件中都可以使用 lodash 了。

## 局部安装依赖
1、进入指定的安装目录进行安装
```
npm i lodash
```
2、--filter安装
```
pnpm i lodash --filter vue-project1

