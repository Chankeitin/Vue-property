<template>
	<view class="container">
		<view class="message" v-for="(item,index) in iconList" :key="index">
			<view class="user">
				<view class="context1">
					<image class="img" :src="item.avatar" mode=""></image>
					<text>{{item.username}}</text>
				</view>
				<view class="context2">
					<view class="">
						<text>{{item.comments}}</text>
					</view>
					<view v-show="item.picture != 'null' && item.picture != null " class="">
						<image style="margin-top: 20rpx;" :src="item.picture" mode=""></image>
					</view>
				</view>
				<view class="context3">
					<text>{{item.createTime}}</text>
				</view>
				<view style=" " :key="index"
					v-show="check(item,index)" class="">
					<view class="chlid" v-for="(item,index) in childlist">
						<image class="chlid_img test" :src="item.avatar" mode=""></image>
						<text class="chlid_test">{{item.comments}}</text>
					</view>

				</view>
			</view>

		</view>
	</view>

</template>

<script>
	export default {

		props: ['iconList'],
		data() {
			return {
				childavatar: '',
				childcomments: '',
				childlist: [],
				list: [{
						id: 0,
						url: '',
						name: 'Danny',
						address: '珠海红树海岸'
					},
					{
						id: 1,
						url: '',
						name: 'Danny',
						address: '珠海红树海岸'
					},
					{
						id: 2,
						url: '',
						name: 'Danny',
						address: '珠海红树海岸'
					},
				]
			}
		},
		methods: {
			getIcon() {
				this.$emit("getIcon");
			},
			check(item, index) {
				if (item.childComment != null) {
					this.childlist = item.childComment
					console.log("11")
					console.log(this.childlist)
					return true;
				} else {
					return false;
				}
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: 200rpx;
	}

	.button {
		width: 50rpx;
		height: 50rpx;
	}

	.img {
		width: 50rpx;
		height: 50rpx;
		border-radius: 50rpx;
	}

	.message {}

	.user {
		width: 100%;
		height: auto;
		background-color: white;
		margin: 50rpx auto;
		border: 1px solid #eee;
		border-radius: 20rpx;

	}

	.context1 {
		padding: 10rpx 20rpx;
	}

	.context2 {
		font-size: 16px;
		margin: 30rpx 20rpx;
	}

	.context3 {
		font-size: 5px;
		margin: 50rpx 20rpx 0 380rpx;
		color: rgb(141, 141, 141);
	}
	.chlid {
		width: 600rpx;
		height: 100rpx;
		/* background-color:  ; */
	}
	.chlid_img.test{
		width: 50rpx;
		height: 50rpx;
		border-radius: 50rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}
	.chlid_test {
		padding-left: 10rpx;
		/* padding-bottom: 20rpx; */
	}
 
</style>
