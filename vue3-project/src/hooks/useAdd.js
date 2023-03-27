/*
 * @Author: TerryMin
 * @Date: 2023-03-07 15:51:08
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-23 17:47:34
 * @Description: file not
 */
import { reactive, toRefs, computed } from "vue";

const store = reactive({
  state: {
    name: "Eduardo",
    isAdmin: true,
  },
  number: 2,
});

const logout = async () => {
  store.state.isAdmin = false;
  store.state.name = "";
  store.number = 3;
  console.log(store.state);
};

const login = async (user) => {
  store.state.isAdmin = true;
  store.state.name = user;
  console.log(store.state);
};

export const useUserStore = (obj) => {
  const paramsObj = reactive(obj);
  const changeNumber = () => {
    paramsObj.testNumber = 6;
  };

  const testComputed = computed(() => {
    console.log(1111);
    return "www";
  });

  return {
    ...toRefs(store),
    testComputed,
    logout,
    login,
    paramsObj,
    changeNumber,
  };
};
