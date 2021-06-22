<template>
	<view class="container">
		<el-form style="margin-left: 10px;" ref="formRef" :rules="rules" :model="loginForm" class="login_form" hide-required-asterisk>
			<el-form-item label="用户名" prop="username">
					<el-input style="width: 500rpx;" prefix-icon="el-icon-s-custom" v-model="loginForm.username"></el-input>
			</el-form-item>
			<el-form-item style="padding-left: 7px;" label="密码" prop="password">
					<el-input style="width: 500rpx;padding-left: 5px;"  v-model="loginForm.password" type="password"></el-input>
			</el-form-item>
			<el-form-item>
					<el-button class="button" type="primary" plain @click="check()">点击确定</el-button>
			</el-form-item>
		</el-form>
	</view>
</template>

<script>
	import axios from 'axios'
	import Qs from 'qs'
	export default {
		data() {
			return {
				// 使用验证功能
				loginForm: {
					username: '',
					password: '', 
				}, 
				rules: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' },
						 { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					],
					password:[
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{ min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
					],
			 }
			}
		},
		methods: {
			check() {
				console.log(this.loginForm.username)
				console.log(this.loginForm.password)
				uni.request({
					url: 'http://localhost:8001/login',
					method: 'POST',
					data: Qs.stringify({
						username: this.loginForm.username,
						password: this.loginForm.password
					}),
					success: (res) => {
						if (res.data.code === 200) {
							window.sessionStorage.setItem('userId', res.data.data.user.user.id);
							window.sessionStorage.setItem('username', res.data.data.user.username);
							window.sessionStorage.setItem('avatar', res.data.data.user.user.avatar);
							// this.$store.commit('setUserInfo', {
							// 	username: window.sessionStorage.getItem('username'),
							// 	avatar: window.sessionStorage.getItem('avatar')
							// })
							// console.log(this.$store.state.user.username)
							this.$message.success('登陆成功')
							uni.switchTab({
								url: '../index/index'
							})
						} else {
							this.$message.error('登陆失败')
						}

					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					fail: (res) => {

					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		padding-top: 100rpx;
	}
	.username {
		width: 600rpx;
		margin: 40rpx auto;
	}

	.password {
		width: 600rpx;
		margin: 0rpx auto; 
	}

	.button {
			margin-top: 50rpx;
			margin-left: 260rpx;
			text-align: center;
		}
</style>
