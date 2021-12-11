<!--
 * @Author: TerryMin
 * @Date: 2021-03-15 10:20:43
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-15 16:17:18
 * @Description: file not
-->
<template>
  <div>
    <div v-bind:title="message">鼠标悬停几秒查看次数信息</div>
    <div>{{counter}}</div>
    <button @click="increamentHandler">点击事件</button>

  </div>
</template>

<script>
export default {
  name: 'HelloDemo',
  props: {
    message: String,
    result: String,
  },
  data: function () {
    return {
      counter: 0,
    }
  },
  methods: {
    increamentHandler: function () {
      console.log(this);
      this.counter += 1
      this.$emit('increment');
    }
  }

}
</script>

<style scoped>
</style>