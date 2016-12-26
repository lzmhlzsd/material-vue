<script>
import nav from './Nav'
import store from './../vuex/store'
import { mapGetters } from 'vuex'
import header from './Header'
export default {
    name: 'App',
    created () {
        this.$store.dispatch('getBaseInfo')
    },
    // computed: {
    //     ...mapGetters([
    //         'login'
    //         ])
    // },
    components: {
        'tee-header': header
    }
}
</script>
<template>
    <div style="height: 100%">
        <tee-header></tee-header>
        <div class="container-body">
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="stylus">
html,body
    height 100%
    width 100%
    font-size 62.5% !important
    font-family "PingFang SC","Hiragino Sans GB","Source Han Sans","Noto Sans CJK Sc","Microsoft YaHei",sans-serif !important
body
    margin 0
    background-color rgb(246, 246, 246) !important
.header 
    height 8%
.header div
    height 100%
    line-height 100%
div 
    box-sizing border-box
.container-body > div
    width 100%

.title-main
    font-size 2rem
    color #797979
.title-sub 
    font-size 1.3rem
    color #797979
.header #avatar
    height 5rem
    float right
    border-radius 2.5rem
    border 1px solid #efe9e9
    margin-right 0.5rem
    margin-top 0.4rem
    cursor pointer
.mu-menu-item-title
    font-size 1.4rem !important
</style>
