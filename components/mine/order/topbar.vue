<template>
	<view class="top-bar">
		<view class="select" v-for="(item, index) in select" @click="isClick(index)" :key="index"
			:class="currentIndex === index? 'active' : '' ">
			<text>{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0,
				select: ['全部', '待付款', '待收货','待点评','售后'],
			}
		},
		methods: {
			isClick(index) {
				this.currentIndex = index;
				this.$emit('topClick', index);
			}
		}
	}
</script>

<style scoped lang="scss">
	.top-bar {
		display: flex;
		justify-content: space-around;
		position: fixed;
		width: 100%;
		height: 98rpx;
		line-height: 98rpx;
		background-color: #fff;
		z-index: 9;
		.select {
			margin-left: 20rpx;
			text {
				color: rgb(144, 144, 144);
			}
			
		}

		.active {
			color: rgb(44, 44, 44);
			margin-left: 20rpx;
			font-weight: 700;
			border-bottom: 2rpx solid rgb(44, 44, 44);
		}
	}
</style>
