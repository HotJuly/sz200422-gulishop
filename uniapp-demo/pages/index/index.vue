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
		<scroll-view class="navScroll" scroll-x >
			<view class="navItem active">推荐</view>
			<view class="navItem">居家生活</view>
			<view class="navItem">美食酒水</view>
			<view class="navItem">服饰鞋包</view>
			<view class="navItem">推荐</view>
			<view class="navItem">居家生活</view>
			<view class="navItem">美食酒水</view>
			<view class="navItem">服饰鞋包</view>
			<view class="navItem">推荐</view>
			<view class="navItem">居家生活</view>
			<view class="navItem">美食酒水</view>
			<view class="navItem">服饰鞋包</view>
			<view class="navItem">推荐</view>
			<view class="navItem">居家生活</view>
			<view class="navItem">美食酒水</view>
			<view class="navItem">服饰鞋包</view>
			<view class="navItem">推荐</view>
			<view class="navItem">居家生活</view>
			<view class="navItem">美食酒水</view>
			<view class="navItem">服饰鞋包</view>
			<view class="navItem">推荐</view>
			<view class="navItem">居家生活</view>
			<view class="navItem">美食酒水</view>
			<view class="navItem">服饰鞋包</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

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
