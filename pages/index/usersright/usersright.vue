<template>
	
	<view class="message">
		<view class="username">
			{{username}}
		</view>
		<view class="details">
			无欠缴物业费，可享受商户权益
		</view>
		<view class="icon">
			<image :src="avatar" mode=""></image>
		</view>
<!-- 		 <view class="top-bar">
			<view class="select" v-for="(item, index) in select"  @click="isClick(index)"  :key="index"
				:class="currentIndex === index? 'active' : '' ">
				{{item}}
			</view>
		 </view> -->
		 <view class="choicebar">
		 	<choicebar @choiceClick="getRightslist"></choicebar>
		 </view>
		 <view class="rightlist">
			<rightslist :rightslist="rightslist"></rightslist>
		 </view>
	</view>
 
</template>

<script>
	import axios from 'axios';
	import rightslist from '../../../components/usersright/rightslist.vue'
	import choicebar from '../../../components/usersright/choicebar.vue'
	export default {
		created() {
			this.username = window.sessionStorage.getItem("username")
			this.getRightslist(this.count)
			this.avatar = window.sessionStorage.getItem('avatar') 
			this.userId = window.sessionStorage.getItem('userId') 
		},
		data() {
			return {
				username: '',
				count: 0,
				avatar: '',
				userId: '',
				rightslist:[],
				rightslist1: [
			 
				],
				rightslist2: [
					{storeName: "星巴克"},	{storeName: "喜茶"},{storeName: "伏见桃山"},
				],
			}
		},
		methods: {
			getRightslist(index) {
				axios
					.get('http://localhost:8001/coupon/getCouponList?userId=1', {
						params: {
							userId: this.userId,
						},
				
					}).then((response) => {
						this.rightslist1 = response.data.data.CouponList;
						// this.iconList = this.rightslist1 
						// console.log(response.data.data.CouponList)
						// console.log(this.userId)
						console.log(index)
						if(index===0){
							this.rightslist = this.rightslist1
						}
						if(index===1){
							this.rightslist = this.rightslist2
						}
						if(response.data.code === 200 && window.sessionStorage.getItem('username')){
							this.$message.success('获取权限列表成功')
						}
						else {
							this.$message.error('暂无权限，请先登录')
						}
						// uni.showToast({
						// 	title: response.data.message,
						// 	duration: 2000
						// });
					})
					.catch(function(error) {
						this.$message.error('获取评论列表失败')
					});
	 
					
			}
		},
		components: {
			rightslist,
			choicebar
		},
	}
</script>

<style scoped lang="scss">
	.message {
		position: relative;
		padding: 20rpx 20rpx;
		height: 300rpx;
		color: rgb(222, 185, 114);
		background-color: rgb(43, 45, 66);
		.username {
			font-size: 40rpx;
			padding-bottom: 20rpx;
			padding-left: 10rpx;
		}
		.details {
			font-size: 20rpx;
		}
		.icon {
			position: absolute;
			top: 40rpx;
			right: 80rpx;
			image {
				border-radius: 50rpx;
				width: 80rpx;
				height: 80rpx;
			}
		}
		.choicebar {
			height: 150rpx;
		}
		 .rightlist {
			 margin-top: 20rpx;
		 }
		
	}
 
</style>
