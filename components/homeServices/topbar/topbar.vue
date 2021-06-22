<template>
	<view class="top-bar">
		<view class="select" v-for="(item, index) in select" @click="isClick(index)" :key="index"
			:class="currentIndex === index? 'active' : '' ">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0,
				// select: ['市集', '社团拼团', '便利'],
				select: ['流行', '新款', '精选'],
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
		position: fixed;
		width: 100%;
		height: 98rpx;
		line-height: 98rpx;
		background-color: #fff;
		z-index: 9;
		margin-top: 88rpx;

		.select {
			margin-left: 20rpx;
		}

		.active {
			color: #ff0000;
			margin-left: 20rpx;
			font-weight: 700;
			border-bottom: 2rpx solid #ff0000;
		}
	}
</style>
