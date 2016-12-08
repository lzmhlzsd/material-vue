<script>
	import { showDetail } from './../vuex/actions'
	import order from "./Order"

	export default {
		name: 'Latest',

		data() {
			return {}
		},
		components:{
            'order-e': order
        },
		vuex: {
			//解构函数，{orderList}对象指的是store的orderList模块的state.orderList
			getters: {
				orders: ({orderList}) => orderList.orders
			},
			//注入action
			actions: {
				showDetail
			},
			computed: {

			}
		}
	}
</script>
<template>
	<div class="container-fluid">
		<order-e></order-e>
	</div>
</template>