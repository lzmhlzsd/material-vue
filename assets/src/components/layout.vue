<template>
    <div style="width: 100%;">
        <div class="tee-sider">
            <tee-menu></tee-menu>
        </div>
        <div class="tee-content">
        	<tee-nav></tee-nav>
        	<div class="tee-content-body">
        		<slot name="content" ></slot>
        	</div>
        </div>
    </div>
</template>
<script>
 	import Menu from './Menu' 
 	import Nav from './Nav'
	export default {
		components:{
			'tee-menu': Menu,
			'tee-nav': Nav
		}
	}
</script>
<style lang="stylus">
	.tee-sider
		width 20rem 
		top 10%
		bottom 0
		background-color #fff
		border 1px solid #edf0f2
		float left
	.tee-content
		background-color #fff
		padding-left 20rem
		min-height 116.1rem	
		border 1px solid #edf0f2
	.tee-content-body
		padding 0.5rem 1rem 
</style>
