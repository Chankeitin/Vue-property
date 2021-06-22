<template>
	<view class="map">
		<map :longitude="longitude" :latitude="latitude" :markers="markers">
		</map>
		<view class="info">
			<view class="location">
				地址: 北京师范大学珠海分校
			</view>
			<view class="phone">
				电话: 0086-756-3683393 <span style="font-size: 20rpx;margin-left: 30rpx;color: #b0b0b0" @click="call">点击此处拨打</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 113.544227,
				latitude: 22.355593,
				markers: [{
					longitude: 113.544227,
					latitude: 22.355593,
					iconPath: '../../../static/schoolLogo.jpg',
					width: 30,
					height: 30
				}]
			};
		},
		methods: {
			call() {
				uni.makePhoneCall({
					phoneNumber: '0086-756-3683393' 
				});
			}
		}
	}
</script>

<style lang="scss">
	.map {
		map {
			width: 100%;
			height: 900rpx;
		}

		.location,
		.phone {
			margin-top: 30rpx;
			font-size: 40rpx;
			font-weight: 700;
		}
		.info {
			margin-left: 60rpx;
		}
	}
</style>
