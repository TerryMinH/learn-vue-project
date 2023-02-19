<!--
 * @Author: TerryMin
 * @Date: 2022-06-14 06:54:49
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-17 17:21:15
 * @Description: file not
-->
<template>
  {{ $systemId }}
  <button @click="handleBtn">点击事件</button>
  
  <div id="demo">
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
const dom = ref(null);

const show = ref(true);
onMounted(() => {
  const context = getCurrentInstance();
  console.log(context);
});
const handleBtn = () => {
  dom.value.src =
    "https://img.cmvideo.cn/publish/voms2/uic_service/picture/userImage/543/626/5181.jpg";
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
