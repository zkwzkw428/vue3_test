<template>
  <h1>姓名:{{ person.name }}</h1>
  <h1 v-show="person.age">年龄:{{ person.age }}</h1>
  <h1>性别:{{ person.sex }}</h1>
  <ul>
    <li>{{ person.hobby[0] }}</li>
    <li>{{ person.hobby[1] }}</li>
    <li>{{ person.hobby[2] }}</li>
    <li>{{ person.hobby[3] }}</li>
  </ul>
  <button @click="person.update">点击更新爱好</button>

  <button @click="person.deleteElement">点击删除属性</button>
</template>
<script>
// 存在的问题，删除属性不能自动更新，更改数组当中的元素不能自动更新，得调用$set和被vue重新设计包裹的数组函数
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    const person = reactive({
      name: "hx",
      sex: "男",
      age: 20,
      hobby: ["抽烟", "喝酒", "打牌", "泡妞"],
      update() {
        // 传统更新数组当中元素的方式
        // this.hobby[0] = '玩游戏';
        // vue2当中的数据元素更新方式
       person.hobby[0] = '玩游戏'
        // Vue.set(this.person.hobby, 0, '玩游戏');
      },
      deleteElement() {
        // 一般方式删除对象当中的属性
        delete person.age;
      },
    });
    return {
      person
    }
  },
};
</script>
