<template>
	<view class="container">
		<view class="version">
			<view class="img">
				<image src="../../../static/Jinx.jpg" mode=""></image>
			</view>
			 <view class="context">
			 	<view class="">
			 		<text>住这儿</text>
			 	</view>
				<view class="">
					<text>v4.9.6</text>
				</view>
				<view class="">
				    <text>Copyright © 2021 住这儿 Written by Jinx in BNUZ,All rights reserver</text>
				</view>
			 </view>
		</view>
		<view class="details">
			<view class="item">
				<navigator url="../ours/serviceagreement" open-type="navigate" hover-class="other-navigator-hover">
					<text>软件许可及服务协议</text>
				</navigator>
			</view>
			<view class="item">
				<navigator url="../ours/privacyagreement" open-type="navigate" hover-class="other-navigator-hover">
					<text>隐私协议</text>
				</navigator>
			</view>
			<view class="item">
				<navigator url="../ours/protectionprinciple" open-type="navigate" hover-class="other-navigator-hover">
					<text>生命识别信息保护原则</text>
				</navigator>
			</view>
			 <view class="item">
			 	<navigator url="../ours/sourcelicense" open-type="navigate" hover-class="other-navigator-hover">
			 		<text>开源许可</text>
			 	</navigator>
			 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
	.container {
		height: 100vh;
		overflow: hidden;
		background-color: rgb(250, 250, 250);
		.version {
			.img {
				margin-top: 50rpx;
				text-align: center;
				image {
					width: 200rpx;
					height: 200rpx;
					border-radius: 30rpx;
				}
			}
			.context {
				padding: 0 50rpx;
				text-align: center;
			}
		}
		.details {
			margin-top: 60rpx;
			.item {
				height: 120rpx;
				padding: 30rpx 40rpx;
				border-bottom: 2rpx solid rgb(238, 238, 238);
				background-color: white;
				font-size: 40rpx;
			}
		}
	}
 
</style>