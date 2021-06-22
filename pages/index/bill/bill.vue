<template>
 <view class="bill">
  <view class="top">
   <view class="top-left">
    <view class="bill-title">缴费账单</view>
    <view class="bill-location">佛山万科城服务中心</view>
   </view>
   <view class="top-right">
    <button>预缴充值</button>
    <button>自动缴费</button>
   </view>
  </view>
  <view class="hide">
   <text class="tips">该功能需要确认身份后才能使用，现在选择吗？</text>
   <button  type="warn">去通知</button>
  </view>
 </view>
</template>

<script>
 export default {
  data() {
   return {
			
   };
  }
 }
</script>

<style scoped lang="scss">
 .bill {
  .top {
   display: flex;
   margin-top: 20rpx;
   border-bottom: 1px solid rgba(0, 0, 0, .1);
   padding-bottom: 30rpx;

   .top-left {
    margin-left: 20rpx;
    .bill-title {
     font-weight: 700;
     font-size: 48rpx;
    }

    .bill-location {}
   }
   .top-right {
    display: flex;
    margin-left: 50rpx;

    button {
     position: relative;
     right: -60rpx;
     bottom: -70rpx;
     width: 160rpx;
     height: 50rpx;
     margin-left: 20rpx;
     line-height: 50rpx;
     font-size: 20rpx;
     border: 1px solid #000000;
     border-radius: 30rpx;
    }
   }
  }
  
  .hide {
   width: 100%;
   height: calc(100vh - 132rpx);
   text-align:center;
   .tips {
    position: relative;
    margin: 0 auto;
    top: 50%;
   }
   
   button {
    position: relative;
    width: 160rpx;
    height: 50rpx;
    font-size: 20rpx;
    line-height: 50rpx;
    margin: 0 auto;
    top: 50%;
   }
  }
 }
</style>

	<view>
		缴费账单
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">

</style>

