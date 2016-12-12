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
    <div id="app">
        <mu-appbar title="Title">
            <mu-icon-button icon='menu' slot="left" />
            <mu-icon-button icon='expand_more' slot="right" />
        </mu-appbar>
        <order-nav></order-nav>
        {{ msg }}
        <router-view></router-view>
    </div>
</template>
<style lang="stylus">
    body .mu-appbar-title
        color #ff0000
</style>
<!-- <template>
    <div>
        <h1>姓名12：{{name}}</h1>
        <h2>{{age}}</h2>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data () {
            console.log('kahfeoho')
            return {
                name:"guowenfh",
                age:"2q1"
            }
        }
    }
</script>
<style lang="sass">
    /*测试一下对sass的编译*/
    $qwe:#098;
    body{
        background-color: $qwe;
        h1{
            background-color: #eee;
            color: red;
            transform: translate(10%, 10%);
        }
        h1:hover{
            height:100px;
        }

        h2{
            background-color: #999;
        }
    }
</style> -->
