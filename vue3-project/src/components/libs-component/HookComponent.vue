<!--
 * @Author: TerryMin
 * @Date: 2023-03-07 15:56:46
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-04-19 18:50:40
 * @Description: file not
-->

<template>
  <div>
    <p>是否登录：{{ state.isAdmin }}</p>
    <p>name:{{ state.name }}</p>
    <!-- <p>数字:{{ number }} {{ ReactvieObj.testNumber }}</p> -->
    <p>{{ testComputed }}</p>
    <!-- <div>{{ nameTest }}{{ proxyObj.testNumber }}</div> -->
    <button @click="toggleLogin">切换登录</button>
  </div>
</template>

<script setup>
import { toRefs, toRef, ref, reactive } from "vue";
// import { useStorage } from "@vueuse/core";
import { useAdd } from "@/hooks/useAdd";
const obj = {
  testNumber: 5,
};
// const obj1 = {
//   testNumber: 8,
// };
// let nameTest = ref("terrymin");

// const proxyObj = ref(obj1);

// console.log(proxyObj);
const useAddCenter = useAdd(obj);
const { store, login, logout, changeNumber, paramsObj, testComputed } =
  useAddCenter;

const { state } = store;

const ReactvieObj = toRefs(paramsObj);

// console.log(useAddCenter);
// const nameTest = toRefs(state);

const toggleLogin = async () => {
  console.log(state);
  // console.log("toggleLogin", store, testStore);
  await logout();
  changeNumber();
  // console.log(store.state.isAdmin);
  // if (store.state.isAdmin) {
  //   console.log(111);
  //   await logout();
  // } else {
  //   console.log(222);
  //   await login("ed", "ed");
  // }
  console.log("store", state);
  // console.log("testStore", testStore);
};
</script>
