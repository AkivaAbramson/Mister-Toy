<script>
	import { RouterLink, RouterView } from 'vue-router'
	
	export default {
		data() {
			return {}
		},
		created(){
			this.$store.dispatch({ type: 'loadToys' })
		},
		components:{
			
		}
	}
</script>

<template>
	<header>
		
		

		<div class="wrapper">

			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
				<RouterLink to="/toy">Toys</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />
</template>
