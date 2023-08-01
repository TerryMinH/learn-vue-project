/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:36:25
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-07-14 17:10:06
 * @Description: file not
 */
// const { nameTest: name1 } = { nameTest: "terry" };
// console.log(name1);

// const Fruits = ["banana", "apple", "orange"];
// const [first, ...rest] = Fruits;
// console.log(first);
// console.log(rest);
// const obj = false;
// console.log(!!obj);

let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log("test:" + i);
  text = text + i;
  // if (i !== 3) {
  //   console.log("test:" + i);
  //   text = text + i;
  // }
}

const obj = {
  iosBlacklist: ["12", 333],
};

console.log(Object.assign(obj, { iosBlacklist: [] }));
