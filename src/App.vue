<template>
  <div class="app">
    <h3>boss-component</h3>
    <one-component></one-component>
  </div>
</template>
<script>
import oneComponent from './component/oneComponent.vue';
export default {
  name: "App",
  components: {oneComponent},
  setup() {
  },
};
</script>
<style>
  .app {
    background-color: orange;
    padding: 10px;
    width: 700px;
  }
</style>
