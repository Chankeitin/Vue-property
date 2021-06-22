import axios from 'axios'

const request = axios.create({
	// 根据不同的环境设置baseURL，最终发送请求时的URL为: baseURL + 发送请求时写的URL
	baseURL: process.env.VUE_APP_BASE_API,
	withCredentials: true, // 允许携带cookie
	timeout: 15000, // 请求超时, 20秒
})

request.interceptors.response.use(
	response => {
		//登录过期
		if (response.data.errorCode == -1) {
			store.commit('logout', this);
		}
		return response;
	},
	err => {
		// 请求超时， 重新请求
		var config = err.config;
		// If config does not exist or the retry option is not set, reject
		if (!config || !config.retry) return Promise.reject(err);

		// Set the variable for keeping track of the retry count
		config.__retryCount = config.__retryCount || 0;

		// Check if we've maxed out the total number of retries
		if (config.__retryCount >= config.retry) {
			// Reject with the error
			return Promise.reject(err);
		}

		// Increase the retry count
		config.__retryCount += 1;

		// Create new promise to handle exponential backoff
		var backoff = new Promise(function(resolve) {
			setTimeout(function() {
				resolve();
			}, config.retryDelay || 1);
		});

		// Return the promise in which recalls axios to retry the request
		return backoff.then(function() {
			return axios(config);
		});

	});

export default request
