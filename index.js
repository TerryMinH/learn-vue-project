/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:36:25
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-10-25 11:48:40
 * @Description: file not
 */
const isArray = Array.isArray;
function isObject(data) {
  return data !== null && typeof data === "object";
}
let count = 1;
// 加密 递归对象处理成字典序
const recursionFn = (propKey, obj) => {
  let upperArr = [];
  Object.keys(obj).forEach((key) => {
    let tempArr = [];
    if (isObject(obj[key])) {
      if (count < 2) {
        count++;
        tempArr = recursionFn(`${propKey}.${key}`, obj[key]);
      } else {
        tempArr = [`${propKey}.${key}=MIGUOBJECT`];
      }
    }
    if (isArray(obj[key])) {
      tempArr = [`${propKey}.${key}=MIGUOBJECT`];
    }
    if (!isObject(obj[key]) && !isArray(obj[key])) {
      tempArr = [`${propKey}.${key}=${obj[key]}`];
    }
    upperArr.push(...tempArr);
  });
  return upperArr;
};

// 加密数据处理
const encodeSearchParams = (obj) => {
  if (!isObject(obj)) {
    console.log("参数必须为Object");
    return "";
  }

  let upperArr = [];
  let sortObjToString = "";

  Object.keys(obj).forEach((key) => {
    let tempArr = [];
    if (isObject(obj[key])) {
      count = 1;
      tempArr = recursionFn(`${key}`, obj[key]);
    }
    if (isArray(obj[key])) {
      tempArr = [`${key}=MIGUOBJECT`];
    }
    if (!isObject(obj[key]) && !isArray(obj[key])) {
      tempArr = [`${key}=${obj[key]}`];
    }
    upperArr.push(...tempArr);
  });
  const sortKeys = upperArr.sort();

  console.log("排序值:", sortKeys);
  const LEN = sortKeys.length - 1;
  sortKeys.forEach((key, index) => {
    sortObjToString += `${key}${index < LEN ? "&" : ""}`;
  });
  return sortObjToString;
  // return encodeURIComponent(sortObjToString);
};

const obj = {
  a: { 
   c: 1, 
   f: { g: 3 },
   h: { s: 4 } 
  },
  b: { d: 2 },
};
console.log(encodeSearchParams(obj));
