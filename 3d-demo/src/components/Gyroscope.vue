<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-09-12 15:01:28
 * @Description: file not
-->
<template>
  <div class="hello">
    <h1>121</h1>
    <button class="my-element" @click="handleSync">异步加载组件</button>
  </div>
</template>

<script>
export default {
  name: "Gyroscope",
  components: {},
  data: () => {
    return {
      showComp: false,
      apps: null,
    };
  },
  mounted() {},
  methods: {
    handleSync() {
      console.log(33);
      this.show = true;
    },
  },
};
</script>

<style scoped></style>
