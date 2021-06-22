import Vue from 'vue'
import App from './App'
import store from './store'
import uView from "uview-ui";
Vue.use(uView);
import axios from 'axios';
Vue.prototype.$axios=axios;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$store = store
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// import {
// 	RouterMount
// } from 'uni-simple-router';
// import router from './router'

// import routerLink from './node_modules/uni-simple-router/component/router-link.vue'
// Vue.component('router-link',routerLink)



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store
});

// http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from '@/common/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)

app.$mount();
