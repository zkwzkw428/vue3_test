<template>
  <h1>{{ score }}</h1>
  <button @click="update">点击更新分数</button>
  <hr>
  <testUnmounted v-if="flag"></testUnmounted>
  <button @click="change">点击卸载人员组件</button>
</template>
<script>
import { ref } from "vue";
import testUnmounted from './components/testUnmounted';
export default {
  name: "App",
  setup() {
    let score = ref(49);
    let flag = ref(true)
    function update() {
      score.value += 5
    }
    function change() {
      flag.value = false
    }
    return {
      score,
      update,
      flag,
      change
    }
  },
  components: {
    testUnmounted
  },
  beforeCreate() {
    console.log('beforeCreate--------');
  },
  created() {
    console.log('created--------');
  },
  beforeMount() {
    console.log('beforeMount-------');
  },
  mounted() {
    console.log('mounted-----------');
  },
  beforeUpdate() {
    console.log('beforeUpdate-------');
  },
  updated() {
    console.log('updated------');
  },
  beforeUnmount() {
    console.log('beforeUnmount--------');
  },
  unmounted() {
    console.log('unmounted--------');
  }
};
</script>
