<script>
import nav from './Nav'
import store from './../vuex/store'

export default {
    name: 'App',
    data() {
        return {
            msg: 'hello world'
        }
    },
    components: {
        'order-nav': nav
    }
}
</script>
<template>
    <div>
        <div class="header"></div>
        <div id="app">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
        <div class="footer"></div>
    </div>
</template>
<style lang="stylus">
html,body{
    height 100%
    width 100%
    font-family "PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif !important
}
body{
    margin 0
}
div {
    box-sizing border-box
}
</style>
