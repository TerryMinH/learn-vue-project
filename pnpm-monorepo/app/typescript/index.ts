/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:00:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-05-31 17:04:39
 * @Description: file not
 */
export const isArray = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === "[object Array]";
};

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

console.log(c);