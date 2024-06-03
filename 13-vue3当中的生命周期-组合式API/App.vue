<template>
  <h1>{{ score }}</h1>
  <button @click="update">点击更新分数</button>
  <hr />
  <testUnmounted v-if="flag"></testUnmounted>
  <button @click="change">点击卸载人员组件</button>
</template>
<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
import testUnmounted from "./components/testUnmounted";
export default {
  name: "App",
  setup() {
    let score = ref(49);
    let flag = ref(true);
    function update() {
      score.value += 5;
    }
    function change() {
      flag.value = false;
    }
    onBeforeMount(() => {});
    onMounted(() => {});
    onBeforeUpdate(() => {});
    onUpdated(() => {});
    onBeforeUnmount(() => {});
    onUnmounted(() => {});
    return {
      score,
      update,
      flag,
      change,
    };
  },
  // 用了组合式API就不要在配置当中写
  components: {
    testUnmounted,
  },
};
</script>
