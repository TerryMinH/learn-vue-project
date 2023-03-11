<!--
 * @Author: TerryMin
 * @Date: 2022-04-26 10:00:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-08 10:01:36
 * @Description: file not
-->
<template>
  <div>
    <button type="button" @click="changeBtn('1')">
      按钮1
    </button>
    <button @click="changeBtn('2')"> 按钮2 </button>
  </div>
  <div class="content">
  {{ newObj }}
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, toRefs, toRef, shallowReactive } from "vue";

let obj = { name: "alice", age: 12 };
let newObj = toRef(obj, 'name');

const changeBtn = (type) => {
  switch (type) {
    case "1":
      state1.foo++;
      state1.nested.bar++;
      break;
    case "2":
      newObj.value = "Tom";
      console.log(obj,newObj);
      break;
  }
};
</script>

<style scoped>
h1 {
  color: v-bind(color);
}
</style>
