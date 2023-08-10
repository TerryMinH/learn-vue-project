<!--
 * @Author: TerryMin
 * @Date: 2022-10-12 07:26:39
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-08-09 20:15:28
 * @Description: file not
-->
<template>
  <div></div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "ThreeSquare",
  data() {
    return {};
  },
  mounted() {
    this.createScene();
    // this.createLine();
  },
  methods: {
    // 创建立体几何体
    createScene() {
      const scene = new THREE.Scene(); // 创建坐标系场景
      console.log(scene);
      const camera = new THREE.PerspectiveCamera( // 创建相机
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer(); // 创建渲染器
      renderer.setSize(window.innerWidth - 330, window.innerHeight - 10);
      document.body.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry(1, 1, 1); // 添加立方体
      console.log(geometry);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 设置立方体材质颜色
      const cube = new THREE.Mesh(geometry, material); // 生成网格对象 包含几何体和材质
      scene.add(cube); // 网格对象添加到场景中
      console.log(cube);
      console.log(material);

      camera.position.z = 3;

      function animate() {
        requestAnimationFrame(animate);

        // cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      }

      animate();
    },

    // 划线
    createLine() {
      const scene = new THREE.Scene();

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        500
      );
      camera.position.set(0, 0, 100);
      camera.lookAt(0, 0, 0);

      const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

      const points = [];
      points.push(new THREE.Vector3(-10, 0, 0));
      points.push(new THREE.Vector3(0, 10, 0));
      points.push(new THREE.Vector3(10, 0, 0));

      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      const line = new THREE.Line(geometry, material);

      scene.add(line);
      renderer.render(scene, camera);
    },
  },
};
</script>

<style scoped></style>
