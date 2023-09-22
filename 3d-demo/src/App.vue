<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-09-22 14:09:52
 * @Description: file not
-->
<template>
  <div class="app-contanier">
    <TrackFace />
    <ThreeSquare />
    <!-- <FaceDetect /> -->
  </div>
</template>

<script>
import TrackFace from "@/components/TrackFace.vue";
import ThreeSquare from "@/components/ThreeSquare.vue";
import FaceDetect from "@/components/FaceDetect.vue";
export default {
  name: "App",
  components: {
    TrackFace,
    ThreeSquare,
    FaceDetect,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style>
body > canvas {
  position: absolute;
  top: 245px;
  left: 0px;
}
</style>
