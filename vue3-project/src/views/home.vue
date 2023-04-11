<!--
 * @Author: TerryMin
 * @Date: 2022-01-14 14:47:17
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-04-11 16:39:55
 * @Description: file not
-->

<template>
  <div>
    <h3>BaseComponent:</h3>
    <BaseComponent />
  </div>

  <hr />
  <div>
    <h3>HookComponent:</h3>
    <HookComponent />
  </div>
</template>

<script setup>
import { provide, getCurrentInstance, defineAsyncComponent, ref } from "vue";
// import { BaseComponent ,HookComponent} from "@/components/index";

const internalInstance = getCurrentInstance();
// 搂一眼，看看注册的组件名字是啥
console.log(internalInstance.appContext.components);

// provide('location', 'North Pole1')
// provide('geolocation', {
//   longitude: 90,
//   latitude: 1351
// })

// const handleFn = (e) => {
//   console.log(e);

// };
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
