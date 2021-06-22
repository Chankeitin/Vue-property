<template>
	<view>
		<view class="title">
			<text>通知设置</text>
		</view>
<!-- <switch  color="red" width="200rpx" checked @change="switch1Change" /> -->
		<view class="category">
			社区消息设置
		</view>
		<view class="block">
			<view class="function">
				系统推荐消息 
				<switch  color="red" width="200rpx" checked @change="switch1Change" />
			</view>
			<view class="word">
				打开后可收到新邻居加入和邻居推荐类消息
			</view>
		</view>
		<view class="block">
			<view class="function">
				活动消息
				 <switch  color="red" width="200rpx" checked @change="switch1Change" />
			</view>
			<view class="word">
				打开后可收到社区活动相关消息
			</view>
		</view>
		<view class="block">
			<view class="function">
				友两手消息
				 <switch  color="red" width="200rpx" checked @change="switch1Change" />
			</view>
			<view class="word">
				打开后可收到友两手留言消息
			</view>
		</view>
		<view class="block">
			<view class="function">
				帖子相关消息
				 <switch  color="red" width="200rpx" checked @change="switch1Change" />
			</view>
			<view class="word">
				打开后可收到帖子评论，回复，点赞类消息
			</view>
		</view>
		<view class="category">
			消息中心设置
		</view>
		<view class="block">
			<view class="function">
				精选活动消息
				 <switch  color="red" width="200rpx" checked @change="switch1Change" />
			</view>
			<view class="word">
				打开后可收到友邻市集精选活动消息
			</view>
		</view>
	</view>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        switch1Change: function (e) {
            console.log('switch1 发生 change 事件，携带值为', e.target.value)
        },
        switch2Change: function (e) {
            console.log('switch2 发生 change 事件，携带值为', e.target.value)
        }
    }
}
</script>

<style lang="scss">
	.title {
		padding: 40rpx 20rpx;
		font-weight: 700;
		font-size: 50rpx;
	}
	.category {
		height: 100rpx;
		padding: 40rpx 40rpx;
		background-color: #eee;
		font-size: 30rpx;
		color: rgb(144, 144, 144);
	}
	.block {
		border-bottom: 2rpx solid #EEEEEE;
		.function {
			position: relative;
			padding: 40rpx 40rpx;
			font-size: 40rpx;
			font-weight: 400;
			switch {
				 position: absolute;
				 right: 10rpx;
				 zoom:.8;
			}
		}
		.word {
			padding-left: 40rpx;
			padding-bottom: 40rpx;
			font-size: 30rpx;
			color: rgb(144,144,144);
		}
	}
 
</style>