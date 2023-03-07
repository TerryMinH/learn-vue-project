/*
 * @Author: TerryMin
 * @Date: 2023-03-07 15:51:08
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-07 16:04:49
 * @Description: file not
 */
import { ref, watch } from "vue";

const useAdd = ({ num1, num2 }) => {
  const addNum = ref(0);
  watch([num1, num2], ([num1, num2]) => {
    addFn(num1, num2);
  });
  const addFn = (num1, num2) => {
    addNum.value = num1 + num2;
  };
  return {
    addNum,
    addFn,
  };
};
export { useAdd };
