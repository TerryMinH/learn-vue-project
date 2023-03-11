<!--
 * @Author: TerryMin
 * @Date: 2023-03-07 15:56:46
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-10 08:23:41
 * @Description: file not
-->

<template>
  <div>
    <p>是否登录：{{ state.isAdmin }}</p>
    <p>name:{{ state.name }}</p>
    <p>数字:{{ number }} {{ ReactvieObj.testNumber }}</p>

    <hr />
    <button @click="toggleLogin">切换登录</button>
  </div>
</template>

<script setup>
import { toRefs, toRef } from "vue";
// import { useStorage } from "@vueuse/core";
import { useUserStore } from "@/hooks/useAdd";
const obj = {
  testNumber: 5,
};
const { state, number, login, logout, changeNumber,paramsObj } = useUserStore(obj);
console.log(22,obj);
const ReactvieObj = toRefs(paramsObj);
// const numStore = toRef(store, 'number');

// console.log(numStore);
const toggleLogin = async () => {
  console.log(state);
  // console.log("toggleLogin", store, testStore);
  await logout();
  changeNumber();
  console.log(66,obj);
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
