<!--
 * @Author: TerryMin
 * @Date: 2022-04-26 10:00:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-08-21 19:42:13
 * @Description: file not
-->
<template>
  <div>
    <button type="button" @click="changeBtn('1')">按钮1</button>
    <button @click="changeBtn('2')">按钮2</button>
  </div>
  <div class="content">
    <div v-for="(item, index) in tableData.list">{{ item }}</div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, toRefs, toRef, shallowReactive } from "vue";

let obj = { name: "alice", age: 12 };
let newObj = toRef(obj, "name");

const initData = () => {
  return {
    list: [1, 2, 31],
  };
};
let tableData = reactive({
  list: [1, 2, 31],
});

onMounted(() => {
  const { name, data } = obj || {};
  const { relateId } = data || {};
  // console.log(name, relateId);
});

const changeBtn = (type) => {
  switch (type) {
    case "1":
      console.log(99);
      tableData.list = [4, 5, 6];
      break;
    case "2":
      newObj.value = "Tom";
      console.log(obj, newObj);
      break;
  }
};
</script>

<style scoped>
h1 {
  color: v-bind(color);
}
</style>
