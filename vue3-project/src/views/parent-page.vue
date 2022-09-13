<!--
 * @Author: TerryMin
 * @Date: 2022-01-14 14:47:17
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-02 15:36:09
 * @Description: file not
-->

<template>
  <RichEditor />
</template>

<script setup>
import { provide } from 'vue'
import HelloWorld from "../components/HelloWorld.vue";
import ChildComponent from '../components/ChildComponent.vue'
import RichEditor from '../components/RichEditor/RichEditor.vue'

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
