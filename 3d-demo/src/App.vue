<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-08-08 20:43:09
 * @Description: file not
-->
<template>
  <div id="app">
    <TrackFace />
  </div>
</template>

<script>
import TrackFace from "./components/TrackFace.vue";
import dataMixin from "./mixins/data";
export default {
  name: "App",
  components: {
    TrackFace,
  },
  data() {
    return {
      isDisplay: true,
    };
  },
  mixins: [dataMixin],
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
canvas {
  width: 375px;
  height: 400px;
  /* border: 1px solid #666; */
  position: absolute;
  top: 60px;
}
</style>
