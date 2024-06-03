<template>
 <div class="two">
    <h3>two-component</h3>
    <button @click="show=true">显示弹窗</button>
    <Teleport to="body">
      <div class="mask" v-if="show">
      <div class="dialog">
         <ul class="lists">
         <li>我是弹窗界面</li>
         <button @click="show=false">点击隐藏弹窗</button>
      </ul>
      </div>
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
   .mask {
      position: absolute;
      width: 700px;
      top:0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.5);
   }
   .dialog {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }
   .lists li {
      list-style: none;
      background-color: skyblue;
      height: 30px;
      width: 100px;
      line-height: 30px;
      margin-bottom: 20px;
   }
</style>