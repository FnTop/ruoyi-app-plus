import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import getters from './getters'

/**
Vue和Vuex的区别主要体现在以下三个方面：

功能定位：Vue是一种构建用户界面的渐进式框架，具有简洁、易用和高效的特点，
它提供了强大的数据绑定、组件化系统、以及可组合的mixin(混入)。而Vuex是Vue的官方状态管理库，主要用于管理Vue应用中的状态。

结构形式：Vuex采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
这种集中式的状态管理有利于维护复杂的单页面应用中的各种状态。

应用场景：在Vue应用开发过程中，如果需要管理应用的状态（如：用户信息、环境变量、主题样式、授权等），那么Vuex就是一个很好的选择。
相比之下，Vue一般用于构建用户界面，处理应用中的非状态信息。

 */
Vue.use(Vuex)

/**
 * 
 const store = new Vuex.Store({...}): 
 这一行代码创建一个新的Vuex store。这个store是整个应用的状态容器，你可以把它想象成一个全局的state对象。
 
 modules: { user }: 
 在store的配置中，modules是一个包含各个子模块的对象。在这个例子中，有一个名为user的模块。
 每个模块有自己的state、mutation、action等。
 
 getters: 
 这是一个对象，包含了一些getter函数。Getter函数是用来从state中派生出一些状态的。
 它们会接收state作为第一个参数，然后返回一些派生的状态。
 */
const store = new Vuex.Store({
	modules: {
		//子模块状态管理
		user
	},
	getters
})

export default store