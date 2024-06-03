<template>
<input v-model="person.firstName">
<br>
<input v-model="person.lastName">
<h1>全名:{{ fullName }}</h1>
<input type="text" v-model="this.fullName">
</template>
<script>
import { reactive, computed} from 'vue';
export default {
  name: "App",
  //vue2
  // computed: {
  //   fullName: {
  //     get() {
  //       return this.person.firstName + '-' + this.person.lastName
  //     },
  //     set(value) {
  //       const arr = value.split('-');
  //       this.person.firstName = arr[0];
  //       this.person.lastName = arr[1]
  //     }
  //   }
  // },
  setup() {
   let person = reactive({
    firstName: '张',
    lastName: '三'
   })
  //  考虑到计算属性的读和写
   let fullName = computed({
    get() {
      return person.firstName + '-' + person.lastName
    },
    set(value) {
      const arr = value.split('-');
      person.firstName = arr[0];
      person.lastName = arr[1];
    }
   })
   return {
    person,
    fullName
   }
  },
};
</script>
