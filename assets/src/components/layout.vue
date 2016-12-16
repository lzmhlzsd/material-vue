<template>
    <div>
        <div class="tee-sider">
            <tee-menu></tee-menu>
        </div>
        <div class="tee-content">
        	
        </div>
    </div>
</template>
<script>
 	import Menu from './Menu' 
 	import Index from './Index'
	export default {
		components:{
			'tee-menu': Menu,
			'tee-Index': Index
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
	.tee-content
		height 100%
		padding-left 30rem
</style>
