<template>
	<view class="top">
		<view class="head" @click="goLogin()">
			<image :src="avatar" @click="goLogin"></image>
		</view>
		<view class="title">
			<view class="name">{{name}} </view>
			<view class="location">佛山万科城</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '游客',
				avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.hao661.com%2Fqq.hao661.com%2Fuploads%2Fallimg%2Fc160128%2F1453c42TZ620-22A15.jpg&refer=http%3A%2F%2Fimg.hao661.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625138211&t=e6c3391c2ed694568de8477ea47ee0a0'
			}
		},
		created() {
			if (window.sessionStorage.getItem('avatar') === null) {
				this.name = '游客',
					this.avatar =
					'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.hao661.com%2Fqq.hao661.com%2Fuploads%2Fallimg%2Fc160128%2F1453c42TZ620-22A15.jpg&refer=http%3A%2F%2Fimg.hao661.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625138211&t=e6c3391c2ed694568de8477ea47ee0a0'
			} else {
				this.name = window.sessionStorage.getItem('username')
				this.avatar = window.sessionStorage.getItem('avatar');
			}

			// if (window.sessionStorage.getItem('avatar')) {
			// 	this.name = window.sessionStorage.getItem('username')
			// 	this.avatar = window.sessionStorage.getItem('avatar');
			// }

			// console.log(this.name, this.avatar);
			// setUser();
			// this.$store.commit('setUserInfo', {
			// 		username: window.sessionStorage.getItem('username'),
			// 		avatar: window.sessionStorage.getItem('avatar')
			// })
			// console.log(this.$store.state.user.username);
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: '../../pages/login/index'
				})
			},
			setUser() {
				// this.$store.commit('setUserInfo', {
				// 		username: window.sessionStorage.getItem('username'),
				// 		avatar: window.sessionStorage.getItem('avatar')
				// })
				console.log('aaaa')
			}
		}
	}
</script>

<style scoped lang="scss">
	.top {
		display: flex;
		justify-content: flex-start;
		margin-top: 20rpx;
		border-bottom: 2rpx solid #e2e2e2;
		background-color: #fff;

		.head {
			padding-left: 40rpx;

			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			}
		}

		.title {
			margin-left: 40rpx;

			.name {
				font-weight: 700;
				font-size: 40rpx;
			}
		}

	}
</style>
