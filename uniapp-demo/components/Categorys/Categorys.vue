<template>
	<view class="categorysContainer">
		<image class="titleImg" :src="categoryObj.titlePicUrl" mode=""></image>
		<scroll-view class="categoryScroll" scroll-x="true" >
			<view class="categoryItem" v-for="item in categoryObj.itemList" :key="item.id">
				<image class="categoryImg" :src="item.showPicUrl" mode=""></image>
				<text class="text">{{item.name}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			categoryObj:Object
		}
	}
</script>

<style lang="stylus">
.categorysContainer
	margin-top 20upx
	.titleImg
		width 100%
		height 370upx
	.categoryScroll
		white-space nowrap
		.categoryItem
			display inline-flex
			flex-direction column
			align-items center
			width 200upx
			margin 10upx 20upx
			white-space pre-wrap
			.categoryImg
				width 200upx
				height 200upx
				background #eee
			.text
				display -webkit-box
				-webkit-line-clamp 2
				-webkit-box-orient vertical
				overflow hidden
				height 64upx
				font-size 24upx
</style>
