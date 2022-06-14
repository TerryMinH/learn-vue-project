<!--
 * @Author: TerryMin
 * @Date: 2022-06-14 06:54:49
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-06-14 07:08:07
 * @Description: file not
-->
<template>
  <div></div>
</template>

<script setup>
import { inject } from 'vue'

const userLocation = inject('location', 'The Universe')
const userGeolocation = inject('geolocation')
console.log(userLocation, userGeolocation);
</script>
