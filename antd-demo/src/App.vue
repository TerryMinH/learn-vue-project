<!--
 * @Author: TerryMin
 * @Date: 2021-01-07 10:44:14
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-09-08 16:46:10
 * @Description: file not
-->
<template>
  <div class="container">
    <HeadFunction
      :level="1"
      title="函数式组件"
    >这是一个函数式组件</HeadFunction>

    <HelloDemo
      v-bind:message="message"
      v-on:increment="increamentTotal"
    />
    <div>total:{{total}}</div>

    <input
      type="text"
      v-model="mytext"
    >
    <ul>
      <li
        v-for="data in datalistcom"
        :key="data"
      >{{data}}</li>
    </ul>

    <input @keyup.enter="submit">
  </div>
</template>

<script>
import HelloDemo from './components/HelloDemo.vue';
import HeadFunction from './components/HeadFunction.vue';

export default {
  name: 'App',
  components: {
    HelloDemo,
    HeadFunction
  },
  data: function () {
    return {
      initList: ['aaa', 'aa1', 'aa2', 'bbb', 'ccc', 'ddd'],
      mytext: '',
      message: '页面加载于 ' + new Date().toLocaleString(),
      seen: true,
      total: 0
    }
  },
  computed: {
    datalistcom () {
      return this.initList.filter(item => item.indexOf(this.mytext) > -1)
    }
  },
  methods: {
    submit (e) {
      console.log(e)
      console.log(e.target.value)
    },
    increamentTotal: function () {
      this.total += 5;
    }
  }
}
</script>

<style>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
