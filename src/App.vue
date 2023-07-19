<script>
	import { RouterLink, RouterView } from 'vue-router'
	
	export default {
		data() {
			return {
				imgUrl: '../src/assets/img/toyStore1.avif'
			}
		},
		created(){
			this.$store.dispatch({ type: 'loadToys' })
		},
		components:{
			
		}
	}
</script>

<template>
	<img class="background" :src="imgUrl" >
	<header>
		
		<div class="app-header">
			<nav>
				<RouterLink to="/" class="nav-link home-link">Home</RouterLink>
				<RouterLink to="/toy" class="nav-link toy-link">Toys</RouterLink>
				<RouterLink to="/about" class="nav-link about-link">About</RouterLink>
			</nav>
		</div>
	</header>
	<main class="main-layout" >
		<RouterView />
	</main>
</template>

