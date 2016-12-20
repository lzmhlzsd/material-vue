<template>
    <div style="height:100%">
        <div class="tee-sider">
            <tee-menu></tee-menu>
        </div>
        <div class="tee-content">
        	<slot name="content"></slot>
        </div>
    </div>
</template>
<script>
 	import Menu from './Menu' 
	export default {
		components:{
			'tee-menu': Menu
		}
	}
</script>
<style lang="stylus">
	.tee-sider
		width 25rem 
		top 10%
		bottom 0
		background-color #fff
		border 1px solid #edf0f2
		float left
	.tee-content
		height 100%
		background-color #fff
		padding-left 25rem
</style>
