<template>
	<view v-if="Object.keys(goods).length !== 0" class="goods">
		<!-- <goods-list-item v-for="item in goods" :goods-item="item" :key="item.iid"></goods-list-item> -->
		<view class="goods-item" v-for="item in goods" :key="item.iid" @click="itemClick(item.iid)">
			<image :src="item.image || item.show.img"></image>
			<view class="goods-info">
				<p class="p">{{item.title}}</p>
				<text class="price">￥{{item.price}}</text>
				<u-icon name="star"></u-icon>
				<text class="collect">{{item.cfav}}</text>
			</view>
		</view>

	</view>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	export default {
		data() {
			return {
				oldScrollY: 0
			}
		},
		components: {
			GoodsListItem,
		},
		props: {
			goods: {
				type: Array,
				default () {
					return []
				}
			},

		},
		computed: {
			// showImage() {
			// 	return  this.goods.image || this.goods.show.img;
			// }
		},
		mounted() {
			// console.log(this.goods)
		},
		methods: {
			itemClick(id) {
				uni.$emit('goDetail', id);
			}
		}
	}
</script>

<style scoped lang="scss">
	.goods {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
		flex-direction: row;
		padding: 2px;
		margin-top: 192rpx;


		.goods-item {
			padding-bottom: 80rpx;
			position: relative;
			// display: flex;
			width: 48%;
			margin-left: 10rpx;

			image {
				width: 100%;
				border-radius: 10rpx;
			}

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
	}
</style>
