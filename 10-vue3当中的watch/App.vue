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
    // 1、监视ref响应式的简单类型数据
    // watch(sum,
    // function(newvalue, oldvalue) {
    //     console.log(`sum的值被改了${newvalue}----${oldvalue}`);
    //   },{immediate: true}, {deep: true})

    ///2、监视多个简单类型数据
    // watch([sum, school], (newvalue, oldvalue) => {
    //   console.log(`${newvalue}----${oldvalue}`);
    // }, {immediate: true, deep: true})

    // 3、直接对reactive所代理的对象进行监视
    // 3.1默认强制开启深度监视，即使修改deep:false也无济于事
    // 3.2无法获取oldvalue，也就是无法知晓对象当中某个属性变化之前的旧值
    // watch(person, (newvalue, oldvalue) => {
    //   console.log(
    //     "person当中的某个属性被改变了,但是我不知道改变之前的旧值是多少"
    //   );
    //   console.log(newvalue);
    //   console.log(oldvalue);
    // });

    // 4.对reactive代理对象当中的某个属性进行监视
    // watch(
    //   () => person.age,
    //   (newvalue, oldvalue) => {
    //     console.log(
    //       "person当中的age属性被改变了" + newvalue + "---" + oldvalue
    //     );
    //   }
    // );
    // 5.监视reactive代理对象当中的某些属性
    watch([()=> person.age, () => person.salary],(newvalueArr, oldvalueArr) => {
     console.log(`person当中的age或者salary属性变化了`);
     console.log(newvalueArr);
     console.log(oldvalueArr); 
    })

    // 6.监视reactive代理对象当中的某个是对象的属性,需要开启深度监视
    watch(()=> person.official, (newvalue, oldvalue) => {
      console.log('不开启深度监视，我是不会理你的');
    }, {deep: true, immediate: true})
    watch
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
