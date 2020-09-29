import request from '../../utils/request.js';
import indexData from '../../utils/datas/index.json';
import {CHANGEINDEXDATA} from '../mutation-types.js';
const state={
	initData:"我是home模块的初始数据",
	indexData:{}
}

const mutations={
	[CHANGEINDEXDATA](state,indexData){
		state.indexData=indexData
		// console.log(state)
	},
	// [A](){
	// 	console.log('我是甲编写的mutation-a')
	// },
	// //1000行代码
	// a(){
	// 	console.log('我是乙编写的mutation-a')
	// }
}

const actions={
	async getIndexData({commit}){
		let result = await request('/getIndexData');
		if(!result){
			result=indexData;
		}
		commit(CHANGEINDEXDATA,result)
		// console.log(store)
		
	}
}

const getters={
	
}



export default {
	state,
	mutations,
	actions,
	getters
}