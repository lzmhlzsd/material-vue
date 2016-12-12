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
    </div>
</template>
<script>

var a = 2;
var abcsfefe=23;
export default {
    data() {
        return {
            account: '',
            password: ''
        }
    },
    methods: {
        login: function() {
    		this.$http.get('/rest/login')
    				  .then((response) => { 
    				  	console.log(response) 
    				   })
    				  .catch((response) => { 
    				  	console.log(response) 
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
