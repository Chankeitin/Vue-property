<template>
 
	<view class="menus">
		<uni-list>
			<uni-list-item title="我的订单" :showArrow="true" to="../../pages/mine/order/order"></uni-list-item>
			<uni-list-item title="我的一卡通" :showArrow="true" to="../../pages/mine/card/card"></uni-list-item>
		</uni-list>

		<uni-list>
			<uni-list-item title="我的友两手" :showArrow="true" to="../../pages/mine/friendHands/friendHands">
			</uni-list-item>
			<uni-list-item title="我的帖子" clickable :showArrow="true" @click="checkpermission()"></uni-list-item>
			<uni-list-item title="我的活动" :showArrow="true" to="../../pages/mine/activities/activities"></uni-list-item>
		</uni-list>

		<uni-list>
			<uni-list-item title="功能异常与产品建议" :showArrow="true" to="../../pages/mine/problem/problem"></uni-list-item>
			<uni-list-item title="通知设置" :showArrow="true" to="../../pages/mine/setting/setting"></uni-list-item>
			<uni-list-item title="关于我们" :showArrow="true" to="../../pages/mine/ours/ours"></uni-list-item>
		</uni-list>
		 <el-button class="button" v-show="!check"  type="primary" plain @click="logout">登录账号</el-button>
		 <el-button class="button" v-show="check" type="danger" @click="logout">退出登录</el-button>
	</view>
 
</template>

<script>
	import uniList from './uni-list/components/uni-list/uni-list.vue'
	import uniListItem from './uni-list/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniList,
			uniListItem,
		},
		data() {
			return {
				check: ""
			}
		},
		created() {
			this.check = window.sessionStorage.getItem('username')
			console.log(this.check)
		},
		methods: {
			logout() {
				if(window.sessionStorage.getItem('username')){
					this.$message.info('退出账号')
				}
				uni.request({
					url: 'http://localhost:8001/logout',
					method: 'POST',
					success: (res) => {
						window.sessionStorage.clear();
						// window.sessionStorage.setItem('username', "游客");
						// window.sessionStorage.setItem('avatar', "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.hao661.com%2Fqq.hao661.com%2Fuploads%2Fallimg%2Fc160128%2F1453c42TZ620-22A15.jpg&refer=http%3A%2F%2Fimg.hao661.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625138211&t=e6c3391c2ed694568de8477ea47ee0a0");
						uni.navigateTo({
							url: '../../pages/login/index'
						})
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					fail: () => {
						console.log('失败')
					}
				})
			},
			checkpermission(){
				console.log("1")
				if(window.sessionStorage.getItem("username")){
					this.$message.success("选择发布帖子成功")
					uni.navigateTo({
						url: '../../pages/mine/post/post'
					})
				}
				else {
					this.$message.error("暂无权限，请先登录")
				}
 
			}
		}
	}
</script>

<style scoped lang="scss">
	.menus {
		margin-top: 20rpx;
		padding-bottom: 48rpx;
		.uni-list {
			margin-top: 20rpx;
		}
	}
	.button {
		margin-top: 30rpx;
		margin-left: 260rpx;
		text-align: center;
	}
</style>
