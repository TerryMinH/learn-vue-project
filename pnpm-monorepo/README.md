<!--
 * @Author: TerryMin
 * @Date: 2022-07-27 18:06:28
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-07-29 17:46:20
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
```
## 项目模块之间依赖
```
Amodule 依赖 Butils(对应package.json中的name), 在更目录下执行
pnpm i Butils -D --filter Amodule

```


# migu-activity-project 重构

# monorepo多项目管理
[monorepo进行多项目管理实践](https://juejin.cn/post/7043990636751503390)

[monorepo多项目打包问题及方案分析](https://juejin.cn/post/6950082433647640612)

[monorepo 源码管理总结](https://blog.csdn.net/QcloudCommunity/article/details/122994881)

[vue3+vite配置](https://juejin.cn/post/6975442828386107400)