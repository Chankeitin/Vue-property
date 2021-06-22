<template>
	<view class="">
		<view class="title">
			<view class="address" v-for="(item,index) in rightslist" :key="index">
				<view class="message">
					<image :src="item.avatar" mode=""></image>
					<text class="name">{{item.storeName}}</text>
				</view>
 
				<el-table :data="item.couponChild"  
				style=" width: 500px; border: 2rpx rgb(222, 185, 114) solid;" :show-header="status" >
					<el-table-column prop="content">
						<template slot-scope="scope">
							<view class="slot">
								<span style="color: red;font-size: 15px;" v-if="scope.row.content !== null">{{scope.row.content}}</span>
								<span style="font-size: 5px; " v-if="scope.row.content !== null">有效期至:{{scope.row.createTime}}</span>			
							</view>
						</template>
					</el-table-column>
				</el-table>
 
<!-- 				<view class="rights" v-show="item.couponChild" v-for="rights in item.couponChild">
					<view class="rightname">
						 {{rights.content}} 
					</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
			data() {
				return {
					status: false,
				}
			},
			methods: {
 
			},
			props: {
				rightslist: {
					type: Array,
					required: true
				}
			}
		}
	</script>
 

<style scoped lang="scss">
	.title {
		// background-color: #eee;
		padding-bottom: 100rpx;
		.message {
			display: flex;
			height: 100rpx;
			margin-top: 20rpx;
			border-bottom: 2rpx solid #eee;
			image {
				border-radius: 50rpx;
				width: 80rpx;
				height: 80rpx;
			}
			.name {
				padding-left: 30rpx;
				padding-top: 20rpx;
			}
		}
		.slot {
			display: flex;
			justify-content: space-between;
		}
		.rights {
			display: flex;
			padding-left: 100rpx;
			padding-top: 20rpx;
			.rightname {
				padding-left: 10rpx;
				color: rgb(145, 141, 140)
			}
		}
	}
 
</style>
