/*
 * @Author: TerryMin
 * @Date: 2023-03-07 15:51:08
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-10 08:10:16
 * @Description: file not
 */
import { reactive, toRefs } from "vue";

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
  return {
    ...toRefs(store),
    logout,
    login,
    paramsObj,
    changeNumber
  };
};
