<!--
 * @Author: TerryMin
 * @Date: 2022-04-26 10:00:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-09-19 20:07:10
 * @Description: file not
-->
<template>
  <div>
    <button type="button" @click="changeBtn('1')">按钮1</button>
    <button @click="changeBtn('2')">按钮2</button>
  </div>
  {{ msg }}
  {{ reverseMsg }}
  <!-- <div class="content">
    <div v-for="(item, index) in tableData.list">{{ item }}</div>
  </div> -->
</template>

<script setup>
import { ref, reactive, onMounted, toRefs, toRef, computed } from "vue";

let obj = { name: "alice", age: 12 };
let newObj = toRef(obj, "name");

const msg = ref("helloworld");
const reverseMsg = computed(() => {
  return msg.value.split("").reverse().join("");
});

const handleExp = (opts) => {
  opts.foo = opts.foo ?? "bar";
  opts.baz ?? (opts.baz = "qux");
  console.log(opts);
};

onMounted(() => {
  handleExp({
    foo: 1,
  });
});

const changeBtn = (type) => {
  switch (type) {
    case "1":
      msg.value = "terrymin";
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
