<template>
	<div class="main-menu">
		<mu-list :value="select.url" @change="handleChange">
			<mu-list-item value="/index" :class="{ selectedmenu: select == '/index' }" title='主页'></mu-list-item>
            <mu-list-item v-bind="{ title: menu.name }" :class="'main-menu-list, menu-first'" v-for="menu in menus">
            	<mu-list-item :value="submenu.url" :class="{ selectedmenu: select == submenu.url }" slot="nested" v-bind="{ title: submenu.name}" v-for="submenu in menu.sub_menu"></mu-list-item>
            </mu-list-item>
        </mu-list>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				menus: [],
				select: ''
			}
		},
		created() {
			this.$store.dispatch('selectMenu', this.$route.path)
		},
		mounted () {
		    this.menus = this.$store.getters.getmenu
		    this.select = this.$store.getters.select.url
		},
		// computed: {
		// 	...mapGetters([
		// 		'select'
		// 		])
		// },
		beforeRouteEnter (to, from, next) {
			console.log(123)
			console.log(to)
		},
		methods: {
			handleChange: function(val){
				//this.$store.dispatch('selectMenu', val)
				this.$router.push({ path: val });
			}
		}
	}
</script>
<style lang="stylus">
	.main-menu .mu-list > div 
		width 100%
	.main-menu .mu-list
		padding 0
	.mu-item
		padding-left 5rem
	.mu-item-title
		color #3d5159
		font-size 1.4rem !important
	.menu-first > .mu-item-wrapper .mu-item-title
		color #a6aeb3
	.selectedmenu 
		background-color #edf0f2
</style>