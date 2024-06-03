<template>
  <button @click="sum++">点我增加一次</button>
  <h1>数字n的值是:{{ sum }}</h1>
  <hr />
  <button @click="add">点击添加!</button>
  <h1>学校名:{{ school }}</h1>
  <hr />
  <h1>姓名:{{ person.name }}</h1>
  <h1>月薪:{{ person.salary }}</h1>
  <h1>年龄：{{ person.age }}</h1>
</template>
<script>
import { ref, reactive, watchEffect } from "vue";
export default {
  name: "App",
  setup() {
    let sum = ref(0);
    let school = ref("尚硅谷");
    const person = reactive({
      name: "hhy",
      salary: 10000,
      age: 18,
    });
    function add() {
      school.value += "@";
    }
    watchEffect(() => {
      const x1 = sum.value;
      const x2 = school.value;
      console.log('回调函数依赖的数据变化,则重新调用一次该回调函数');
    })
    return {
      sum,
      school,
      add,
      person,
    };
  },
};
</script>
