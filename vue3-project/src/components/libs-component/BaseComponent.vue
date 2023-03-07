<!--
 * @Author: TerryMin
 * @Date: 2022-04-26 10:00:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-07 19:29:17
 * @Description: file not
-->
<template>
  <div>
    <button type="button" @click="changeBtn('1')">
      按钮{{ state1.nested.bar }}
    </button>
  </div>
  <h1>{{ msg }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <view @click="handleBtn" ref="box"> 点击新增 </view>
</template>

<script setup>
import { ref, reactive, onMounted, toRefs, toRef, shallowReactive } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
const emits = defineEmits(["onExport"]);
const state = reactive({
  foo: 1,
  bar: 2,
});
const color = ref("red");
const state1 = shallowReactive({
  foo: 1,
  nested: {
    bar: 2,
  },
});

const students = toRefs(state1);
students.foo=2;
console.log(students, state1);

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});

const changeBtn = (type) => {
  switch (type) {
    case "1":
      state1.foo++;
      state1.nested.bar++;
      break;
  }
};

const handleBtn = () => {
  emits("onExport", "emits---");
};
</script>

<style scoped>
h1 {
  color: v-bind(color);
}
</style>
