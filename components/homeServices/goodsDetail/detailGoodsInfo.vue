<template>
	<view v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
		<view class="info-desc">
			<view class="start"></view>
			<view class="desc">{{detailInfo.desc}}</view>
			<view class="end"></view>
		</view>

		<view v-for="(item,index) in detailInfo.detailImage" :key="index">
			<view class="info-key">{{item.key}}</view>
			<view class="info-img">
				<image :src="imgitem" @load="imgLoad" v-for="(imgitem, imgindex) in item.list" :key="imgindex"></image>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				imagesLength: 0,
				counter: 0,

			}
		},
		props: {
			detailInfo: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		methods: {
			imgLoad(e) {
				if (++this.counter === this.imagesLength) this.$emit("imageLoad");
			},
		},
		watch: {
			detailInfo() {
				this.imagesLength = this.detailInfo.detailImage[0].list.length;
			}
		}
	}
</script>

<style scoped lang="scss">
	.goods-info {
		margin-top: 40rpx;

		.info-desc {
			padding: 0 30rpx;

			.desc {
				padding: 30rpx 0;
				font-size: 28rpx;
			}

			.start,
			.end {
				width: 90px;
				height: 1px;
				background-color: #a3a3a5;
				position: relative;
			}

			.start {
				float: left;
			}

			.end {
				float: right;
			}

			.start::before,
			.end::after {
				content: "";
				position: absolute;
				width: 10rpx;
				height: 10rpx;
				background-color: #333;
				bottom: 0;
			}

			.end::after {
				right: 0;
			}
		}

		.info-key {
			padding: 30rpx;
			font-weight: 700;
		}

		.info-img {
			image {
				width: 750rpx;
				height: 650rpx;
			}
		}
	}
</style>
