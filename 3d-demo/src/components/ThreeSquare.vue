<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-08-14 16:14:24
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
      axios: null, // 坐标系
      rate: 0, // tana 值
      requestId: null, // 动画ID
      direction: true, // 动画方向变化
      targetRadian: 0, // 目标弧度
      minDegree: 0.007, // 最小转动角度
    };
  },

  mounted() {
    this.createSceneInit();

    // this.animate();

    Bus.$on("PositionAxios", (paramters) => {
      console.log(paramters);

      this.targetRadian = Math.atan2(paramters.y, paramters.x) * 4;
      console.log("tan", this.targetRadian, this.cube.rotation.y);

      // 图像静止取消转动
      if (this.rate === paramters.y / paramters.x) {
        cancelAnimationFrame(this.requestId);
      } else {
        this.animate();
        // 当前值大于上一次值
        this.direction = this.rate < paramters.y / paramters.x;
      }
      this.rate = paramters.y / paramters.x;
    });
  },

  methods: {
    // 创建立体几何体
    createSceneInit() {
      this.scene = new THREE.Scene(); // 创建坐标系场景

      this.camera = new THREE.PerspectiveCamera( // 创建相机
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      this.renderer = new THREE.WebGLRenderer(); // 创建渲染器

      this.renderer.setSize(window.innerWidth - 330, window.innerHeight - 10);
      document.body.appendChild(this.renderer.domElement);
      const geometry = new THREE.BoxGeometry(1, 1, 1).toNonIndexed(); // 添加立方体
      console.log(geometry);

      const material = new THREE.MeshBasicMaterial({ vertexColors: true }); // 设置立方体材质颜色

      const positionAttribute = geometry.getAttribute("position");

      const colors = [];
      const color = new THREE.Color();

      for (let i = 0; i < positionAttribute.count; i += 3) {
        color.set(Math.random() * 0xffffff);

        // 定义每个三角形顶点相同的颜色
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
      }

      // 定义属性
      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );

      this.cube = new THREE.Mesh(geometry, material); // 生成网格对象 包含几何体和材质

      this.cube.rotation.y = 0.4; // 立体初始值
      this.scene.add(this.cube); // 网格对象添加到场景中
      this.camera.position.z = 3;
      this.renderer.render(this.scene, this.camera);
    },

    // 动画转动
    animate() {
      // 上下运动
      if (this.rate > 1) {
        if (this.cube.rotation.x > this.rate) {
          return;
        }

        this.direction
          ? (this.cube.rotation.x -= this.minDegree)
          : (this.cube.rotation.x += this.minDegree);
      } else {
        // 左右运动

        // 头像像左偏移tana变小
        if (this.direction) {
          this.cube.rotation.y -= this.minDegree;
        } else {
          this.cube.rotation.y += this.minDegree;
        }
      }

      if (this.cube.rotation.y === this.targetRadian) {
        cancelAnimationFrame(this.requestId);
      } else {
        this.requestId = requestAnimationFrame(this.animate);
      }

      // this.requestId = requestAnimationFrame(this.animate);
      // this.cube.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>

<style scoped></style>
