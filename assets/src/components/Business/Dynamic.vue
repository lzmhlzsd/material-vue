<template>
    <div>
        <tee-layout>
        	<div slot="content">
        		Dynamic
        	</div>
        </tee-layout>
    </div>
</template>


<script>
 	import Menu from './../Menu' 
 	import Layout from './../Layout'
	export default {
		components:{
			'tee-menu': Menu,
			'tee-layout': Layout
		}
	}
</script>
