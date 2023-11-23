const getters = {
	//state.user.token 全局状态对象.子模块状态对象.子模块状态存储值。
	token: state => state.user.token,
	avatar: state => state.user.avatar,
	name: state => state.user.name,
	roles: state => state.user.roles,
	permissions: state => state.user.permissions
}
export default getters