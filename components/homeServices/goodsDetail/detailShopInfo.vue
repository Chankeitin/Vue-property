<template>
	<view v-if="Object.keys(shop).length !== 0" class="shop-info">
		<view class="shop-info-top">
			<image :src="shop.logo"></image>
			<text class="shop-name">{{shop.name}}</text>
		</view>

		<view class="all">
			<view class="shop-left">
				<view class="shop-sell">
					<view class="sell-number">{{sellNumber}}</view>
					<view class="sell-text">总销量</view>
				</view>

				<view class="shop-count">
					<view class="product-count">{{shop.goodsCount}}</view>
					<view class="product-text">全部宝贝</view>
				</view>
			</view>

			<view class="shop-right">
				<view class="first" v-for="(item, index) in shop.score" :key="index">
					<text>{{item.name}}</text>
					<text class="shop-score" :class="item.isBetter? 'shop-score-better' : ''">
						{{item.score}}
					</text>
					<text class="shop-star" :class="item.isBetter? 'shop-star-better' : ''">
						{{item.isBetter? '高' : '低'}}
					</text>

				</view>
			</view>
		</view>
		
		<button class="button">进店逛逛</button>

	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
			shop: {
				type: Object,
				default () {
					return {};
				}
			}
		},
		computed: {
			sellNumber() {
				return parseFloat(this.shop.sells / 10000).toFixed(1) + '万'
			},
		},

		// watch: {
		// 	shop() {
		// 		console.log(this.shop);
		// 	},
		// }
	}
</script>

<style scoped lang="scss">
	.shop-info {
		margin-top: 30rpx;

		.shop-info-top {
			padding-left: 20rpx;

			image {
				width: 90rpx;
				height: 90rpx;
				border-radius: 50%;
				border: 2rpx solid rgba(0, 0, 0, .1);
			}

			.shop-name {
				position: relative;
				font-size: 32rpx;
				color: #999;
				top: -40rpx;
				margin-left: 20rpx;
			}
		}

		.all {
			display: flex;

			.shop-left {
				width: 45%;
				margin-left: 60rpx;
				margin-top: 60rpx;
				display: flex;
				border-right: 2rpx solid rgba(0, 0, 0, .1);

				.shop-sell {
					.sell-number {
						font-size: 36rpx;
					}

					.sell-text {
						padding-left: 10rpx;
						font-size: 26rpx;
					}
				}

				.shop-count {
					margin-left: 60rpx;

					.product-count {
						font-size: 36rpx;
						padding-left: 14rpx;
					}

					.product-text {

						font-size: 26rpx;
					}
				}
			}

			.shop-right {
				margin-left: 50rpx;
				margin-top: 50rpx;
				position: relative;

				.shop-score {
					color: #5ea732;
					margin-left: 20rpx;
				}

				.shop-score-better {
					color: #FF0000;
					margin-left: 20rpx;
				}

				.shop-star {
					position: absolute;
					right: -60rpx;
					background-color: #5ea732;
					border: 1px solid #F4F4F5;
					font-weight: 700;
					color: #fff;
				}

				.shop-star-better {
					position: absolute;
					right: -60rpx;
					background-color: #FF0000;
					border: 1px solid #F4F4F5;
					font-weight: 700;
					color: #fff;
				}
			}
		}
		.button {
			width: 300rpx;
			height: 80rpx;
			margin-top: 60rpx;
			margin-left: 50%;
			transform: translate(-50%,0);
			text-align: center;
			line-height: 80rpx;
		}

	}
</style>
