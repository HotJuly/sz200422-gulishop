<template>
	<view class="categoryContainer">
		<view class="header">
			<view class="search_div">
				搜索商品
			</view>
		</view>
		<view class="content">
			<view class="leftContainer">
				<scroll-view scroll-y="true" class="navScroll">
					<view class="navItem"
					 :class="navIndex===index?'active':''"
					 v-for="(category,index) in categoryDatas"
					 @click="changeNavIndex(index)"
					 :key="category.id">{{category.name}}</view>
				</scroll-view>
			</view>
			<view class="rightContainer">
				<scroll-view scroll-y="true" class="contentScroll">
					<view class="scrollHeader">
						<image class="headerImg" :src="categoryObj.imgUrl" mode=""></image>
					</view>
					<view class="contentItem" v-for="item in categoryObj.subCateList" :key="item.id">
						<image :src="item.wapBannerUrl" mode=""></image>
						<text>{{item.name}}</text>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js';
	export default {
		data() {
			return {
				navIndex:0,
				categoryDatas:[]
			};
		},
		async mounted(){
			let result = await request('/getCategoryDatas');
			console.log(result)
			this.categoryDatas=result;
		},
		methods:{
			changeNavIndex(index){
				this.navIndex=index;
			}
		},
		computed:{
			categoryObj(){
				return this.categoryDatas[this.navIndex]
			}
		}
	}
</script>

<style lang="stylus">
.categoryContainer
	height 100%
	.header
		height 60upx
		padding 10upx 0
		border-bottom 2upx solid #eee
		.search_div
			height 60upx
			background #eee
			width 704upx
			margin 0 auto
			border-radius 10upx
			line-height 60upx
			text-align center
			font-size 28upx
	.content
		display flex
		height calc(100vh - 82upx)
		background #eee
		.leftContainer
			width 20%
			height 100%
			font-size 26upx
			text-align center
			border-right 1upx solid #eee
			//border-box 称为怪异盒模型 , 又称为IE盒模型,内缩盒模型,布局占位宽度 width(content+padding+border)+margin
			//content-box 标准盒模型,布局占位宽度 width+padding+border+margin
			box-sizing border-box  
			.navScroll
				height 100%
				background-color white
				.navItem
					position relative
					height 80upx
					line-height 80upx
					&.active::after
						position absolute
						content ''
						top 10upx
						left 4upx
						width 2upx
						height 60upx
						background-color #BB2C08
		.rightContainer
			width 80%
			height 100%
			background-color white
			.contentScroll
				width 100%
				height 100%
				.scrollHeader
					width 100%
					.headerImg
						display block
						width 520upx
						height 190upx
						margin 20upx auto
				.contentItem
					display inline-flex
					flex-direction column
					align-items center
					width 33.333% 
					image
						width 160upx
						height 144upx
					text
						font-size 26upx
</style>
