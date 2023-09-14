/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:00:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-08-22 13:52:50
 * @Description: file not
 */
type Person = {
  name: string;
  age: number;
  gender: string;
  test: {
    name: string;
  };
};

// 3 Pick从某个类型中挑出一些属性出来
type P1 = Pick<Person, "test">; // { name: string; age: number; }

type MyReturnType<T extends Function> = T extends (...args: any) => infer R
  ? R
  : never;

const fn = (v: boolean): number => {
  if (v) return 1;
  else return 2;
};
type b = typeof fn;

type a = MyReturnType<typeof fn>;
