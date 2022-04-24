<!--
 * @Author: TerryMin
 * @Date: 2022-01-14 14:46:15
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-17 17:25:08
 * @Description: file not
-->
<template>
  <div id="app">
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script setup>
import { computed,reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
// console.log(store)
// console.log(store.state)
const count = computed(() => store.state.count)
const evenOrOdd = computed(() => store.getters.evenOrOdd);
const increment = () => store.dispatch('increment', { number: 2 });
const decrement = () => store.dispatch('decrement');
const incrementIfOdd = () => store.dispatch('incrementIfOdd');
const incrementAsync = () => store.dispatch('incrementAsync');


// export default {
//   setup () {
//     const store = useStore()

//     return {
//       count: computed(() => store.state.count),
//       evenOrOdd: computed(() => store.getters.evenOrOdd),
//       increment: () => store.dispatch('increment'),
//       decrement: () => store.dispatch('decrement'),
//       incrementIfOdd: () => store.dispatch('incrementIfOdd'),
//       incrementAsync: () => store.dispatch('incrementAsync')
//     }
//   }
// }
</script>
