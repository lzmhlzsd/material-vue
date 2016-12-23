<script>
import nav from './Nav'
import store from './../vuex/store'
import { mapGetters } from 'vuex'
export default {
    name: 'App',
    data() {
        return {
            msg: 'hello world'
        }
    },
    created () {
        this.$store.dispatch('getBaseInfo')
    },
    computed: {
        ...mapGetters([
            'login'
            ])
    },
    components: {
        'order-nav': nav
    }
}
</script>
<template>
    <div style="height: 100%">
        <div class="header" v-if="!login">
            <mu-row>
                <mu-col width="50" tablet="30" desktop="50" style="padding: 1rem;">
                    <img src="./../img/logo.png" style="float: left;margin-right: 1rem;"/>
                    <div style="line-height: 20px;float: left;">
                        <span class="title-sub">天工收银</span>
                        <br/>
                        <span class="title-main">上海商派网络科技有限公司</span>
                    </div>
                </mu-col>
                <mu-col width="50" tablet="20" desktop="50">
                    <img src="./../img/avatar.png" style="height: 50px;" />
                </mu-col>
            </mu-row>
        </div>
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
</style>
