<template>

	<view class="goods-item" @click="itemClick(goodsItem.iid)">
		<image :src="showImage"></image>
		<view class="goods-info">
			<p class="p">{{goodsItem.title}}</p>
			<text class="price">￥{{goodsItem.price}}</text>
			<u-icon name="star"></u-icon>
			<text class="collect">{{goodsItem.cfav}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goodsItem: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {

			}
		},
		computed: {
			showImage() {
				return this.goodsItem.image || this.goodsItem.show.img;
			}
		},
		created() {},
		methods: {
			itemClick(id) {
				uni.$emit('goDetail', id);
			}
		},
	}
</script>

<style scoped lang="scss">
	.goods-item {
		padding-bottom: 80rpx;
		position: relative;
		// display: flex;
		width: 48%;
		margin-left: 10rpx;
		

		.goods-info {
			font-size: 24rpx;
			position: absolute;
			// display: flex;
			// flex-direction: column;
			bottom: 10rpx;
			left: 0;
			right: 0;
			overflow: hidden;
			text-align: center;

			.p {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				// margin-bottom: 5px;
			}

			.price {
				color: #FF0000;
				margin-right: 40rpx;
			}

			.collect {
				position: relative;
			}
		}
	}
</style>
