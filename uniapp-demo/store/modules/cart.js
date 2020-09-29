import Vue from 'vue';
import {ADDSHOPITEMMUTATION,CHANGECOUNTMUTATION ,CHANGESELECTEDMUTATION,CHANGESELECTEDALLMUTATION} from "../mutation-types.js";
const state={
	cartList:[
		{
			"selected":false,
			"count":5,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 1535004,
		            "tagId": 128111157,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1535004,
		    "sellVolume": 4001,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/f79906f1b1fe86420ea40473de66ec0e.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1538101761748,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1575893634989,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 299,
		    "categoryL2Id": 0,
		    "retailPrice": 209,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 0,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "男式色拉姆内衣套装2.0",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/c2eeb1b872af1b8efc179a7515aacdaa.png",
		    "pointsPrice": 0,
		    "simpleDesc": "色拉姆发热面料，加厚升级",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 1636062,
		    "displaySkuId": 1636056,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		},
		{
			"selected":true,
			"count":2,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 1536001,
		            "tagId": 128111157,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1536001,
		    "sellVolume": 3634,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/32b8b2d07b1c4327593a4a70993eeac2.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1538101896296,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1575894115275,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 299,
		    "categoryL2Id": 0,
		    "retailPrice": 209,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 0,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "女式色拉姆内衣套装2.0",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/02b61fb5700aed6761b7524d98ed0837.png",
		    "pointsPrice": 0,
		    "simpleDesc": "色拉姆发热面料，加厚升级",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 1634105,
		    "displaySkuId": 1634104,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		}
	]
}

const mutations={
	[ADDSHOPITEMMUTATION](state,good){
		// console.log('ADDSHOPITEMMUTATION')
		/*
			需求1:cartList数组中没有该商品的时候,新增一个
			需求2:如果cartList数组中已经存在该商品,将他的数量+1
		*/
	   let shopItem = state.cartList.find(shopItem=>shopItem.id===good.id);
	   if(!shopItem){
		   console.log('1')
		   Vue.set(good,"count",1);
		   Vue.set(good,"selected",true);
		   // good.count=1;
		   state.cartList.push(good)
	   }else{
		   shopItem.count++;
		   console.log('+1',shopItem)
	   }
	},
	[CHANGECOUNTMUTATION](state,{type,index}){
		// console.log("changeCountMutation",type,index)
		//找到对应的商品shopItem
		let shopItem = state.cartList[index];
		if(type){
			//type为true,说明数量+1
			shopItem.count++;
		}else{
			//type为false,说明数量-1
			if(shopItem.count===1){
				state.cartList.splice(index,1);
			}else{
			shopItem.count--;
			}
		}
	},
	[CHANGESELECTEDMUTATION](state,{selected,index}){
		console.log('changeSelectedMutation',selected,index)
		let shopItem=state.cartList[index];
		shopItem.selected=selected;
		//当用户点击选中按钮的时候，修改对应商品的选中状态
	},
	[CHANGESELECTEDALLMUTATION](state,selected){
		// console.log('changeSelectedAllMutation',selected)
		//遍历所有的商品,将他们的选中状态都改成指定状态
		// state.cartList.forEach(shopItem=>{
		// 	shopItem.selected=selected
		// })
		state.cartList.forEach(shopItem=>shopItem.selected=selected)
	}
}

const actions={
	
}

const getters={
	isSelectedAll(state){
		/*全选按钮
			思路:
				1)当购物车中所有的商品的选中状态都为true,全选按钮状态应该是选中(true)
				2)当购物车中部分商品的选中状态为false,全选按钮状态应该是未选中(false)
				3)当购物车中没有商品,全选按钮状态应该是未选中
				4)返回值是布尔值
				5)因为全选按钮的状态,是根据state中的数据进行计算的,所以可以使用getter
		*/
		//find filter map some every
		//some代表数组中至少有一个满足条件,返回值为true,否则为false
		//every代表数组中所有元素都满足条件,返回值为true,否则为false
		let result = state.cartList.every(shopItem=>shopItem.selected)
		return result;
	}
}

export default{
	state,
	mutations,
	actions,
	getters
}