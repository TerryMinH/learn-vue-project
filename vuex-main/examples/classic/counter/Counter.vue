<!--
 * @Author: TerryMin
 * @Date: 2022-05-28 23:28:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-07-06 09:40:03
 * @Description: file not
-->
<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    {{ $store.state.name }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <button @click="changeName">修改姓名</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'evenOrOdd'
    ])
  },
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync',
    'changeName'
  ])
}
</script>
