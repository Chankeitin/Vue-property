<template>
	<view class="sun-property">
		<view class="top">
			<text class="title">阳光物业</text>
			<text class="tips">·每周物业服务动态一目了然</text>
		</view>
		<view class="main">
			<scroll-view scroll-x>
				<view class="scroll-box"> 
					<view class="box" v-for="(item, index) in boxItem" 
					:key="index" 
					:style="{backgroundColor: item.backgroundColor, boxShadow: item.boxShadow}">
						<view class="box-top">
							<view class="title">{{item.title}}</view>
							<view class="small-title">{{item.smallTitle}}</view>
							<view class="score">{{item.score}}</view>
						</view>
						<button>{{item.btn}}</button>
					</view>
				</view>

			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				boxItem: [{
						title: '友邻计划',
						smallTitle: '募集金额/元',
						score: '39,710.56',
						btn: '查看详情',
						backgroundColor: 'rgb(242, 157, 154)',
						// boxShadow: '10rpx 20rpx 10rpx #FF5A5F'
					},
					{
						title: '公共资源收益',
						smallTitle: '收益结余/万元',
						score: '23.3',
						btn: '查看详情',
						backgroundColor: 'rgb(254, 207, 139)',
						// boxShadow: '10rpx 20rpx 10rpx #ffbf00'
					},
					{
						title: '品质服务',
						smallTitle: '服务满意度/分',
						score: '4.3',
						btn: '查看详情',
						backgroundColor: 'rgb(156, 175, 215)',
						// boxShadow: '10rpx 20rpx 10rpx #00ff7f'
					},
					{
						title: '设备保修',
						smallTitle: '完成保修/台',
						score: '232323',
						btn: '查看详情',
						backgroundColor: 'rgb(178, 173, 200)',
						// boxShadow: '10rpx 20rpx 10rpx #ffaaff'
					},
					{
						title: '上门维修',
						smallTitle: '服务满意度/分',
						score: '4.8',
						btn: '查看详情',
						backgroundColor: 'rgb(161, 200, 167)',
						boxShadow: '10rpx 20rpx 10rpx #00aaff'
					},
				],
			}
		}
	}
</script>

<style scoped lang="scss">
	.sun-property {
		margin-top: 30rpx;
		padding: 20rpx;
		background-color: #fff;
		border: 2rpx solid rgba(0, 0, 0, .1);

		.top {
			padding: 10rpx;

			.title {
				font-weight: 700;
				font-size: 32rpx;
			}

			.tips {
				margin-left: 20rpx;
				color: #999999;
				font-size: 24rpx;
			}
		}

		.main {
			margin-top: 10rpx;

			scroll-view {

				.scroll-box {
					display: flex;

					.box {
						width: 220rpx;
						height: 280rpx;
						margin-left: 20rpx;
						background-color: #FF5A5F;
						border-radius: 10rpx;
						text-align: center;
						padding: 20rpx;

						.box-top {
							height: 80%;
							color: #000;
							.title {
								font-size: 26rpx;
							}
							.small-title {
								margin-top: 10rpx;
								font-size: 20rpx;
							}

							.score {
								margin-top: 30rpx;
								color: #fff;
							}
						}

						button {
							width: 160rpx;
							height: 50rpx;
							line-height: 50rpx;
							font-size: 20rpx;
							// font-weight: 700;
							border-radius: 30rpx;
						}
					}




				}

			}

		}
	}
</style>
