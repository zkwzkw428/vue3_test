<template>
 <div class="two">
    <h3>two-component</h3>
    <button @click="show=true">点击显示一个区域</button>
    <Teleport to="body">
      <div class="container" v-if="show">
      <ul class="lists">
         <li>1</li>
         <li>2</li>
         <li>4</li>
         <li>5</li>
         <li>6</li>
      </ul>
    </div>
    </Teleport>
 </div>
</template>

<script>
import {ref} from 'vue'
export default {
   setup() {
      let show = ref(false)
      return {show}
   }
}
</script>

<style>
   .two {
      background-color: pink;
      padding: 10px;
   }
   .container {
      background-color: paleturquoise;
      width: 700px;
   }
   .lists li {
      list-style: none;
      background-color: skyblue;
      height: 60px;
      line-height: 60px;
      margin-bottom: 20px;
   }
</style>