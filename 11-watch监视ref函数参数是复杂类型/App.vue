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
  <h1>职业:{{ person.official.type }}</h1>
  <h1>工作地点: {{ person.official.address.details }}</h1>
  <button @click="addSalary">点击月薪加1000</button>
  <br>
  <button @click="becomeYonger">点我年轻10岁</button>
  <br>
  <button @click="person.official.address.details = '上海'">点击切换工作地点</button>
</template>
<script>
import { ref, reactive, watch } from "vue";
export default {
  name: "App",
  setup() {
    let sum = ref(0);
    let school = ref("尚硅谷");
    const person = reactive({
      name: "hhy",
      salary: 10000,
      age: 18,
      official: {
        type: '工程师',
        address: {
          details: '北京昌平'
        }
      }
    });
    function addSalary() {
      person.salary += 1000;
    }
    function add() {
      school.value += "!";
    }
    function becomeYonger() {
      if(person.age > 10) {
        person.age -=10
      }else {
        return
      }
    }
    // 监视普通类型的数据
    watch(sum, (newvalue, oldvalue) => {
      // ref定义的数据被封装在实现引用对象当中
      // 此处监视的是引用对象，默认不开启深度监视
      // 定义的普通类型数据在引用对象的value属性当中。不需要深度监视，但是不能直接监视sum.value
      // 因为只能监视一个变量不能是字面量。在此处就是直接监视0
      console.log('你的改动被我检测到了，哈哈哈' + newvalue + '----' + oldvalue);
    })
    // 监视ref函数传递的复杂类型数据
    watch(person, (newvalue, oldvalue)=> {
      // 由于是负责类型，所以底层还是借助了reative
      // 监视对象存放在ref生成的引用对象当中的value属性当中，不过该值是Proxy的实例对象
      // 所以直接检测person.value相当于检测person的所有数据，也就是深度监视
      // 监视person则需要开启深度监视
      console.log('监视只需要弄明白该数据是普通类型还是复杂类型,以及是用ref函数还是reative函数' + newvalue + '!!!!' + oldvalue);
    },{deep: true})
    return {
      sum,
      school,
      add,
      addSalary,
      person,
      becomeYonger
    };
  },
};
</script>
