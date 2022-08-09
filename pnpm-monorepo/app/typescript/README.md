<!--
 * @Author: TerryMin
 * @Date: 2022-08-05 16:28:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-08-06 17:19:15
 * @Description: file not
-->
# typescript学习

[typescript基础学习](https://juejin.cn/post/7124117404187099172#heading-58)

1. unknown与any的最大区别是：

任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何类型。unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any

2. object Object 和 {} 类型

object object 类型用于表示所有的非原始类型，即我们不能把 number、string、boolean、symbol等 原始类型赋值给 object。在严格模式下，null 和 undefined 类型也不能赋给 object。object指的是non-primitive，可以理解为“随便一个对象”;


大 Object 代表所有拥有 toString、hasOwnProperty 方法的类型 所以所有原始类型、非原始类型都可以赋给 Object(严格模式下 null 和 undefined 不可以)


{}指的是non-nullish，可以理解为“随便一个值”，可以是1、"abc"、symbol("")等原始数据，但是不能是null和undefined

3. 类型断言

某些情况下，我们可能比typescript更加清楚的知道某个变量的类型，所以我们可能希望手动指定一个值的类型 类型断言有两种方式
```
let str: any = "to be or not to be";
let strLength: number = (<string>str).length;
```

```
let str: any = "to be or not to be";
let strLength: number = (str as string).length;
```

4. 交叉类型：交叉类型取的多个类型的并集，但是如果key相同但是类型不同，则该key为never类型

5. 接口 与 type(类型别名) 区别：

都允许扩展：interface 用 extends 来实现扩展;type 使用 & 实现扩展

不同点：type可以声明基本数据类型别名/联合类型/元组等，而interface不行; interface能够合并声明，而type不行

6. 泛型 [泛型使用](https://juejin.cn/post/7064351631072526350)



# 项目规范
[Eslint与Prettier区别](https://juejin.cn/post/7053365694619975711)

[规范单词意义](https://juejin.cn/post/6860440041039069191)
