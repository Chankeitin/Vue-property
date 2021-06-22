<template>
	<view v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
		<view class="user-evaluate">
			<text class="evalute">用户评价</text>
			<text class="more">更多></text>
		</view>
		<view class="top">
			<image :src="commentInfo.user.avatar"></image>
			<text class="user-name">{{commentInfo.user.uname}}</text>
		</view>

		<view class="mid">
			<text>{{commentInfo.content}}</text>
		</view>

		<view class="bottom">
			<text class="date">{{commentInfo.created | showDate}}</text>
			<text>{{commentInfo.style}}</text>
		</view>
	</view>
</template>

<script>
	import {
		formatDate
	} from '../../../common/formatDate.js'
	export default {
		data() {
			return {

			}
		},

		props: {
			commentInfo: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		filters: {
			showDate(value) {
				let date = new Date(value * 1000);
				return formatDate(date, "yyyy-MM-dd hh:mm:ss");
			},
		},
		methods: {

		},
		// watch: {
		// 	commentInfo() {
		// 		console.log(this.commentInfo);
		// 	}
		// }

	}
</script>

<style scoped lang="scss">
	.comment-info {
		border-bottom: 3px solid rgba(0,0,0,.1);
		padding-bottom: 60rpx;
		.user-evaluate {
			position: relative;
			margin-top: 60rpx;
			padding-bottom: 20rpx;
			border-bottom: 2px solid rgba(0, 0, 0, .1);

			.evalute {
				font-size: 36rpx;
				font-weight: 700;
			}

			.more {
				position: absolute;
				right: 10rpx;
				font-weight: 700;
			}
		}

		.top {
			position: relative;
			margin-top: 40rpx;

			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				margin-left: 16rpx;
			}

			.user-name {
				position: absolute;
				top: 36rpx;
				left: 140rpx;
			}
		}

		.mid {
			padding: 10rpx;
		}

		.bottom {
			font-size: 28rpx;
			color: #999;
			padding: 20rpx 0 0 10rpx;
			.date {
				padding-right: 20rpx;
			}
		}
	}
</style>
