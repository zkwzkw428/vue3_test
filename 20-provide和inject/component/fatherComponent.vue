<template>
    <div class="f">
        <h3>我是字组件</h3>
    <child-component-vue></child-component-vue>
    </div>
</template>

<script>
import childComponentVue from './childComponent.vue'
export default {
    components: {
        childComponentVue
    }
}
</script>

<style>
    .f {
        background-color: orange;
        padding: 10px;
    }
</style>