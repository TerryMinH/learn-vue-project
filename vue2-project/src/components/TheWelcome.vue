<!--
 * @Author: TerryMin
 * @Date: 2021-12-11 15:17:47
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-10-18 18:08:10
 * @Description: file not
-->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <input type="text" v-model="value" v-focus />
    <input type="submit" @click="submit" />
    <div>
      <div v-for="(item, index) in list" :key="index">
        {{ item }}
      </div>
    </div>
    <hr />
    <div class="demo-1">
      <div>
        防抖:<input v-debounce="{ fn: debounce, event: 'input', time: 1000 }" />
      </div>
      <div>
        节流：
        <button v-throttle="{ fn: throttle, time: 3000 }">throttle节流</button>
      </div>
    </div>

    <hr />
    <div>
      <loading duration="2s" :isshow="show"></loading>
      <button @click="show = !show">显示/隐藏loading</button>
      <button @click="toast">显示taost弹出框</button>
    </div>
    <hr />

    <div>
      <button @click="changeValue">改变值</button>
      <span ref="dom">{{ message }}</span> |
      <span>{{ message | componentFilter }}</span>
    </div>
    <!-- <div class="demo-height"></div> -->
    <div class="demo-2">
      <div class="scroll-pop" v-if="isScrollPopShow" v-scroll-pop="'smooth'">
        <div class="content">
          <div @click="isScrollPopShow = false">关闭</div>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
          <p>
            这是很长一段文字，请耐心读完，然后你会发现这段文字并没有什么意义。
          </p>
        </div>
      </div>
    </div>

    <AnswerDialog @onClose="handleModal" :isShow="isShow" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AnswerDialog from "@/components/AnswerDialog.vue";

export default {
  name: "TheWelcome",
  components: {
    HelloWorld,
    AnswerDialog,
  },
  data: () => {
    return {
      message: "test",
      msg: "LIMin",
      value: "",
      list: [],
      isScrollPopShow: false,
      show: false,
      isShow: false, // 是否展示续答弹窗
    };
  },
  mounted() {
    // console.log(this);
  },
  computed: {},
  // filter: https://www.jianshu.com/p/ad21df1914c5
  filters: {
    componentFilter(value) {
      return value + "!!!";
    },
  },
  methods: {
    handleModal(type) {
      console.log(type);
    },
    submit() {
      this.list.push(this.value);
      this.value = "";
      console.log(this.value);
      this.isScrollPopShow = true;
    },
    debounce() {
      console.log("debounce 防抖");
    },

    throttle() {
      console.log("throttle 节流 只触发一次");
    },

    toast() {
      this.$toast("你好");
    },

    changeValue() {
      this.message = "hello chenLiu";
      console.log(this.$refs.dom.innerText);
    },
  },
};
</script>

<style lang="less">
@import "./TheWelcome.less";
</style>
