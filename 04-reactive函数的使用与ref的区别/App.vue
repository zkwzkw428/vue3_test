<template>
 <h1>姓名:{{ person.name }}</h1>
 <h1>年龄:{{ person.age }}</h1>
 <h1>性别:{{ person.sex }}</h1>
 <button @click="person.sayHi">向世界说你好</button>
</template>
<script>
import {reactive} from 'vue'
export default {
  name: "App",
  setup() {
    // 统一进行reactive处理，转变为proxy的实例对象
    const person = reactive({
      name: 'hx',
      sex: '男',
      age: 20,
      sayHi() {
        alert('你好这个世界！')
      }
    })
    return {
      person,
    }
  },
};
</script>
