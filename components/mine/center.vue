<template>
	<view class="center">
		<view class="top">
			<view class="left">
				<view class="number">0.00</view>
				<view class="surplus">账户余额</view>
			</view>

			<view class="button">
				<text>进入账户</text>
			</view>
		</view>
	</view>

</template>

<script>
	export default {

	}
</script>

<style scoped lang="scss">
	.center {
		background-color: #fff;
		.top {
			display: flex;
			justify-content: space-around;
		}
		.left {
			margin-top: 20rpx;
			.number {
				font-size: 48rpx;
				font-weight: 700;
			}
			.surplus {
				font-size: 24rpx;
				color: #bfbfbf;
			}
		}
		.button {
			cursor: pointer;
			margin-top: 30rpx;
			border: 2rpx solid #ccc;
			text-align: center;
			border-radius: 30rpx;
			line-height: 60rpx;
			height: 60rpx;
			width: 170rpx;
			text {
				text-decoration: underline;
			}
		}
	}
</style>
