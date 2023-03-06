<!--
 * @Author: TerryMin
 * @Date: 2022-08-19 11:02:06
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-06 16:13:00
 * @Description: file not
-->

# Typescript

## 泛型 [泛型使用](https://juejin.cn/post/7064351631072526350)

1. 泛型理解:

- 泛型:定义函数，接口或者类的时候，不预先定义好具体的类型，而在使用的时候在指定类型的一种特性
- 使用方式:泛型通过<>的形式进行表述，可以声明:函数、接口、类.
- 注意事项：泛型无法约束类的静态成员。

2. 指定泛型类型两种方式。

- 直接定义要使用的类型
- TS 类型推断,自动推导出类型

```ts
print<string>("hello"); // 定义 T 为 string
print("hello"); // TS 类型推断，自动推导类型为 string

// type书写方式
type Print = <T>(arg: T) => T;
const printFn: Print = function print(arg) {
  console.log(arg);
  return arg;
};

// interface书写方式
interface Iprint<T> {
  (arg: T): T;
}
function print<T>(arg: T) {
  console.log(arg);
  return arg;
}
const myPrint: Iprint<number> = print;
```

## ts 关键字(https://juejin.cn/post/6985296521495314445#heading-28)

1. typeof : 获取变量或属性的类型,一般和其他类型操作符搭配使用

```ts
{
  const res = { name: "Lucy", age: 18 };
  type StuType = typeof res;
  function fn(obj: StuType) {
    // 这里写obj. 有 name 和 age 的提示了
    console.log(obj.name);
  }
  fn(res);
}

{
  // ReturnType<T> 会返回该函数的返回值的类型
  type Predicate = (x: unknown) => boolean;
  type K = ReturnType<Predicate>;
  /// type K = boolean
}
```

- 总结:使用 typeof 操作符来获取变量 res 的类型，结果与第一种（对象字面量形式的类型）相同 注意：typeof 只能用来查询变量或属性的类型，无法查询其他形式的类型（比如，函数调用的类型） -[文档](https://ts.yayujs.com/)

2. keyof :获取对象中的所有键字面量类型组成的联合类型

- [进阶 keyof](https://blog.csdn.net/lcl130/article/details/125214788)

```ts
type Person = {
  id: number;
  name: string;
  age: number;
};
type P1 = keyof Person; //'id' | 'name' | 'age'
```

3. as(类型断言) 用法: 类型断言两种表现形式: 1 "尖括号"语法, 2 as 语法。注意:两种形式是等价的;但是在 JSX 使用时,只有 as 语法断言是被允许的.

```ts
// 1 "尖括号"语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// 2 as语法
let strAsLength: number = (someValue as string).length;
```

4. extends: K extend keyof T: 表示 K 是 T 的子类型，这里是一个类型约束声明。(https://blog.csdn.net/qq_36503569/article/details/119383782)
5. in: in 可以理解为 for ... in，表示从 keyof T 中去遍历每一个类型

6. infer 占位符式的关键字:表示在 extends 条件语句中以占位符出现的用来修饰数据类型的关键字，被修饰的数据类型等用到的时候才能被推断出来

- 作用:获取参数、返回值、泛型的类型
- 出现位置:参数、返回值、类型的泛型具体化类型上
- 泛型与 infer 区别: 出现位置的不同:1 泛型出现在函数，接口，类中。2infer 出现在 extends 后的表达式中
- [infer 使用](https://blog.csdn.net/lcl130/article/details/125352331)


7. [条件类型](https://blog.csdn.net/lcl130/article/details/125244779)


## [内置工具类型实现](https://juejin.cn/post/6896043465801793550)

```ts
// 1 Exclude<T, U> 的作用是将某个类型中属于另一个的类型移除掉,剩余的属性构成新的类型
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"

// 2 Extract和 Exclude 相反，Extract<T,U> 从 T 中提取出 U。
type T1 = Extract<"a" | "b" | "c", "a" | "f">; // "a"

type Person = {
  name: string;
  age: number;
  gender: string;
};

// 3 Pick从某个类型中挑出一些属性出来
type P1 = Pick<Person, "name" | "age">; // { name: string; age: number; }

// 4 Omit 与Pick相反，Omit<T,K> 从T中取出除去K的其他所有属性
type P2 = Omit<Person, "age" | "gender">; // {name:string}

// 5 Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。[高级类型 Record](https://zhuanlan.zhihu.com/p/356662885)
type Property = "key1" | "key2";
type Person = Record<Property, string>;
const p: Person = {
  key1: "hello 啊",
  key2: "树哥",
};

// 6 NonNullable 去除类型中的 null 和 undefined
type U = NonNullable<string | number | undefined>; // string | number

// 7 ReturnType 用来得到一个函数的返回值类型
type Func = (value: string) => string;
const test: ReturnType<Func> = "1";

// 8 Parameters 用于获得函数的参数类型所组成的元组类型。
type U1 = Parameters<(a: number, b: string) => void>; // [number, string]
```

## TS继承