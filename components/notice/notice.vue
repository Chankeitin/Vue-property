<template>
	<view class="context">
		<view class="title">
			<text class="word">物业公告<span style="padding-left: 20rpx;font-weight: 100">|</span></text>
		</view>
		<view class="notice">
			<text class="word" @click="goDetails(url)">查看往期公告<span>>>></span></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: 'notice/notice'
			};
		},
		methods: {
			goDetails(url) {
				this.$emit('goDetails', url);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.context {
		display: flex;

		.title {
			margin: 30rpx 30rpx;
			font-weight: 700;
			font-size: 16px;
		}

		.notice {
			margin-top: 28rpx;
			margin-left: 150rpx;
			font-size: 30rpx;
			color: red;
			.word {
				 margin-left: 100rpx;
			}
		}
	}
</style>
