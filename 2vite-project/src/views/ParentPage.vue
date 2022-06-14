<!--
 * @Author: TerryMin
 * @Date: 2022-01-14 14:47:17
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-06-14 07:02:54
 * @Description: file not
-->

<template>
  <HelloWorld
    msg="Hello Vue 3 + Vite"
    @onExport="handleFn"
  />
  <DemoTest />
</template>

<script setup>
import { provide } from 'vue'
import HelloWorld from "../components/HelloWorld.vue";
// import TodoList from "../components/TodoList.vue";
import DemoTest from '../components/demoTest.vue'

provide('location', 'North Pole')
provide('geolocation', {
  longitude: 90,
  latitude: 135
})

const handleFn = (e) => {
  console.log(e);
};
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
