<template>
    <div class="child">
        <h3>我是孙组件child ---我从祖先组件拿到数据{{ data.price }} --- {{ data.color }}</h3>
        <button @click="change">改变车辆价格</button>
    </div>
</template>

<script>
import { inject } from 'vue';
export default {
    name: 'childComponent',
    setup() {
       function getData() {
        return inject('data');
       }
       let data = getData()
       function change() {
        data.price = 200
       }
       return {data, change}
    }
}
</script>

<style>
    .child {
        background-color: purple;
        padding: 10px;
    }
</style>