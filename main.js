import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// Vue.prototype.$api='http://localhost:7001'  //等同于状态管理
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
