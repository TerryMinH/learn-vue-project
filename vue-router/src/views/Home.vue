<!--
 * @Author: TerryMin
 * @Date: 2021-12-11 15:17:47
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-18 11:41:42
 * @Description: file not
-->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input
      type="text"
      v-model="value"
    >
    <input
      type="submit"
      @click="submit"
    >
    <div>
      <div
        v-for="(item,index) in list"
        :key="index"
      >
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: () => {
    return {
      message: 'test',
      msg: 'LIMin',
      value: '',
      list: []
    }
  },
  computed: {
  },
  methods: {
    submit () {
      this.list.push(this.value);
      this.value = '';
      console.log(this.value);
    }
  }
}
</script>
