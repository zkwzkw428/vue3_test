<template>
<perosnComponent @sayHello="sayHello" name="尚硅谷" address="北京昌平">
</perosnComponent>
</template>
<script>
import perosnComponent from "./components/PersonComponent.vue";
export default {
  name: "App",
  components: {
    perosnComponent
  },
  setup() {
    function sayHello(value) {
      alert('hello world' + value)
    }
    return {
      sayHello
    }
  },
};
</script>
