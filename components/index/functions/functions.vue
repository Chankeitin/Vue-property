<template>
	<view class="functions">
		<view class="box" v-for="(item, index) in functions" :key="index" @click="goLink(item.url,index)">
			<view class="icon iconfont" :class="item.icon"></view>
			<view class="title">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				functions: [{
						icon: 'icon-_dayinxiaopiao',
						title: '账单',
						url: 'bill/bill'
					},
					{
						icon: 'icon-saoyisao',
						title: '扫一扫',
					},
					{
						icon: 'icon-fangkeyaoqingmdpi',
						title: '访客邀请',
						url: 'vistor/vistor'
					},
					{
						icon: 'icon-weixiu',
						title: '维修',
						url: 'repair/repair'
					},
					{
						icon: 'icon-shui',
						title: '送水',
						url: 'water/water'
					},
					{
						icon: 'icon-maimaiche',
						title: '我的车',
						url: 'car/car'
					},
					{
						icon: 'icon-kuaidichaxun',
						title: '快递查询',
						url: 'express/express'
					},
					{
						icon: 'icon-zhuangxiu',
						title: '装修登记',
						url: 'renovation/renovation'
					},
					{
						icon: 'icon-baoxiu',
						title: '房屋保修',
						url: 'guarantee/guarantee'
					},
					{
						icon: 'icon-qingli',
						title: '房屋清洁',
						url: 'clean/clean'
					},
				]
			};
		},
		methods: {
			goLink(url, index) {
				this.$emit('goLink',url,index);
			}
		}
	}
</script>

<style scoped lang="scss">
	.functions {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20rpx;
		background-color: #fff;

		.box {
			width: 120rpx;
			height: 120;
			border: 2rpx solid rgb(220, 220, 220);
			border-radius: 20rpx;
			text-align: center;
			margin-left: 20rpx;
			margin-top: 20rpx;

			.iconfont {
				font-size: 50rpx;
				margin-top: 10rpx;
			}

			.title {
				margin: 10rpx 10rpx;
				font-size: 25rpx;
				// font-weight: 550;
			}
		}
	}
</style>
