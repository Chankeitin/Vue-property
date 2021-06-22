<template>
	<view class="container">
		<view class="commit">
			<text>发布</text>
		</view>
		<view class="box">
			<textarea class="context" value="" placeholder="如果对物业app有什么意见或建议,请告诉我们.如有房屋质量,物业服务问题,请直接联系管家..." />
		</view>
		<view class="picture">
			<text>上传照片</text>
		</view>
		<view class="upload">
			<uni-file-picker
			    v-model="imageValue" 
			    fileMediatype="image" 
			    mode="grid" 
			    @select="select" 
			    @progress="progress" 
			    @success="success" 
			    @fail="fail" 
			/>
		</view>
		<view class="explain">
			<navigator url="../explain/explain" open-type="navigate" hover-class="other-navigator-hover">
				<text>常见问题解答 >>></text>
			</navigator>
			 
		</view>
	</view>
</template>

<script>
export default {
        data() {
            return {
							imageValue:[]
            }
        },
        methods:{
            // 获取上传状态
            select(e){
                console.log('选择文件：',e)
            },
            // 获取上传进度
            progress(e){
                console.log('上传进度：',e)
            },

            // 上传成功
            success(e){
                console.log('上传成功')
            },

            // 上传失败
            fail(e){
                console.log('上传失败：',e)
            } 
 
 
        },
 
}
</script>

<style lang="scss">
	// .title {
	// 	padding: 40rpx 20rpx;
	// 	font-weight: 700;
	// 	font-size: 50rpx;
	// }
	.container {
		height: 100vh;
		overflow: hidden;
		background-color: rgb(249, 249, 249);
		.commit {
			padding-left: 660rpx;
			margin: 20rpx 0px;
			color: red;
		}
		.box {
			margin: 40rpx 40rpx;
			background-color: white;
			border-radius: 30rpx;
			.context {
				padding: 20rpx 20rpx;
				
			}
         }
		 .picture {
		 	margin: 40rpx 20rpx;
		 	text {
		 		padding-left: 20rpx;
		 	}
 
		}
		.upload {
			padding-left: 20rpx;
			padding-top: 30rpx;
			height: 300rpx;
			background-color: white;
			uni-file-picker {
				padding: 10rpx auto;
			}
		}
		.explain {
			padding: 40rpx 40rpx;
			color: red 
		}
	}
</style>