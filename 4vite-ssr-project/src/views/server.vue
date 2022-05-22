<!--
 * @Author: TerryMin
 * @Date: 2022-04-27 15:48:29
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-04-29 17:04:35
 * @Description: file not
-->
<template>
	<h3>服务端</h3>
	<div>server：{{ server }}</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Store, useStore } from "vuex";
import { AsyncDataParam, key, State } from "../store";
export default defineComponent({
	asyncData({ store, route }: AsyncDataParam) {
		console.log(">>>", route);

		return store.dispatch("ASYNC_SERVER");
	},
	setup(props, context) {
		const { server } = useStore<State>(key).state;

		return {
			server,
			// ...toRefs()
		};
	},
});
</script>
<style lang="scss"></style>
