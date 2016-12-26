<template>
	<!-- <nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<router-link class="navbar-brand" to="/">Vue-订单demo</router-link>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<router-link tag="li" to="/latest">近7天待还 <span class="sr-only">(current)</span></router-link>
					<router-link tag="li" to="/all">全部待还</router-link>
				</ul>
			</div>
		</div>
	</nav> -->
	<div class="tee-navbar">
		<span>{{ select }}</span>
	</div>
</template>
<script>
	export default {
		name: 'Nav',
		data() {
			return {
				select: ''
			}
		},
		created() {
			this.$store.dispatch('selectMenu', this.$route.path)
		},
		mounted () {
		    this.select = this.$store.getters.select.name
		}
	}
</script>
<style lang="stylus">
	.tee-navbar
		font-size 2rem
		padding 0.5rem 1rem
</style>