import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './permission.js'
import './assets/common/fonts/iconfont.css'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$store = store

new Vue({
  render: h => h(App),
}).$mount('#app')
