<!--
 * @Author: TerryMin
 * @Date: 2022-01-26 15:46:12
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-26 15:58:53
 * @Description: file not
-->
<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script setup>
import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'

</script>
