export default function(url,data={},method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			data,
			method,
			success(res) {
				// console.log(res)
				resolve(res.data)
			},
			fail(error) {
				// console.log(error)
				reject(error)
			}
		})
	})
}