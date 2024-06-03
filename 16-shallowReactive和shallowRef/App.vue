<template>
  <h1>源数据: {{ person }}</h1>
  <h1>学生姓名:{{ person.name }}</h1>
  <h1>性别:{{ person.gender }}</h1>
  <h1>职业:{{ person.job.type }}</h1>
  <button @click="person.name+='@'">改名字</button>
  <br>
  <button @click="person.job.type = '送外卖'">改职业</button>
  <br>
  <button>点击x当中的y++</button>
  <h1>{{ x.y}}</h1>
</template>
<script>
import {shallowReactive, shallowRef} from 'vue'
export default {
  name: "App",
  setup() {
    // 使用shallowReactive只能检测一层的属性变化，不能检测对象的属性还是对象的情况，属于浅层监视
    let person = shallowReactive({
      name: '张三',
      gender: '男',
      age: 18,
      job: {
        type: 'engineer',
      }
    })
    // 使用shallRef检测普通数据与ref无差别，但是一旦检测对象，那将会失效，因为引用对象当中的value是纯粹的object对象
    // 不是由Proxy代理的响应对象
    let x = shallowRef({
      y:0,
    })
    return {
      person,
      x
    }
  }
};
</script>
