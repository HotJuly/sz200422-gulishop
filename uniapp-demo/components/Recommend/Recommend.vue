<template>
	<view class="recommnedContainer">
		<!-- banner区域 -->
		<swiper class="bannerSwiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<image class="bannerImg" src="https://yanxuan.nosdn.127.net/b4f1825564cb1c071ef3b96a11ae11a8.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image class="bannerImg" src="https://yanxuan.nosdn.127.net/3cdf019e3111d65b861d93c6182f7596.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image class="bannerImg" src="https://yanxuan.nosdn.127.net/7a67e59b334b50c6d94f13bedc50d2c3.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- policyDescList区域 -->
		<view class="policyDescList">
			<view class="descItem" v-for="descItem in indexData.policyDescList" :key="descItem.icon">
				<image class="descImg" :src="descItem.icon" mode=""></image>
				<text class="descText">{{descItem.desc}}</text>
			</view>
		</view>
		
		<!-- kingKongList区域 -->
		<view class="kingKongList" v-if="indexData.kingKongModule">
			<view class="kingKongItem" v-for="kingKongItem in indexData.kingKongModule.kingKongList" :key="kingKongItem.L1Id">
				<image class="kingKongImg" :src="kingKongItem.picUrl" mode=""></image>
				<text class="text">{{kingKongItem.text}}</text>
			</view>
		</view>
		
		<!-- Categorys分类推荐区域 -->
		<Categorys :categoryObj="categoryObj" v-for="categoryObj in indexData.categoryModule" :key="categoryObj.titlePicUrl" />
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import Categorys from '../Categorys/Categorys.vue'
	export default{
		data(){
			return{
				
			}
		},
		computed:{
			...mapState({
				indexData:state=>state.home.indexData
			})
		},
		components:{
			Categorys
		}
	}
</script>

<style lang="stylus">
	.recommnedContainer
		.bannerSwiper
			height 350upx
			.bannerImg
				width 100%;
				height 100%
		.policyDescList
			display flex
			.descItem
				flex-grow 1
				text-align center
				.descImg
					width 32upx
					height 32upx
					vertical-align middle
				.descText
					font-size 24upx
					vertical-align middle
		.kingKongList
			display flex
			flex-wrap wrap
			margin-top 20upx
			.kingKongItem
				display flex
				flex-direction column
				align-items center
				width 20%
				.kingKongImg
					width 110upx
					height 110upx
				.text
					font-size 24upx
</style>
