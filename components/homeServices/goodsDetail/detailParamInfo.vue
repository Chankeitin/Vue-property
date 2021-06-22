<template>
	<view v-if="Object.keys(paramInfo).length !== 0" class="params-info">
		<view v-for="(table, tableindex) in paramInfo.sizes" class="params-sizes" :key="tableindex">
			<view class="tr" v-for="(tr, trindex) in table" :key="trindex">
				<view class="td" v-for="(td, tdindex) in tr" :key="tdindex">
					{{td}}
				</view>
			</view>
		</view>

		<view class="params-infos">
			<view class="tr" v-for="(tr, trindex) in paramInfo.infos" :key="trindex">
				<view class="td key">{{tr.key}}</view>
				<view class="td value">{{tr.value}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				valueStyle: {
					color: '#ff0000',
					width: '95px'
				}
			}
		},
		props: {
			paramInfo: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		methods: {

		},
		// watch: {
		// 	paramInfo() {
		// 		console.log(this.paramInfo);
		// 	}
		// }

	}
</script>

<style scoped lang="scss">
	.params-info {
		margin-top: 40rpx;
		border-top: 8rpx solid rgba(100, 100, 100, 0.1);

		.params-sizes {
			padding-top: 40rpx;

			.tr {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				border-bottom: 1px solid rgba(100, 100, 100, 0.1);

				.td {
					width: 40%;
					text-align: left;
					justify-content: center;
					border-bottom: 1px solid rgba(100, 100, 100, 0.1);
					// height: 84rpx;
					// line-height: 84rpx;
					font-weight: 700;
					padding-left: 10rpx;
				}
			}
		}

		.params-infos {
			margin-top: 40rpx;
			border-top: 1px solid rgba(0, 0, 0, 0.1);

			.tr {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				border-bottom: 1px solid rgba(100, 100, 100, 0.1);

				.td {
					text-align: left;
					justify-content: center;
					border-bottom: 1px solid rgba(100, 100, 100, 0.1);
					// height: 84rpx;
					// line-height: 84rpx;
					font-weight: 700;
					padding-left: 10rpx;
				}

				.key {
					width: 30%;
				}

				.value {
					width: 90%;
					color: #ff0000;

				}
			}


		}
	}
</style>
