/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:00:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-12-24 16:24:21
 * @Description: file not
 */

// Record实现
type MyRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

type petsGroup = "dog" | "cat" | "fish";
interface IPetInfo {
  name: string;
  age: number;
}
// type keyExclude=Exclude<petsGroup,"fish">;
// type IPets = Record<keyExclude, IPetInfo>; // 排除

type IPets = Record<petsGroup, IPetInfo>;

// type IPetsOptions = Partial<IPets>; // 可选的

type IPetsPick=Omit<IPets,"fish">;

const animalsInfo: IPetsPick = {
  dog: {
    name: "dogName",
    age: 2,
  },
  cat: {
    name: "catName",
    age: 3,
  },
  // fish: {
  //   name: "catName",
  //   age: 3,
  // },
};

type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a" 
