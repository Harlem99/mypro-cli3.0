import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import filters from './lib/filters'

Vue.config.productionTip = false //去掉提示
Vue.prototype.$bus = Bus

//Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //全局注册filters
Object.keys(filters).forEach(key => {  
  Vue.filter(key, filters[key])  
}) 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
