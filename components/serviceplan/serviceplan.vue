<template>
	<view class="">
		<view class="title">
			<view class="word">
				业主资产服务计划
			</view>
			<view class="img">
				<image @click="goServiceplan(url)" src="../../static/test/服务计划.jpg" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: 'serviceplan/serviceplan'
			}
		},
	
		methods: {
			goServiceplan(url) {
				this.$emit('goServiceplan',url);
			}
		}
	}
</script>

<style scoped lang="scss">
	.title {
		.word {
			font-weight: 700;
			font-size: 32rpx;
			margin-left: 30rpx;
		}
		.img {
			image{
				margin: 0 20rpx;
				width: 97%;
				height: 300rpx;
			}

		}
	}
</style>
