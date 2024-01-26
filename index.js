/*
 * @Author: TerryMin
 * @Date: 2023-09-25 20:22:44
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-12-11 17:58:52
 * @Description: file not
 */
const formatUrl = (arg) => {
  const { urlStr = "", addObj = {}, removeArray = [] } = arg;
  const url = new URL(urlStr);
  console.log(url);
  const { searchParams } = url;
  if (addObj && typeof addObj === "object") {
    for (const key in addObj) {
      if (addObj[key]) {
        searchParams.append(key, addObj[key]);
      }
    }
  }
  if (removeArray && Array.isArray(removeArray)) {
    removeArray.forEach((item) => {
      searchParams.delete(item);
    });
  }
  return url.href;
};

console.log(
  formatUrl({
    urlStr: "http://36.155.98.104/unify-login-web/#/login",
    addObj: { umsLoginName: "terry" },
  })
);
