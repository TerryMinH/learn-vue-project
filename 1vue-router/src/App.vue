<!--
 * @Author: TerryMin
 * @Date: 2021-11-10 10:20:00
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-03-24 16:56:34
 * @Description: file not
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style>
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
