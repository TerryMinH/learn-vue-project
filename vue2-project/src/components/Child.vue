<!--
 * @Author: TerryMin
 * @Date: 2023-02-22 17:53:00
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-23 16:44:04
 * @Description: file not
-->
<template lang="">
  <div>
    <div>子组件11</div>
    <span v-for="(x,y,z) in object" :key="x">
    <div>1.{{x}}</div>
    <div>2.{{y}}</div>
    <div>3.{{z}}</div>
    </span>
  </div>
</template>
<script>
export default {
  name: "Child",
  props: {
    msg: String,
  },
  data(){
    return{
      object:{
        a:'aa',
        b:'bb'
      }
    }
  },
  mounted() {
    // console.log(44);
  },
};
</script>
