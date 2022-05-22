<!--
 * @Author: TerryMin
 * @Date: 2022-04-26 10:00:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-05 14:46:19
 * @Description: file not
-->
<template>
	<h1>{{ msg }}</h1>
	<button type="button" @click="count++">count is: {{ count }}</button>
	<view @click="handleBtn" ref="box"> 点击新增 </view>
	<button type="button" @click="changeBtn">{{ state.foo }}</button>
</template>

<script setup>
import { ref, reactive, onMounted, toRef } from "vue";

defineProps({
	msg: String,
});

const count = ref(0);
const emits = defineEmits(["onExport"]);
const state = reactive({
	foo: 1,
	bar: 2,
});
const color=ref('red');

const fooRef = ref(state.foo);

const handleBtn = () => {
	emits("onExport", "emits---");
};

// 生命周期钩子
onMounted(() => {
	console.log(`The initial count is ${count.value}.`);
});

const changeBtn = () => {
	fooRef.value++;
	console.log(state, fooRef); // 2
};
</script>

<style scoped>
h1 {
	color: v-bind(color);
}
</style>
