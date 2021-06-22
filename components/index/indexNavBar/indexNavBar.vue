<template>
	<view class="navBar">
		<view class="left iconfont icon-ditu" @click="goMap" ></view>
		<view class="title">欢迎使用物业app</view>
		<view class="right">
			<view class=" iconfont icon-huangguanguanjundiyihuiyuan" @click="gotoCrown(url)"></view>
			<view class=" iconfont icon-xiaoxi"></view>
		</view>
<!-- 		<view class="left">111</view>
		<view class="title">住这儿</view>
		<view class="right">
			<view class=" iconfont icon-huangguanguanjundiyihuiyuan" @click="gotoCrown(url)"></view>
			<view class=" iconfont icon-xiaoxi"></view>
		</view> -->
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: 'crown/crown'
				
			}
		},
		methods: {
			goMap() {
				this.$emit('goMap');
			},
			gotoCrown(url) {
				this.$emit('gotoCrown',url);
			}
		}
	}
</script>

<style scoped lang="scss">
.navBar {
	display: flex;
	position: fixed;
	width: 100%;
	justify-content:space-between;
	font-size: 50rpx;
	border-bottom: 4rpx solid #f6f6f6;
	background-color: #fff;
	z-index: 9;

	.title {
		text-align: center;
		// font-weight: 700;
		font-size: 20px;
		font-family:"Microsoft Yahei";
	}
	.right {
		display: flex;
	}
	.iconfont {
		font-size: 50rpx;
	}
	
	.icon-xiaoxi {
		margin-left: 20rpx;
	}
}
</style>
