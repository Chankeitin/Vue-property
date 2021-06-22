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
				currentIndex: 0, //打开页面是bar为选中状态
				select: ['优惠券','到店权益'],
 
			}
		},
		methods: {
			isClick(index) {
				this.currentIndex = index;
				this.$emit('choiceClick', index);
			}
		}
	}
</script>

<style scoped lang="scss">
	.top-bar {
		display: flex;
 
		width: 100%;
		height: 98rpx;
		line-height: 98rpx;
		// background-color: #fff;
		// z-index: 9;
		margin-top: 60rpx;

		.select {
			margin-left: 30rpx;
		}

		.active {
			color: #ff0000;
			margin-left: 30rpx;
			font-weight: 700;
			border-bottom: 2rpx solid #ff0000;
		}
	}
</style>
