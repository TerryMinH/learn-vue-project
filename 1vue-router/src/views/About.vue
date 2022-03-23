<!--
 * @Author: TerryMin
 * @Date: 2021-11-10 10:20:00
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-11-15 13:51:25
 * @Description: file not
-->
<template>
  <div class="father">
    <h3>这是父组件</h3>
    <todo-list @ListenChildEvent='ShowChildEvent'></todo-list>
    <p>{{msgForChild}}</p>
  </div>

</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'About',
  components: {
    TodoList
  },
  data () {
    return {
      msgForChild: ''
    }
  },
  methods: {
    ShowChildEvent (data) {
      console.log(data);
      this.msgForChild = data;
    }
  },
  mounted () {
    console.log(this);
  }
}
</script>
