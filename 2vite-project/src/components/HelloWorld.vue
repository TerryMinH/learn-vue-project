<!--
 * @Author: TerryMin
 * @Date: 2022-04-26 10:00:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-04-26 14:52:00
 * @Description: file not
-->
<template>
  <h1>{{ msg }}</h1>
  <button
    type="button"
    @click="count++"
  >count is: {{ count }}</button>

  <button
    type="button"
    @click="changeBtn"
  >{{state.time}}</button>
  <view @click="handleBtn" ref="box">
    点击新增
  </view>
  <!-- <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VSCode</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Documentation
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Documentation</a>
  </p> -->

</template>

<script setup>
import { ref, reactive, onMounted, defineEmits } from 'vue'

defineProps({
  msg: String
})

const count = ref(0);
const state = reactive({ time: '时光' })
const emits=defineEmits(['onExport'])
const boxRef=ref(null)

const handleBtn=()=>{
  emits('onExport','emits---')
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
  console.log(boxRef)
})

const changeBtn = () => {
  state.time = '时光, 你好!'
}

</script>

<style lang="" scoped>
</style>