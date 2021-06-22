<template>
	<view class="social-activities">
		<view class="top">
			<text class="title">社区活动</text>
			<text class="tips">·好吃好喝好玩都在这</text>
		</view>

		<scroll-view scroll-x>
			<view class="scroll-box">
				<view class="box" v-for="(item, index) in list" :key="index">
					<image :src="item.img"></image>
					<view class="mid">
						<view class="mid-left">
							<view class="dateD">{{item.dateD}}</view>
							<view class="dateM">{{item.dateM}}</view>
						</view>
						<view class="mid-right">
							<view class="title">{{item.title}}</view>
							<view class="location">{{item.location}}</view>
							<view class="time">{{item.time}}</view>
						</view>
					</view>
				<view class="bottom">
					<view class="peopleNum">
						{{item.peopleNum}}
					</view>
					<button>去参与</button>
				</view>
				</view>
			</view>

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: null,
				list: [{
						img: require("../../../static/index/socialActivities/first.jpg"),
						title: '5.1大放价8折,深度清洗空调',
						location: '万科城',
						time: '报名截止:2021年05月31日',
						dateD: 2,
						dateM: '五月',
						peopleNum: '快来参加哦'
					},
					{
						img: require('../../../static/index/socialActivities/second.jpg'),
						title: '专业维修空调,拆装空调,加雪种',
						location: '万科城南庄周边上门服务',
						time: '报名截止:2021年06月08日',
						dateD: 10,
						dateM: '五月',
						peopleNum: '快来参加哦'
					},
					{
						img: require('../../../static/index/socialActivities/third.jpg'),
						title: '回收家电各类电器',
						location: '万科城',
						time: '报名截止:2021年05月31日',
						dateD: 6,
						dateM: '六月',
						peopleNum: '快来参加哦'
					},
				]
			}
		},
		created() {

		},
		methods: {}
	}
</script>

<style scoped lang="scss">
	.social-activities {
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

		scroll-view {
			.scroll-box {
				display: flex;

				.box {
					width: 500rpx;
					margin-left: 20rpx;
					border: 2rpx solid rgba(0, 0, 0, .1);
					// border: 1px solid #00ff00;

					image {
						width: 500rpx;
						height: 200rpx;
					}

					.mid {
						display: flex;
						margin-top: 20rpx;
						padding: 20rpx;
						border-bottom: 2rpx solid rgba(0, 0, 0, .2);

						.mid-left {
							margin-left: 10rpx;

							.dateD {
								font-weight: 700;
								font-size: 50rpx;
							}

							.dateM {
								font-size: 18rpx;
							}
						}

						.mid-right {
							margin-left: 40rpx;
							.title {
								width: 380rpx;
								font-weight: 700;
								font-size: 36rpx;
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
							}

							.location, .time {
								color: #999999;
							}

						}
					}
					
					.bottom {
						display: flex;
						text-align: center;
						height: 96rpx;
						
						.peopleNum {
							margin-left: 20rpx;
							line-height: 96rpx;
							color: #999;
						}
						
						button {
							width: 160rpx;
							height: 60rpx;
							margin-top: 20rpx;
							margin-right: 20rpx;
							line-height: 60rpx;
							border: 1px solid #FF0000;
							border-radius: 40rpx;
							font-size: 28rpx;
							color: #FF0000;
							
						}
					}
				}
			}
		}
	}
</style>
