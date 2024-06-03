<template>
  <h1>演示自定义ref函数</h1>
  <input type="text" v-model="keyword" />
  <hr />
  {{ keyword }}
</template>
<script>
import { customRef } from "vue";
export default {
  name: "App",
  setup() {
    function myRef(value, delay = 500) {
      // 准备一个定时器,实现防抖
      let timer = null;
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`keyword的值被读取了,它的值是${value}`);
            // 跟踪value的变化
            track();
            // 返回
            return value;
          },
          set(newvalue) {
            // 清除之前的定时器
            clearTimeout(timer);
            // 延时更新模版
            // 利用闭包实现对定时器的取消，每次改变值的时候取消之前的定时器，所以模版就不会更新
            timer = setTimeout(() => {
              // 设置新的value
              // 通过闭包实现value的改变
              value = newvalue;
              // 通知vue更新模板
              trigger();
            }, delay);
          },
        };
      });
    }
    let keyword = myRef("helloWorld", 500);
    return {
      keyword,
    };
  },
};
</script>
