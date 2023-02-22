<!--
 * @Author: TerryMin
 * @Date: 2023-02-22 17:53:00
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-22 17:58:32
 * @Description: file not
-->
<template lang="">
  <div>
    <div>子组件</div>
  </div>
</template>
<script>
export default {
  name: "Child",
  props: {
    msg: String,
  },
  mounted() {
    console.log(44);
  },
};
</script>
