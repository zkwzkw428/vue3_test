<template>
  <h1>鼠标当前的坐标x:{{ point.x }} --y:{{ point.y }}</h1>
</template>

<script>
import usePoint from '../hooks/usePoint'
export default {
    name: 'hooksTest',
    setup() {
        //#region 
        // let point = reactive({
        //     x: 0,
        //     y:0
        // })
        // function listenerPonit(e) {
        //     point.x  = e.pageX
        //     point.y = e.pageY
        // }
        // onBeforeMount(() => {
        //     // 给window当中添加点击事件
        //     window.addEventListener('click', listenerPonit)
        // })
        // onBeforeUnmount(() => {
        //     window.removeEventListener('click', listenerPonit)
        // })
        //#endregion
        let point = usePoint();
        return {
            point,
        }
    },
}
</script>

<style>

</style>