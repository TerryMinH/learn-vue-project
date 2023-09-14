<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-09-12 14:56:20
 * @Description: file not
-->
<template>
  <div>
    <!-- <TrackFace />
    <ThreeSquare /> -->
    <Gyroscope />
  </div>
</template>

<script>
import TrackFace from "@/components/TrackFace.vue";
import ThreeSquare from "@/components/ThreeSquare.vue";
import Gyroscope from "@/components/Gyroscope.vue";
export default {
  name: "App",
  components: {
    TrackFace,
    ThreeSquare,
    Gyroscope,
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
