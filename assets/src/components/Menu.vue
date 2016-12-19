<template>
	<div class="main-menu">
		<mu-list :value="select" @change="handleChange">
			<mu-list-item value="/index" title='主页'></mu-list-item>
            <mu-list-item v-bind="{ title: menu.name }" :class="'main-menu-list'" v-for="menu in menus" toggleNested>
            	<mu-list-item :value="submenu.url" slot="nested" v-bind="{ title: submenu.name}" v-for="submenu in menu.sub_menu"></mu-list-item>
            </mu-list-item>
        </mu-list>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				menus: [
		            { 
		            	id: 1, name: '我的生意', url: '', sub_menu: [
		                	{ id: 2, name: '门店收银', url: '/store', sub_menu: [] },
		                	{ id: 3, name: '官网收银', url: '/site', sub_menu: [] },
		                	{ id: 4, name: '微信商城', url: '/wechat', sub_menu: [] },
		                	{ id: 5, name: '自由收款', url: '/dynamic', sub_menu: [] },
		                	{ id: 6, name: '业务员推广', url: '/cashier', sub_menu: [] },
		                	{ id: 7, name: '红包云', url: '/hongbao', sub_menu: [] }
		                ]
		            },
		            { 
		            	id: 8, name: '我的收银', url: '', sub_menu: [
		                	{ id: 9, name: '账户明细', url: '/journal', sub_menu: [] },
		                	{ id: 10, name: '我要提现', url: '/withdraw', sub_menu: [] },
		                	{ id: 11, name: '退款纪录', url: '/refund', sub_menu: [] }
		                ]
		            }
	            ]
			}
		},
		created() {
			this.$store.dispatch('selectMenu', this.$route.path)
		},
		computed: {
			...mapGetters([
				'select'
				])
		},
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
</style>