<template>
  <div class="app">
   演讲判断是否为响应式对象的api
  </div>
</template>
<script>
import { reactive, ref, readonly, isReactive, isRef, isProxy, isReadonly } from 'vue';
export default {
  name: "App",
  setup() {
    let text1 = ref('h');
    let data = reactive({
      x:0,
      y:0
    })
    data = readonly(data)
    console.log(isRef(text1));
    console.log(isReactive(data));
    // 对象被readonly处理，那么它只能读，但仍然是proxy对象
    console.log(isProxy(data));
    console.log(isReadonly(data));
    return {text1, data}
  },
};
</script>
<style>
</style>
