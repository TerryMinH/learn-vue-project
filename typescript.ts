/*
 * @Author: TerryMin
 * @Date: 2021-11-12 13:56:46
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-03 11:14:26
 * @Description: file not
 */

interface Person {
	name: string;
	age: number;
	gender?: string;
}

class Student {
  constructor(private info: Person) {}

  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}
const student = new Student({
  name: 'uuuu',
  age: 20,
  gender: 'male'
})
const test = student.getInfo('name');
console.log(test)

export {
  Student
}