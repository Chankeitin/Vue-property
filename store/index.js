import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: {
			// username: window.sessionStorage.getItem('username'),
			username: '游客',
			avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.hao661.com%2Fqq.hao661.com%2Fuploads%2Fallimg%2Fc160128%2F1453c42TZ620-22A15.jpg&refer=http%3A%2F%2Fimg.hao661.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625138211&t=e6c3391c2ed694568de8477ea47ee0a0'
			// avatar: window.sessionStorage.getItem('avatar')
		},
	},
	getter: {
	},
	mutations: {
		setUserInfo(state, payload) {
			state.user.username = payload.username;
			state.user.avatar = payload.avatar;
		}
	}
})

export default store;