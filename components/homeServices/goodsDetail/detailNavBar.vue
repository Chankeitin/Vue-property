<template>
	<view class="nav-bar">
		<view class="nav-bar-item" 
		v-for="(item, index) in title" 
		:key="index"
		@click="itemClick(index)"
		:class="currentIndex === index? 'active' : ''"
		>
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: ['商品', '参数', '评论', '推荐'],
				currentIndex: 0,
			};
			
		},
		props: ['currentIndexx'],
		methods: {
			itemClick(index) {
				this.currentIndex = index;
				this.$emit('itemClick', index);
			}
		},
		watch: {
			currentIndexx() {
				this.currentIndex = this.currentIndexx;
			}
		}
	}
</script>


<style scoped lang="scss">
	.nav-bar {
		display: flex;
		position: fixed;
		justify-content: space-around;
		height: 98rpx;
		width: 100%;
		line-height: 98rpx;
		text-align: center;
		z-index: 9;
		background-color: #f8f8f8;
		.nav-bar-item {
			font-size: 30rpx;
		}
		
		.active {
			color: #FF0000;
		}
	}
</style>
