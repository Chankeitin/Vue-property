<template>
	<view class="">
		<view class="commit">
			<text>提交</text>
		</view>
		<view class="box">
			<textarea class="context" value="" placeholder="请输入问题详情,以便我们更好的处理" />
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
		<view class="getDate">
			<text>希望上门时间</text>
			<text style="padding-left:80rpx">日期:</text>
			<picker class="date" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				 <view class="uni-input">{{date}}</view>
			 </picker>
		 
			 <picker class="time"  mode="time" :value="time" start="8:00" end="18:00" @change="bindTimeChange">
				 <view class="uni-input">{{time}}</view>
			 </picker>
		</view>
</view>
</template>

<script>
export default {
        data() {
			const currentDate = this.getDate({
				format: true
			})
            return {
				flagTime: 0,
				flagDate: 0,
				array: ['中国', '美国', '巴西', '日本'],
				index: 0,
				date: '请选择日期',
				time: '请选择时间',
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
            },
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			bindDateChange: function(e) {
				console.log(e)
				this.date = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
			},
			getDate(type) {
				// this.flagTime++;
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;	
				// if(this.flagTime > 0){
				// 	return `${year}-${month}-${day}`;
				// }
				// else{
				// 	return "请选择日期";
				// }
					
			}
        },
    computed: {
        startDate() {
            return this.getDate('start');
        },
        endDate() {
            return this.getDate('end');
        }
    },
}
</script>

<style scoped lang="scss">
	.commit {
		padding-left: 660rpx;
		margin: 20rpx 0px;
		color: red;
	}
	.box {
		height: 300rpx;
		margin: 10rpx 20rpx;
		background-color: rgb(249, 249, 249);
		border-radius: 10rpx;
	}
	.context {
		padding: 10rpx 20rpx;
	}
	.upload {
		padding: 40rpx 20rpx;
		border-bottom: solid 1px #eee;
	}
	.getDate {
		display: flex;
		padding: 50rpx 20rpx;
		border-bottom: solid 1px #eee;
		.date {
			padding-left: 10rpx;
			.uni-input {
				color: rgb(150, 150, 150)
			}
		}
		.time {
			padding-left: 20rpx;
			.uni-input {
				color: rgb(150, 150, 150)
			}
		}
	}
</style>
