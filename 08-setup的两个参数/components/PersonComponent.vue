<template>
  <h1>姓名:{{ person.name }}</h1>
  <h1 v-show="person.age">年龄:{{ person.age }}</h1>
  <h1>性别:{{ person.sex }}</h1>
  <h1>学校名:{{ name }}</h1>
  <h1>学校地址:{{ address }}</h1>
  <button @click="say">点击输出你好世界</button>
  <slot></slot>
</template>

<script>
import {reactive} from 'vue'
export default {
    name: 'personComponent',
    // 接受自定义函数
    emits: ['sayHello'],
    // props: ['name','address'],
    props: ['name'],
    setup(props, context) {
    const person = reactive({
      name: "hx",
      sex: "男",
      age: 20,
    });
    console.log(props);
    console.log(context.attrs);
    console.log(context.slots);
    function say() {
      context.emit('sayHello', 666)
    }
    return {
      person,
      say,
    }
  },
}
</script>

<style>

</style>