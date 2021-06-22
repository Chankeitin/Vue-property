<template>
	<view v-if="Object.keys(goods).length !== 0" class="baseInfo">
		<view class="info-title">{{goods.title}}</view>
		<view class="info-price">
			<text class="info-newPrice">{{goods.newPrice}}</text>
			<text class="info-oldPrice">{{goods.oldPrice}}</text>
			<text class="discount">{{goods.discount}}</text>
		</view>

		<view class="info-other">
			<text>{{goods.columns[0]}}</text>
			<text>{{goods.columns[1]}}</text>
			<text>{{goods.services[goods.services.length-1].name}}</text>
		</view>

		<!-- #ifdef H5 -->
		<view class="info-service">
			<view class="info-service-item" v-for="index in goods.services.length-1" :key="index">
				<image :src="goods.services[index-1].icon" alt=""> </image>
				<text>{{goods.services[index-1].name}}</text>
			</view>
		</view>
		<!-- #endif -->

		<!-- #ifdef MP-WEIXIN -->
		<view class="info-service">
			<view class="info-service-item" v-for="index in goods.services.length-1" :key="index">
				<image :src="goods.services[index].icon" alt=""> </image>
				<text>{{goods.services[index].name}}</text>
			</view>
		</view>
		<!-- #endif -->


	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			goods: {
				type: Object,
				default () {
					return {};
				}
			}
		},
		// watch: {
		// 	goods() {
		// 		console.log(this.goods);
		// 	}
		// }
	}
</script>

<style scoped lang="scss">
	.baseInfo {
		color: #999;

		.info-title {
			color: #000;
			margin: 5px;
			font-weight: 700;
		}

		.info-price {
			position: relative;

			.info-newPrice {
				padding-left: 10rpx;
				font-size: 48rpx;
				color: #FF0000;
			}

			.info-oldPrice {
				margin-left: 20rpx;
				font-size: 28rpx;
				text-decoration: line-through
			}

			.discount {
				position: absolute;
				font-size: 16rpx;
				color: #fff;
				background-color: #FF0000;
				padding: 3rpx 6rpx 3rpx 6rpx;
				border-radius: 98%;
			}
		}

		.info-other {
			display: flex;
			justify-content: space-between;

			font-size: 24rpx;
			margin-top: 30rpx;
			padding: 10rpx;
			border-bottom: 2rpx solid rgba(100, 100, 100, .3);
		}

		.info-service {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			font-size: 20rpx;
			padding: 20rpx 20rpx 40rpx 20rpx;
			margin-top: 40rpx;
			border-bottom: 2rpx solid rgba(100, 100, 100, .3);

			.info-service-item {
				image {
					position: relative;
					width: 28rpx;
					height: 28rpx;
					top: 4rpx;
				}

				text {
					font-size: 26rpx;
					color: #333;
				}
			}
		}




	}
</style>
