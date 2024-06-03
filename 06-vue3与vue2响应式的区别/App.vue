<template>
  <h1>姓名:{{ person.name }}</h1>
  <h1 v-show="person.age">年龄:{{ person.age }}</h1>
  <h1>性别:{{ person.sex }}</h1>
  <h1 v-show="person.official">职业:{{ person.official }}</h1>
  <ul>
    <li>{{ person.hobby[0] }}</li>
    <li>{{ person.hobby[1] }}</li>
    <li>{{ person.hobby[2] }}</li>
    <li>{{ person.hobby[3] }}</li>
  </ul>
  <button @click="person.update">点击更新爱好</button>

  <button @click="person.deleteElement">点击删除属性</button>
  <button @click="person.addElement">点击我添加一个属性</button>
  <button @click="person.updateOffcial">点击我更新职业</button>
</template>
<script>
// vue3当中由于引入了reactive函数，使得后续直接更改数组下标也能更新页面
// 还有往对象当中添加一个新的属性也能被vue检测到，包括删除对象当中的某个元素也能被vue检测
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
      addElement() {
        person.official = '总裁'
      },
      updateOffcial() {
        person.official = 'CEO'
      }
    });
    return {
      person
    }
  },
};
</script>
