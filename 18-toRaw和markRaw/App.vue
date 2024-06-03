<template>
  <h1 v-show="car.user.name">车主：{{ car.user.name}}</h1>
  <h1>车辆品牌: {{ car.brand }}</h1>
  <h1>价格：{{ car.price }}</h1>
  <h1>生产地点：{{ car.productionAddress }}</h1>
  <h1>颜色：{{ car.details.color }}</h1>
  <h1>车重：{{ car.details.weight }}</h1>
  <button @click="changeBrands">点击更改品牌</button>
  <br>
  <button @click="changePrice">更改价格</button>
  <button @click="getRawData">获取原始的car数据</button>
  <button @click="addProperty">添加一个车主</button>
</template>
<script>
import {reactive, toRaw, markRaw} from 'vue'
export default {
  name: "App",
  setup() {
    let car = reactive({
      brand: '奔驰',
      price: 40,
      productionAddress: '广州',
      details: {
        color: 'black',
        weight: '2000',
      },
      user: {
        name: "",
      }
    })
    function changeBrands() {
      car.brand = '宝马'
    }
    function changePrice() {
      car.price++
    }
    function getRawData() {
      console.log(toRaw(car));
    }
    function addProperty() {
      // 往car当中添加一个车主信息
      car.user = {name: 'hhy', sex: '男', age: 18}
      // 将user不使用响应式
      // car.user = markRaw({name: 'hhy', sex: '男', age: 18})
    }
    return {
      car,
      changeBrands,
      changePrice,
      getRawData,
      addProperty
    }
  }
};
</script>
