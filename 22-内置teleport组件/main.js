import { createApp } from 'vue'
import App from './App.vue'
// 1.createApp为工厂函数，不是构造函数，不能使用new调用
// 2.引入的Vue不再是构造函数，无法使用new调用
// 3.$mount的api变成mount，加入了一些新的api，比如，provided，unmount
createApp(App).mount('#app')
