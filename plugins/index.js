import tab from './tab'
import auth from './auth'
import modal from './modal'

/**
 * Vue 混入 组件之间共享 JavaScript 方法和属性 使用方式this.$tab
 * @param {Object} Vue
 */
export default {
  install(Vue) {
    // 页签操作
    Vue.prototype.$tab = tab
    // 认证对象
    Vue.prototype.$auth = auth
    // 模态框对象
    Vue.prototype.$modal = modal
  }
}
