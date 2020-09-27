import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//mp->mini program  type->类型说明
//此处说明App组件,代表整个小程序
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
