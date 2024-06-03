<template>
  <h1>源数据: {{ person }}</h1>
  <h1>学生姓名:{{ person.name }}</h1>
  <h1>性别:{{ person.gender }}</h1>
  <h1>职业:{{ person.job.type }}</h1>
  <button @click="person.name+='@'">改名字</button>
  <br>
  <button @click="person.job.type = '送外卖'">改职业</button>
</template>
<script>
import {reactive, readonly, shallowReadonly} from 'vue'
export default {
  name: "App",
  setup() {
    // 使用shallowReactive只能检测一层的属性变化，不能检测对象的属性还是对象的情况，属于浅层监视
    let person = reactive({
      name: '张三',
      gender: '男',
      age: 18,
      job: {
        type: 'engineer',
      }
    })
    // 限制person当中的属性只读
    // person = readonly(person)
    // 只限制person当中第一层属性只能读，其他层次则可以修改
    person = shallowReadonly(person)
    return {
      person,
    }
  }
};
</script>
