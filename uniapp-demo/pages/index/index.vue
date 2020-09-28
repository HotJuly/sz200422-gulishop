<template>
	<view class="indexContainer">
		<view class="header">
			<image class="logo" src="/static/images/logo.png" mode=""></image>
			<view class="search">
				<i class="iconfont icon-sousuo"></i>
				<input type="text" value=""  placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button class="username">七月</button>
		</view>
		<scroll-view class="navScroll" scroll-x v-if="indexData.kingKongModule" >
			<view class="navItem active">推荐</view>
			<view class="navItem" 
			v-for="item in indexData.kingKongModule.kingKongList" 
			:key="item.L1Id">{{item.text}}</view>
		</scroll-view>
		<Recommend/>
	</view>
</template>

<script>
	import request from '../../utils/request.js';
	import indexData from '../../utils/datas/index.json';
	import Recommend from '../../components/Recommend/Recommend.vue';
	export default {
		data() {
			return {
				indexData:{}
			}
		},
		/*
			onLoad->页面开始加载
			mounted->页面挂载完毕
			uniapp中,除了可以使用小程序的组件,还可以使用小程序的生命周期
			但是,无论是uniapp,还是mpvue,都推荐使用Vue的生命周期,不推荐小程序的生命周期
		*/
		async mounted() {
			// console.log('mounted')
			let result = await request('/getIndexData');
			if(!result){
				result=indexData;
			}
			this.indexData=indexData;
			// console.log(result)
		},
		components:{
			Recommend
		}
	}
</script>

<style lang="stylus">
.indexContainer
	.header
		display flex
		align-items center
		margin-top 20upx
		.logo
			width 140upx
			height 40upx
			margin 0 20upx
			flex-shrink 0
		.search
			position relative
			height 60upx
			width 100%
			background-color #eee
			padding-left 70upx
			.iconfont
				position absolute
				left 20upx
				top 50%
				transform translateY(-50%)
			input
				height 60upx
				.placeholder
					font-size 24upx
					text-align center
					text-indent -60upx
		button
			width 144upx
			height 60upx
			font-size 28upx
			line-height 60upx
			flex-shrink 0
			margin 0 20upx
			color red
	.navScroll
		// display flex
		white-space nowrap
		height 80upx
		.navItem
			display inline-block
			width 140upx
			height 80upx
			font-size 28upx
			line-height 80upx
			text-align center
			margin 0 10upx
			box-sizing border-box
			&.active
				border-bottom 2upx solid red
</style>
