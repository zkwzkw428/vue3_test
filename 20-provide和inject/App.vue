<template>
  <div class="app">
    <h3>我是祖先组件--{{ data.price }} --- {{ data.color }}</h3>
  <fatherComponent></fatherComponent>
  </div>
</template>
<script>
import fatherComponent from './component/fatherComponent.vue';
import { reactive, provide } from 'vue';
export default {
  name: "App",
  setup() {
    let data = reactive({
      price: 40,
      color: 'black'
    })
    // 传递数据给其他组件
    provide('data', data)
    return {
      data
    }
  },
  components: {
    fatherComponent
  }
};
</script>
<style>
  .app {
    background-color: pink;
    padding: 10px;
    width: 500px;
  }
</style>
