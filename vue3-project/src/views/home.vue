<!--
 * @Author: TerryMin
 * @Date: 2022-01-14 14:47:17
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-06-08 16:16:40
 * @Description: file not
-->

<template>
  <div>
    <h3>BaseComponent:</h3>
    <BaseComponent />
  </div>

  <div>
    <h3>HookComponent:</h3>
    <HookComponent />
  </div>

  <div>
    <h3>ElementPlusComponent:</h3>
    <ElementPlusComponent />
  </div>

  <!-- <div>
    <h3>PinaBasicSetUp:</h3>
    <PinaBasicSetUp />
  </div> -->
</template>

<script setup>
import { provide, getCurrentInstance, defineAsyncComponent, ref } from "vue";
// import { BaseComponent ,HookComponent} from "@/components/index";

const internalInstance = getCurrentInstance();
// 搂一眼，看看注册的组件名字是啥
// console.log(internalInstance.appContext.components);

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
