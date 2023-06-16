/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:00:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-06-12 13:48:37
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

