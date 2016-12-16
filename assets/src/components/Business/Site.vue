<template>
    <div>
        <div class="tee-sider">
            <tee-menu></tee-menu>
        </div>
        <div class="tee-content">
        	Site
        </div>
    </div>
</template>
<script>
 	import Menu from './../Menu' 
	export default {
		components:{
			'tee-menu': Menu
		},
		methods: {
			go: function(url){
				this.$router.push({ path: url });
			}
		}
	}
</script>
<style lang="stylus">
	.tee-sider
		width 30rem 
		position fixed
		top 0
		bottom 0
		border 1px solid red
	.tee-sider .mu-list > div 
		width 100%
	.tee-content
		height 100%
		padding-left 30rem
</style>
