<template>
    <div class="nav-box">
		<router-link to="/content/home" tag="div">
			<i class="iconfont icon-shouye"></i>
			<p>首页</p>
		</router-link>
		<router-link to="/content/types" tag="div">
			<i class="iconfont icon-fenlei"></i>
			<p>分类</p>
		</router-link>
		<router-link to="/content/cart" tag="div">
			<i class="iconfont icon-gouwuche"></i>
			<p>购物车</p>
		</router-link>
		<router-link to="/content/aboutme" tag="div">
			<i class="iconfont icon-tubiaolunkuo-"></i>
			<p>我的</p>
		</router-link>
	</div>
</template>

<script>
    export default {
    
    }
</script>

<style lang="less" scoped>
	.nav-box{
		width: 100%;
		height:0.8rem;
		border-top: 1px solid #ddd;
		-moz-box-shadow: 0px -1px 2px #aaaaaa; /* 老的 Firefox */
		box-shadow: 0px -1px 2px #aaaaaa;
		position: fixed;
		display: -webkit-flex; /* Safari */
		bottom: 0rem;
		background-color: white;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		div{
			text-align: center;
			font-size: 0.2rem;
			flex-grow:1;
			padding-top: 0.06rem;
			cursor: pointer;
			i{
				font-size: 0.386rem;
			}
		};
		.active{
			color: #f9446b;
		}
	}
</style>
