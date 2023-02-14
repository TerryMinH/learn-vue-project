/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:00:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-10 10:47:55
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

type IPetsPick = Omit<IPets, "fish">;

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

export const enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1,
  STATEFUL_COMPONENT = 1 << 2,
  TEXT_CHILDREN = 1 << 3,
  ARRAY_CHILDREN = 1 << 4,
  SLOTS_CHILDREN = 1 << 5,
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT,
}

const type = ShapeFlags.STATEFUL_COMPONENT || ShapeFlags.FUNCTIONAL_COMPONENT;

if(type & ShapeFlags.COMPONENT){
  console.log(33);
}
