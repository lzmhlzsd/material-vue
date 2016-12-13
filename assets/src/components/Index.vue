<template>
    <div>
        <div class="tee-sider">
            <mu-list>
                <mu-list-item v-bind="{ title: menu.name}" v-for="menu in menus" toggleNested>
                	<mu-list-item slot="nested" v-bind="{ title: submenu.name }" v-for="submenu in menu.sub_menu" @click="go(submenu.url)"></mu-list-item>
                </mu-list-item>
            </mu-list>
        </div>
        <div class="tee-content">
        	<table style="width: 100%;" border="1">
        		<tr>
        			<th>1</th><th>1</th><th>1</th><th>1</th><th>1</th>
        		</tr>
        		<tr>
        			<td>a</td><td>a</td><td>a</td><td>a</td><td>a</td>
        		</tr>
        		<tr>
        			<td>a</td><td>a</td><td>a</td><td>a</td><td>a</td>
        		</tr>
        		<tr>
        			<td>a</td><td>a</td><td>a</td><td>a</td><td>a</td>
        		</tr>
        		<tr>
        			<td>a</td><td>a</td><td>a</td><td>a</td><td>a</td>
        		</tr>
        		<tr>
        			<td>a</td><td>a</td><td>a</td><td>a</td><td>a</td>
        		</tr>
        	</table>
        </div>
    </div>
</template>
<script>
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
		methods: {
			go: function(url){
				this.$router.push({path:"/url"});
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
	.tee-content
		height 100%
		padding-left 30rem
</style>
