<template>
	<view class="">
		<view class="title">
			用户权益专区
		</view>
		<view class="img">
			<image @click="goUsersright(url)" style="width: 100%;height: 300rpx;" src="../../static/test/用户权益.jpg" mode=""></image>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				url: 'usersright/usersright'
			}
		},

		methods: {
			goUsersright(url) {
				this.$emit('goUsersright',url);
			}
		}
	}
</script>

<style>
	.title {
		font-weight: 700;
		font-size: 32rpx;
		margin-left: 30rpx;
	}
</style>
