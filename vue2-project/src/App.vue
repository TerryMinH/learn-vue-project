<!--
 * @Author: TerryMin
 * @Date: 2021-11-10 10:20:00
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-07-14 10:13:00
 * @Description: file not
-->
<template>
  <div id="app">
    <div id="nav">
      <template v-for="(item, index) in routerList">
        <div :key="index" v-if="item.title" :class="['nav-item', checkedPath === item.path && 'nav-item-actived']"
          @click="changeRouter(item)">
          {{ item.title }}
        </div>
      </template>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script>
import { routes } from './router';

export default {
  name: 'App',
  data () {
    return {
      routerList: routes,
      checkedPath: '',
    }
  },
  mounted () {
    console.log(this.routerList)
  },
  methods: {
    changeRouter (item) {
      const { path } = this.$router.history.current;
      // console.log(item,path);
      this.checkedPath = item.path;
      if (item.path !== path) {
        this.$router.push(item.path)
      }
    }
  }
}

</script>
<style lang="less" >
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

#nav {
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 100vh;
  border-right: 1px solid #333;

  .nav-item {
    padding: 10px;
  }

  .nav-item-actived {
    background: #abcdef;
  }
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.main {
  flex: 1;
}
</style>
