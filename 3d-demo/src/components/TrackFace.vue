<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-08-08 20:56:27
 * @Description: file not
-->
<template>
  <div>
    <div class="demo-container">
      <video
        id="video"
        width="320"
        height="240"
        preload
        autoplay
        loop
        muted
      ></video>
      <canvas id="canvas" width="320" height="240"></canvas>
    </div>
  </div>
</template>

<script>
import dat from "dat.gui";
import tracking from "tracking";
import "../assets/lib/data/face-min.js";
// import "../assets/lib/data/stats-min.js";

export default {
  name: "TrackFace",
  components: {},
  data: () => {
    return {
      showComp: false,
      apps: null,
    };
  },

  created() {},

  mounted() {
    this.init();
  },

  methods: {
    init() {
      window.onload = function () {
        // var video = document.getElementById("video");
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        var tracker = new tracking.ObjectTracker("face"); // 设置追踪类型
        tracker.setInitialScale(4);
        tracker.setStepSize(2);
        tracker.setEdgesDensity(0.1);

        tracking.track("#video", tracker, { camera: true });

        tracker.on("track", function (event) {
          // console.log(event);
          context.clearRect(0, 0, canvas.width, canvas.height);

          event.data.forEach(function (rect) {
            context.strokeStyle = "#a64ceb";
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            context.font = "11px Helvetica";
            context.fillStyle = "#fff";
            context.fillText(
              "x: " + rect.x + "px",
              rect.x + rect.width + 5,
              rect.y + 11
            );
            context.fillText(
              "y: " + rect.y + "px",
              rect.x + rect.width + 5,
              rect.y + 22
            );
          });
        });

        var gui = new dat.GUI();
        gui.add(tracker, "edgesDensity", 0.1, 0.5).step(0.01);
        gui.add(tracker, "initialScale", 1.0, 10.0).step(0.1);
        gui.add(tracker, "stepSize", 1, 5).step(0.1);
      };
    },
  },
};
</script>

<style scoped>
video,
canvas {
  margin-left: 230px;
  margin-top: 120px;
  position: absolute;
}
</style>
