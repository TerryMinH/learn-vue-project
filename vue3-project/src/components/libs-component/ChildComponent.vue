<!--
 * @Author: TerryMin
 * @Date: 2022-06-14 06:54:49
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-02 17:16:07
 * @Description: file not
-->
<template>
  {{ $systemId }}
  <div id="demo">
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";
const dom = ref(null);

const show = ref(true);

const counterStore = useCounterStore();
const { count, userList } = storeToRefs(counterStore);

let subscribe = null;

onMounted(() => {
  const context = getCurrentInstance();
  // console.log(context);
  subscribe = counterStore.$subscribe((mutation, state) => {
    console.log(mutation);
    console.log(state);
  });
});

const handleBtn = (type) => {
  switch (type) {
    case 1:
      counterStore.increment();
      break;
    case 2:
      counterStore.$patch((state) => {
        state.count += 10;
        state.userList.push({ name: "批量修改数据" });
      });
      break;
    case 3:
      counterStore.$reset();
      break;
  }
};

const addBtn = () => {
  subscribe && subscribe();
};
</script>
<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
