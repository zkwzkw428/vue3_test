<template>
  <h1>我是vue3,很高兴认识你</h1>
  <h1>姓名:{{ name }}</h1>
  <h1>性别:{{ sex }}</h1>
  <h1>职位:{{ job.type}}</h1>
  <h1>月薪:{{ job.salary }}</h1>
  <button @click="doDream">点击变为富翁</button>
</template>
<script>
import {ref} from 'vue'
export default {
  name: "App",
  setup() {
    let name = ref('hhy')
    let sex = ref('男');
    const job = ref({
      type: "打工人",
      salary: "1K",
    })
    console.log(job);
    function doDream() {
      job.value.salary = '1000K'
    }
    return {
      name,
      sex,
      job,
      doDream,
    };
  },
};
</script>
