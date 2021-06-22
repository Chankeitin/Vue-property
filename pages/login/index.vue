<template>
	<view class="">
		<view  class="block">
		    <el-carousel height="350px">
		      <el-carousel-item v-for="(item,index) in imgList" :key="index">
						<image class="img" :src="item.url" mode=""></image>
		      </el-carousel-item>
		    </el-carousel>
		  </view >
		<view class="action">
			<view class="login">
				<el-button class="button" @click="gotoLogin()" type="primary" plain>登录账号</el-button>
			</view>
			<view class="register">
				<el-button class="button" @click="gotoRegister()" type="success" plain>账号注册</el-button>
			</view>	
		</view>
 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [
					{
						url: require('../../static/index/cover/1.jpg')
					},
					{
						url: require('../../static/index/cover/2.jpg')
					},
					{
						url: require('../../static/index/cover/3.jpg')
					},
					{
						url: require('../../static/index/cover/4.jpg')
					}
				]
			}
		},
		methods: {
			gotoLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			},
			gotoRegister() {
				uni.navigateTo({
					url: '/pages/login/register'
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	  .el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 150px;
	    margin: 0;
	  }
	.block {
		height: 900rpx;
	}
	  .el-carousel__item:nth-child(2n) {
	     // background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	     // background-color: #d3dce6;
	  }
	.img {
		width: 750rpx;
		height: 800rpx; 
	}
	// .login {
	// 	.button {
 
	// 	}
	// }
	.register {
		.button {
		margin-left: 60rpx;
		}
	}
	.action {
		display: flex;
		margin-left: 140rpx;
	}
</style>
