import Vue from 'vue'
import App from './App'
import store from './store' // store
import plugins from './plugins' // plugins
import './permission' // permission
Vue.use(plugins)

Vue.config.productionTip = false
Vue.prototype.$store = store
//创建一个Vue应用程序实例，并将其挂载到DOM中。同时，通过设置mpType属性，可以提供有关应用程序实例的额外信息或标识
App.mpType = 'app'

const app = new Vue({
  ...App
})

app.$mount()
