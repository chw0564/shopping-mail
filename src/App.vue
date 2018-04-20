<template>
	<div id="app">
		<div class="main-content">
			<router-view/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	computed:{
		getShow(){
			return this.$route.path;
		}
	},
	mounted(){
		this.$store.dispatch("loadKeyWord");
	}
}
</script>

<style>
*:not(.swiper-wrapper){
	margin: 0px;
	padding: 0px;
	overflow: hidden;
	font-size: 0.2rem;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	background-color: #333333;
	position: absolute;
	top: 0rem;
	bottom: 0rem;
	left: 0rem;
	right: 0rem;
}
.main-content{
	max-width: 6.5rem;
	background-color: white;
	height: 100%;
	margin: 0 auto;
	/* 设置该属性，让子元素 定位以该元素作为父类 */
	transform:translate(0,0);
}
</style>
