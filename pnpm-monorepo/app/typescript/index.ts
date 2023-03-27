/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:00:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-24 13:24:02
 * @Description: file not
 */
// 示例1
interface Animal {
  eat(): void;
}

interface Dog extends Animal {
  bite(): void;
}

// A的类型为string
type A = Dog extends Animal ? string : number;

const a: A = "this is string";

const dog: Dog = {
  eat() {
    console.log(11);
  },
  bite() {
    console.log(33);
  },
};

type A1 = "x" extends "x" ? string : number; // string
type A2 = "x" & "y" extends "x" ? string : number; // number

type P<T> = T extends "x" ? string : number;
type A3 = P<"x" | "y">; // ?

type MyExtract<T, U> = T extends U ? T : never;


// const a1: A2;
