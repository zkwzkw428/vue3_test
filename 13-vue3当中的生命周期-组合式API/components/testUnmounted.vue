<template>
  <h1>测试卸载组件</h1>
  <h1>{{ name }}</h1>
  <h1>{{ sex }}</h1>
</template>

<script>
export default {
    setup() {
        let name = 'hhy'
        let sex = '男'
        return {
            name,
            sex
        }
    },
    beforeUnmount() {
        console.log('确定吗？我要开始卸载组件喽');
    },
    unmounted() {
        console.log('没有回头路了，我都已经卸载完毕了，还想挽留我？？');
    }
}
</script>

<style>

</style>