<template>
    <div class="login-form">
        <mu-text-field label="账号" v-model="account" fullWidth hintText="请输入账号" type="text" labelFloat/>
        <br/>
        <mu-text-field label="密码" v-model="password" fullWidth hintText="请输入密码" type="password" labelFloat/>
        <br/>
        <br/>
        <br/>
        <mu-raised-button label="登录" fullWidth class="demo-raised-button" primary @click="login" />
        <br/>
        <!--         <ul class="nav navbar-nav">
            <router-link tag="li" to="/latest">近7天待还 <span class="sr-only">(current)</span></router-link>
            <router-link tag="li" to="/all">全部待还</router-link>
        </ul> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            account: '',
            password: ''
        }
    },
    methods: {
        login: function() {
            this.$http.get('/api/loginsuccess', {
                    params: {
                        account: this.account,
                        password: this.password
                    }
                })
                .then((res) => {
                    if (res.body.code == '1003') {
                        //缓存数据
                        this.$store.dispatch('setBaseInfo', res.body.data)
                        this.$router.push({
                            path: "/index"
                        })
                    } else {
                        
                    }
                })
                .catch((res) => {
                    console.log(res)
                })

        }
    }
}
</script>
<style lang="stylus">
body .login-form 
    width 25rem 
    margin 18% auto
</style>
