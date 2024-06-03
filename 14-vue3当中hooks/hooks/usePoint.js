import {reactive, onBeforeMount, onBeforeUnmount} from 'vue'
export default function () {
    let point = reactive({
        x: 0,
        y: 0
    })
    function listenerPonit(e) {
        point.x = e.pageX
        point.y = e.pageY
    }
    onBeforeMount(() => {
        window.addEventListener('click', listenerPonit)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', listenerPonit)
    })
    return point
}