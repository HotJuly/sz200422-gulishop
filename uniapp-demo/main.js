import Vue from 'vue'
import App from './App'
import store from './store/index.js';

Vue.config.productionTip = false

//mp->mini program  type->类型说明
//此处说明App组件,代表整个小程序
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
