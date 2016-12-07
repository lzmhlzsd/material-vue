<template>
	<ul>
		<li v-for="p in products">
			{{ p.title }} - {{ p.price | currency }}
			<br>
			<button
				:disabled="!p.inventory"
				@click="addToCart(p)">
					Add to cart
				</button>
		</li>
	</ul>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		//计算属性将被混入到 Vue 实例中
		computed: mapGetters({
			products: 'allProducts'
		}),
		//创建组件方法分发 action
		methods: mapActions([
			'addToCart'
		]),
		created (){
			this.$state.dispatch('getAllProducts')
		}
	}
</script>