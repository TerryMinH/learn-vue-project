<template>
	<router-link to="/">首页→</router-link> |
	<router-link to="/client">客户端→</router-link> |
	<router-link to="/server">服务端→</router-link>
	<router-view></router-view>
  
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
	setup(props, context) {
    // const count = ref(0);
    // const add=()=>{
    //   count.value++
    // }
		// return {
    //   count,
    // };
	},
});
</script>
<style lang="scss"></style>
