<!--
 * @Author: TerryMin
 * @Date: 2022-06-14 06:54:49
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-16 15:31:21
 * @Description: file not
-->
<template>
  <div>cedd</div>
  <img
    src="https://tpc.googlesyndication.com/simgad/18353789225417691776?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qlUzQgZBhFT6fyKW_HkFfC7QjtaDQ"
    alt=""
    ref="dom"
  />
  <button @click="handleBtn">点击事件</button>
</template>

<script setup>
import { ref, onMounted,getCurrentInstance } from "vue";
const dom = ref(null);
onMounted(() => {
  console.log(this,getCurrentInstance());
  console.log(dom.value);
  
});
const handleBtn = () => {
  dom.value.src="https://img.cmvideo.cn/publish/voms2/uic_service/picture/userImage/543/626/5181.jpg"
};
</script>
<style lang="scss" scoped></style>
