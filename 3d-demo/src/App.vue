<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-08-09 11:02:42
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
</style>
