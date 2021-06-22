<template>
	<view>
		<view class="title">
			<text>我的订单</text>
		</view>
		<view class="bar">
			<topbar></topbar>
		</view>
	</view>
</template>

<script>
	import topbar from '../../../components/mine/order/topbar.vue'
	export default {
		data() {
			return {
				
			};
		},
		components: {
			topbar
		}
	}
</script>

<style lang="scss">
	.title {
		padding: 40rpx 20rpx;
		font-weight: 700;
		font-size: 50rpx;
	}
</style>
