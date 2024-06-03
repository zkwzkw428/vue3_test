<template>
  <div class="one">
    <h3>one-component</h3>
    <two-component></two-component>
  </div>
</template>

<script>
import twoComponent from "./twoComponent.vue";
export default {
  components: { twoComponent },
}
</script>

<style>
.one {
  background-color: purple;
  padding: 10px;
}
</style>
