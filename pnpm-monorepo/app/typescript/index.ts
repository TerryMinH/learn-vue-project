/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:00:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-24 17:21:13
 * @Description: file not
 */
interface Boy {
  sex: string;
  age: number;
}
interface Girl {
  sex: Array<number>;
  hobbit: string;
}

type People = Boy | Girl;

function greet(person: People) {
  if ("age" in person) {
    console.log(`age: ${person.age}`);
  }
  if ("hobbit" in person) {
    console.log(`hobbit ${person.hobbit}`);
  }
}

const foo: {
  [index: string]: { message: string };
} = {};
foo["a"] = { message: "some message" };

// ts内置类型
interface Person {
  name: string;
  age: number;
  gender: string;
}
type User = Partial<Person>;

const shuge: User = {
  name: "树哥",
};

type P1 = Omit<Person, "age" | "gender">;
const user: P1 = {
  name: "树哥",
};
enum str {
  A,
  B,
  C,
}
type strUnion = keyof typeof str;
const strInstance: strUnion = "C";

type arr1 = Array<string>;
type arr2 = number[];

type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
