<!--
 * @Author: TerryMin
 * @Date: 2022-04-26 10:00:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-07 16:04:17
 * @Description: file not
-->
<template>
  <div>
    <button type="button" @click="changeBtn">Hooks按钮</button>
  </div>
  <div>num1:<input v-model.number="num1" /></div>
  <div>加法等于:{{ addNum }}</div>
</template>

<script setup>
import { ref, reactive, onMounted, toRef } from "vue";
import { useAdd } from "@/hooks/useAdd";

const num1 = ref(2);
const num2 = ref(1);
const { addNum, addFn } = useAdd({ num1, num2 });

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${addNum.value}.`);
});

const changeBtn = () => {
  addFn(num1.value, num2.value);
};
</script>

<style scoped>
h1 {
  color: v-bind(color);
}
</style>
