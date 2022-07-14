<!--
 * @Author: TerryMin
 * @Date: 2021-11-10 10:32:11
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-11-10 15:51:53
 * @Description: file not
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this)
  }
}
</script>

<style scoped>
.link {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
</style>