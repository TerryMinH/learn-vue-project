/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:00:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-01-23 10:03:12
 * @Description: file not
 */
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

const COLORS = {
  red: "red",
  blue: "blue",
};

// 首先通过typeof操作符获取color变量的类型，然后通过keyof操作符获取该类型的所有键，
// 即字符串字面量联合类型 'red' | 'blue'

interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[]; // number | "length" | "push" | "concat" | ...
type K3 = keyof { [x: string]: Person }; // string | number

const k: K2 = 2;

type Dog = { [y: symbol]: number };
type dog = keyof Dog;
