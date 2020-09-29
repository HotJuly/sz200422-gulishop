<script>
	import request from './utils/request.js';
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			wx.login({
				async success({code}){
					console.log(code)
					let openId = await request('/getOpenId',{code});
					uni.setStorage({
						key:"token",
						data:openId
					})
				}
			})
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="stylus">
	@import url(/static/iconfont/iconfont.styl);
	/*每个页面公共css */
	page
		height 100%
	
</style>
