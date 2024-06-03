<template>
  <h1>源数据: {{ person }}</h1>
  <h1>学生姓名:{{ name }}</h1>
  <h1>性别:{{ gender }}</h1>
  <h1>职业:{{ job.type }}</h1>
  <h1>薪水:{{ job.details.salary }}K</h1>
  <h1>地点:{{ job.details.address }}</h1>
  <button @click="name+='@'">改名字</button>
  <br>
  <button @click="job.type = '送外卖'">改职业</button>
  <br>
  <button @click="job.details.salary += 10">加薪水</button>
  <br>
  <button @click="job.details.address = '上海'">改地点</button>
</template>
<script>
import {reactive, ref, toRef, toRefs} from 'vue'
export default {
  name: "App",
  setup() {
    // let person = ref({
    //   name: '张三',
    //   gender: '男',
    //   age: 18,
    //   job: {
    //     type: 'engineer',
    //     details: {
    //       salary: 10,
    //       address: '北京'
    //     }
    //   }
    // })
    let person = reactive({
      name: '张三',
      gender: '男',
      age: 18,
      job: {
        type: 'engineer',
        details: {
          salary: 10,
          address: '北京'
        }
      }
    })
    return {
      person,
      // name:toRef(person, 'name'),
      // gender:toRef(person, 'gender'),
      // job:toRef(person, 'job'),
      // 通过对象展开运算符将person当中的每一个属性展开，加入到返回的对象当中
      ...toRefs(person)
    }
  }
};
</script>
