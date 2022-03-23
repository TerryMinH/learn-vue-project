<!--
 * @Author: TerryMin
 * @Date: 2021-12-11 15:17:47
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-03-23 13:17:25
 * @Description: file not
-->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input
      type="text"
      v-model="value"
      v-focus
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

    <div class="demo-1">
      <h2>防抖:</h2>
      <div>
        <input v-debounce="{fn: debounce, event: 'input', time: 1000}" />
        <div v-debounce="{fn: debounce, event: 'scroll', time: 1000}">
          <p>文字文字文字文字...</p>
        </div>
        <button v-throttle="{fn: throttle,time:3000}">throttle节流</button>
      </div>
    </div>
    <!-- <div class="demo-height"></div> -->
    <div class="demo-2">
      <div
        class="scroll-pop"
        v-if="isScrollPopShow"
        v-scroll-pop="'smooth'"
      >
        <div class="content">
          <div @click="isScrollPopShow=false">关闭</div>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
          <p>这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。</p>
        </div>
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
      list: [],
      isScrollPopShow: false
    }
  },
  computed: {
  },
  methods: {
    submit () {
      this.list.push(this.value);
      this.value = '';
      console.log(this.value);
      this.isScrollPopShow=true;
    },
    debounce () {
      console.log('debounce 防抖')
    },
    throttle () {
      console.log('throttle 节流 只触发一次')
    }

  }
}
</script>
<style scoped>
@import "./home.css";
</style>
