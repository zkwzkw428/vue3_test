<template>
  <h1>我是vue3,很高兴认识你</h1>
  <h1>姓名:{{ name }}</h1>
  <h1>性别:{{ sex }}</h1>
  <h1>姓名: {{name1}}</h1>
  <h1>性别:{{sex1}}</h1>
  <button @click="sayHello">点我输出你好</button>
  <br>
  <br>
  <button @click="sayLove">点我进行告白</button>
</template>
<script>
// 1.vue3当中可以书写vue2的代码，而且不会出错，但是不建议混着使用
// 2.vue3当中setup当中的函数不能使用vue2写法当中的数据，会是undefined
// 3.vue3当中的数据和vue2名称一致的时候，优先使用vue3当中的数据
export default {
  name: "App",
  // 使用vue2写法
  data() {
    return {
      name1: "lyq",
      sex1: "女",
    };
  },
  methods: {
    sayLove() {
      alert('i love you')
    },
  },
  setup() {
    let name = "hhy";
    let sex = "男";
    function sayHello() {
      alert("hello world");
    }
    return {
      name,
      sex,
      sayHello,
    };
    // 返回一个渲染函数
    // return ()=> h('h1')
  },
};
</script>
