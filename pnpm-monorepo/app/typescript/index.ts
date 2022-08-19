/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:00:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-08-19 14:34:32
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
  if('age' in person){
    console.log(`age: ${person.age}`);
  }
  if('hobbit' in person){
    console.log(`hobbit ${person.hobbit}`);
  }

}

