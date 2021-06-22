<template>
	<view v-if="Object.keys(recommends).length !== 0" class="recommend-info">
		<text class="hot">热门推荐</text>
		<goods-list :goods="recommends" class="hotgoods"></goods-list>
	</view>
</template>

<script>
	import goodsList from '../goods/GoodsList.vue'
	export default {
		data() {
			return {
				id: 0,
			}
		},
		props: {
			recommends: {
				type: Array,
			}
		},
		components: {
			goodsList, //商品展示信息
		},
		methods: {
		},
		// watch: {
		// 	recommends() {
		// 		console.log(this.recommends);
		// 	}
		// }
	}
</script>

<style scoped lang="scss">
	.recommend-info {
		.hot {
			position: relative;
			font-weight: 700;
			font-size: 36rpx;
			left: 10rpx;
			top: 20rpx;
		}

		.hotgoods {
			position: relative;
			top: -120rpx;
		}
	}
</style>
