/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:36:25
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-04-11 16:01:47
 * @Description: file not
 */
const FnTest1 = () => {
  console.log("FnTest1");
};
const FnTest = (paramters) => {
  if (paramters.aa) {
    if (paramters.bb) {
      FnTest1();
      return;
    }
    console.log(22);
    return;
  }
  console.log(11);
};
FnTest({ aa: true, bb: true });
