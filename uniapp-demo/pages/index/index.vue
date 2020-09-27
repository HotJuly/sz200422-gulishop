<template>
	<view class="indexContainer">
		<view class="header">
			<image class="logo" src="/static/images/logo.png" mode=""></image>
			<view class="search">
				<input type="text" value=""  placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button class="username">七月</button>
		</view>
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
				height 60upx
				width 100%
				background-color #eee
				input
					height 60upx
					.placeholder
						font-size 24upx
						text-align center
			button
				width 144upx
				height 60upx
				font-size 28upx
				line-height 60upx
				flex-shrink 0
				margin 0 20upx
				color red
</style>
