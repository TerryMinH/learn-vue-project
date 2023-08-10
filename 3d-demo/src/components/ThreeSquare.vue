<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-08-10 19:55:59
 * @Description: file not
-->
<template>
  <div></div>
</template>

<script>
import * as THREE from "three";
import Bus from "@/utils/eventBus";

export default {
  name: "ThreeSquare",
  data() {
    return {
      scene: null, // 场景
      renderer: null, // 渲染器
      camera: null, // 相机
      axios: null,
      rate: 0,
    };
  },
  mounted() {
    this.createScene();

    Bus.$on("PositionAxios", (paramters) => {
      console.log(paramters);
      console.log(this.cube.rotation);
      this.rate = paramters.y / paramters.x;
      this.axios = paramters;
      console.log(this.rate);
      this.animate();
    });
  },
  methods: {
    // 创建立体几何体
    createScene() {
      this.scene = new THREE.Scene(); // 创建坐标系场景
      // console.log(88, this.scene);

      this.camera = new THREE.PerspectiveCamera( // 创建相机
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      this.renderer = new THREE.WebGLRenderer(); // 创建渲染器

      this.renderer.setSize(window.innerWidth - 330, window.innerHeight - 10);
      document.body.appendChild(this.renderer.domElement);
      const geometry = new THREE.BoxGeometry(1, 1, 1); // 添加立方体
      console.log(geometry);

      const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // 设置立方体材质颜色
      this.cube = new THREE.Mesh(geometry, material); // 生成网格对象 包含几何体和材质

      this.scene.add(this.cube); // 网格对象添加到场景中

      this.camera.position.z = 3;

      this.animate();
    },

    // 动画转动
    animate() {
      // 上下运动
      if (this.rate > 1) {
        if (this.cube.rotation.x > this.rate) {
          return;
        }
        this.cube.rotation.x += 0.01;
        requestAnimationFrame(this.animate);
      } else {
        // 左右运动
        if (this.cube.rotation.y > this.rate) {
          return;
        }
        this.cube.rotation.y += 0.01;
        requestAnimationFrame(this.animate);
      }
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>

<style scoped></style>
