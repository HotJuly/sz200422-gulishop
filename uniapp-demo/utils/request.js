import config from './config.js';

let baseUrl;
/*
	如果当前环境是h5,baseUrl等于config.h5Host,
	如果当前环境是小程序,baseUrl等于config.mpHost
*/
let devtools = uni.getSystemInfoSync().platform;
if(devtools==="devtools"){
	baseUrl=config.mpHost;
}else if(devtools==="ios"&&process.env.NODE_ENV==="development"){
	baseUrl=config.h5Host;
}
// console.log(devtools)
export default function(url,data={},method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl + url,
			data,
			method,
			success(res) {
				// console.log(res)
				resolve(res.data)
			},
			fail(error) {
				console.log(error)
				//欺骗状态
				resolve(false)
			}
		})
	})
}