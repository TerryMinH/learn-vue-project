<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-08-09 15:57:01
 * @Description: file not
-->
<template>
  <div>
    <TrackFace />
    <ThreeSquare />
  </div>
</template>

<script>
import TrackFace from "@/components/TrackFace.vue";
import ThreeSquare from "@/components/ThreeSquare.vue";
export default {
  name: "App",
  components: {
    TrackFace,
    ThreeSquare,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style>
body > canvas {
  margin-left: 315px;
  margin-top: -10px;
}
</style>
