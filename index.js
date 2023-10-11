/*
 * @Author: TerryMin
 * @Date: 2023-09-25 20:22:44
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-09-25 20:54:13
 * @Description: file not
 */
const wardList = [
  { name: "terrymin", age: 12 },
  { name: "terrymin1", age: 33 },
];
const obj1 = {
  name: "ceshi",
  age: 55,
};
for (const [key, value] of wardList.entries()) {
  console.log(key);
  console.log(12, value);
}
// console.log(Object.entries(wardList));
