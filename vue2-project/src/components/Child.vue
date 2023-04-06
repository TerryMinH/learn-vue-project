<!--
 * @Author: TerryMin
 * @Date: 2023-02-22 17:53:00
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-04-04 15:47:26
 * @Description: file not
-->
<template lang="">
  <div>
    <div>子组件11</div>
    <div v-for="(x,y,z) in object" :key="x">
    <div>1.{{x}}</div>
    <div>2.{{y}}</div>
    <div>3.{{z}}</div>
    </div>
    <hr>
    <div v-for="index in inviteNum" :key="index">{{index-1}}:{{tab[index-1].name}}</div>
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
      },
      tab:[
        {name:'terrymin'},
        {name:'张三'},
        {name:'李四'},
      ],
      inviteNum:2
    }
  },
  mounted() {
    // console.log(44);
  },
};
</script>
