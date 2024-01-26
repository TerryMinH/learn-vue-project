<!--
 * @Author: TerryMin
 * @Date: 2022-08-05 16:28:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-01-23 10:09:33
 * @Description: file not
-->

# [typescript](https://typescript.bootcss.com/) 学习

[typescript 基础学习](https://juejin.cn/post/7124117404187099172#heading-58)
[TS 基本概念总结](https://juejin.cn/post/7088304364078497800#heading-4)

1. [unknown 与 any 的最大区别](https://juejin.cn/post/7021676475434663966)

任何类型的值可以赋值给 any，同时 any 类型的值也可以赋值给任何类型。unknown 任何类型的值都可以赋值给它，但它只能赋值给 unknown 和 any

```js
function invokeAnything(callback: unknown) {
  // 可以将任何东西赋给 `unknown` 类型，
  // 但在进行类型检查或类型断言之前，不能对 `unknown` 进行操作
  if (typeof callback === "function") {
    callback();
  }
}
invokeAnything(1); // You can assign anything to `unknown` type

function invokeAny(callback: any) {
  callback();
}
invokeAny(1); // throws "TypeError: callback is not a function"
```

2. object Object 和 {} 类型
   [object 区别](https://cloud.tencent.com/developer/article/1610691)

object object 类型用于表示所有的非原始类型，原始类型: number、string、boolean、symbol、null 和 undefined。object 指的是 non-primitive，可以理解为“随便一个对象”;

大 Object 代表所有拥有 toString、hasOwnProperty 方法的 Object 实例类型。

{}指的是 non-nullish 没有成员的空对象，可以是 1、"abc"、symbol("")等原始数据，但是不能是 null 和 undefined

```js
// object
let obj1: object = { a: 1, b: 2 };
obj1.a = 3; // error
let obj2: { a: number, b: number } = { a: 1, b: 2 };
obj2.a = 3; // ok
let a: object;
a = "1"; // Error Type '"1"' is not assignable to type 'object'
a = {}; // ok

// Object
let b: Object;
b = "1"; // Success
b = {}; // Success

// {}
c = "1";
c.prop = 123; // Error
c = null; // Error
```

4. 交叉类型(&)、联合类型(|)、never 类型

- 交叉类型：交叉类型取的多个类型的 **并集**(必须同时满足 A 和 B 里面所有类型)，但是如果 key 相同但是类型不同，则该 key 为 never 类型
- [联合类型](https://juejin.cn/post/6930628304491773966):产生一个包含所有类型的**选择集类型**(至少满足其中一个 A 或者 B)

  - 原子类型不可以合并: 如果仅仅把基本类型、字面量类型、函数类型等原子类型合并成交叉类型，是没有任何用处的。因为任何类型都不能满足同时属于多种原子类型。
  - 合并的接口类型存在同名属性: 如果同名属性的类型兼容，比如一个是 number，另一个是 number 的子类型、数字字面量类型，合并后属性的类型就是两者中的子类型。

```js
interface A {
  name: string;
  age: number;
}
interface B {
  name: string;
  id: string;
}

type Union = A | B;
const c: Union = {
  name: "terrymin1",
  id: "rr",
  age: 22,
};
const b: Union = {
  name: "terrymin",
  age: 45,
};

type Intersetion = A & B;
const d: Intersetion = {
  id: "yuie",
  age: 32,
  name: "terrymin",
};
```

5. 接口 与 type(类型别名) 区别：(https://juejin.cn/post/6844904114925600776)

- type 会给一个类型起个新名字。 type 有时和 interface 很像，但是可以作用于原始值（基本类型），联合类型，元组以及其它任何你需要手写的类型

- 都允许扩展：interface 用 extends 来实现扩展;type 使用 & 实现扩展
- 不同点：type 可以声明基本数据类型别名/联合类型/元组等，而 interface 不行; interface 能够合并声明，而 type 不行
- 公共的用 interface 实现，不能用 interface 实现的再用 type 实现。

6. ts 操作符

- [ts 空值合并运算符(??)](https://cloud.tencent.com/developer/article/1600583)
- 空值合并运算符（??）是一个逻辑运算符。当左侧操作数为 null 或 undefined 时，其返回右侧的操作数。否则返回左侧的操作数

```js
const foo = null ?? "default string";
console.log(foo); // 输出："default string"

const baz = 0 ?? 42;
console.log(baz); // 输出：0
```

7. 类型守卫
   类型守卫主要有以下几种方式:
   typeof：用于判断 number，string，boolean 或 symbol 四种类型；
   instanceof：用于判断一个实例是否属于某个类
   in：用于判断一个属性/方法是否属于某个对象

```js
type Foo = string | number;
const controlFn = (foo: Foo) => {
  if (typeof foo === "string") {
    // foo 收窄为string类型
  } else if (typeof foo === "number") {
    // foo 收窄为number类型
  }
};
```

## 模块、命名空间

1. 命名空间(内部模块):本质上是一个对象，作用是将一系列相关的全局变量组织到一个对象的属性。用 namespace 来定义;主要用于组织代码，避免命名冲突

```ts
namespace Letter {
  export let a = 1;
  export let b = 2;
  export let c = 3;
  // ...
  export let z = 26;
}
// 编译成js
var Letter;
(function (Letter) {
  Letter.a = 1;
  Letter.b = 2;
  Letter.c = 3;
  // ...
  Letter.z = 26;
})(Letter || (Letter = {}));
```

- 在声明文件(typing.d.ts)中声明，这样就不需要 import 就可以使用该命名空间

```ts
// typing.d.ts声明 命名空间 这个空间的命名，我以鞋柜举例
declare namespace SHOEBOX {
  // 进行该空间下的方法、类型、接口、实体类等等定义
  type Shoe = {
    size: number;
    name: string;
  };
}
//other.ts 其他的ts文件中
const shoe: SHOEBOX.Shoe = {
  size: 1,
  name: "帆布鞋",
};
```

2. 模块(外部模块): ts 的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。

- 模块在其自身的作用域里执行，而不是在全局作用域里;这意味着定义一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确地使用 export 形式之一导出他们。(https://blog.csdn.net/qq_37708564/article/details/106256723)

3. 命名空间与模块的区别:在正常的 TS 项目开发过程中并不建议用命名空间，但通常在通过 d.ts 文件标记 js 库类型的时候使用命名空间，主要作用是给编译器编写代码的时候参考使用

4. declare

- declare:声明全局变量、全局函数、全局类或全局枚举类型等。工作中你可能已经用过的 eval、isNaN、encodeURI 和 parseInt 等函数也是在 lib.es5.d.ts 声明文件中声明的.[declare 用法](https://juejin.cn/post/7105644010668032030)

[.d.ts 描述文件的使用](https://blog.csdn.net/zy21131437/article/details/121946978)
