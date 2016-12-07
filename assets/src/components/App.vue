<template>
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
</style>