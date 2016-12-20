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
    <div style="height: 100%">
        <div class="header">
            <mu-row>
                <mu-col width="50" tablet="30" desktop="50">
                    <img src="./../img/logo.png" />
                    <div style="float:right">
                        天工收银
                        <br/>
                        上海商派网络科技有限公司
                    </div>
                </mu-col>
                <mu-col width="50" tablet="20" desktop="10">
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
    font-family 14px/2 "-apple-system",BlinkMacSystemFont,Roboto,"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","Source Han Sans","Noto Sans CJK Sc","Microsoft YaHei",sans-serif !important
body
    margin 0
    background-color rgb(246, 246, 246) !important
.header 
    height 10%
.header div
    height 100%
    line-height 100%
div 
    box-sizing border-box

</style>
