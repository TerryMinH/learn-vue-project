<!--
 * @Author: TerryMin
 * @Date: 2021-11-10 19:36:40
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-11-15 10:34:56
 * @Description: file not
-->
<template>
  <div class="child">
    <h1>Child组件</h1>
    <button @click='sendToParent'>向父组件传值</button>
  </div>
</template>

<script>
export default {
  name:'TodoList',
  methods:{
    sendToParent(){
      this.$emit('ListenChildEvent','message from child')
    }
  }
  // data () {
  //   return {
  //     items: ['Feed a cat', 'Buy milk']
  //   }
  // },
}
</script>