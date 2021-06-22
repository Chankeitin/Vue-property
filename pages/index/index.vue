<template>
	<view class="home">

		<index-nav-bar @goMap='goMap' @gotoCrown="gotoCrown"></index-nav-bar>


		<view class="swiper">
			<swiper indicator-dots circular autoplay>
				<swiper-item v-for="(item, index) in swiper" :key="index">
					<image :src="item.image"></image>
				</swiper-item>
			</swiper>
		</view>

		<view class="functions">
			<functions @goLink="goLink"></functions>
		</view>

		<view class="notice">
			<notice @goDetails="goDetails"></notice>
		</view>
		
		<!-- <button @click="login">按钮</button> -->
		<sun-property></sun-property>
		
		<social-activities></social-activities>
		<view class="users-right">
			<usersright @goUsersright="goUsersright"></usersright>
		</view>
		<view class="service-plan">
			 <serviceplan @goServiceplan="goServiceplan"></serviceplan>
		</view>
<!-- 		<view v-for="item of 50">
			{{item}}
		</view> -->
	</view>
</template>

<script>
	import indexNavBar from '../../components/index/indexNavBar/indexNavBar.vue'
	import functions from '../../components/index/functions/functions.vue'
	import notice from '../../components/notice/notice.vue'
	import sunProperty from '../../components/index/sunProperty/sunProperty.vue'
	import socialActivities from '../../components/index/socialActivities/socialActivities.vue'
	import usersright from '../../components/usersright/usersright.vue'
	import serviceplan from '../../components/serviceplan/serviceplan.vue'
	export default {
		data() {
			return {
				HomeData: null,
				swiper: [],
				max: 50,
			}
		},
		components: {
			indexNavBar,
			functions,
			notice, //物业公告组件
			sunProperty, //阳光物业组件
			socialActivities, //社交活动组件
			usersright, //用戶权益组件，
			serviceplan
 
		},

		created() {
			this.getSwiper();
		},
		methods: {
			login() {
				uni.login({
				  provider: 'weixin',
				  success: res => {
				    console.log(res);
				  }
				});
			},
			//去网地图
			goMap() {
				uni.navigateTo({
					url:'./map/map'
				})
			},

			//请求轮播图数据
			async getSwiper() {
				const {
					data: res
				} = await new Promise((resolve, reject) => {
					uni.request({
						url: 'http://152.136.185.210:7878/api/m5/home/multidata',
						success: (res) => {
							resolve(res);
						}
					})
				})
				this.swiper = res.data.banner.list;
				console.log(this.swiper);
			},
			goLink(url, index) {
				if (index === 1) {
					uni.scanCode({
						onlyFromCamera: true,
						success: function(res) {
							console.log('条码类型：' + res.scanType);
							console.log('条码内容：' + res.result);
						}
					});
				} else {
					uni.navigateTo({
						url: url
					})
				}
			},
			goDetails(url) {
				uni.navigateTo({
					url: url
				})
			},
			goUsersright(url) {
				uni.navigateTo({
					url: url
				})
			},
			goServiceplan(url) {
				uni.navigateTo({
					url: url
				})
			},

			gotoCrown(url) {
				uni.navigateTo({
					url: url
				})
			}

		}
	}
</script>

<style scoped lang="scss">
	.home {
		height: 100vh;
		background-color: #f0f0f0;

		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
				margin-top: 70rpx;
			}
		}
		.notice {
			height: 100rpx;
			background-color: white;
		}
		.users-right {
			margin-top: 40rpx;
		}
	}
	.service-plan {
		padding-bottom: 100rpx;
	}
</style>
