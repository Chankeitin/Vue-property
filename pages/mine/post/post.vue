<template>
	<view class="">
		<view class="commit">
<!-- 			<select class="select" v-model="num" @click="getIndex(num)">
				<option v-for="(item,index) in taglist" :key="index">
					{{item.tagName}}
				</option>
			</select> -->
			<el-select style="width: 180rpx;height: 20rpx;margin: 20rpx 20rpx;" v-model="num" @click="getIndex(num)" placeholder="请选择">
				<el-option
					v-for="(item,index) in taglist"
					:key="index"
					:value="item.tagName">
				</el-option>
			</el-select>
			<text style="margin-left: 430rpx;font-size: 16px;" @click="commit">提交</text>
		</view>
		
		<view class="box">
			<el-input
			 class="context"
			 type="textarea"
			 :rows="10"
			 placeholder="请输入内容"
			 v-model="message">
			</el-input>
		</view>
		
		<view class="upload">
			<uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @select="select"
				@progress="progress" @success="success" @fail="fail" />

		</view>


	</view>
</template>

<script>
	import axios from 'axios'

		export default {
			data() {
				return {
					count: -1,
					num: '',
					userId: '',
					message: '',
					imageValue: [],
					taglist: [],
					value: ''
				}
			},
			created() {
				this.getlist()
			},
			methods: {
				getlist() {
					axios
						.get('http://localhost:8001/tag/allTag', {

						}).then((response) => {
							this.taglist = response.data.data.TagList
							console.log(this.taglist)
						}).catch(function(error) {
							console.log(error);
							this.$message.error('请求tag列表失败')
						});
				},
				commit() {
					this.taglist.forEach((item) => {
						if (item.tagName === this.num) {
							this.count = item.tagId
							console.log(this.count)
						}
					})
					console.log(this.count)
					console.log(this.message)
					console.log(this.userId)
					this.userId = window.sessionStorage.getItem('userId')
					axios
						.get('http://localhost:8001/comment/addComment', {
							params: {
								userId: this.userId,
								comments: this.message,
								tagId: this.count
							},

						}).then((response) => {
							console.log(response)
							this.$message.success('提交成功')
							setTimeout(() => {
								uni.switchTab({
									url: '../../society/society'
								})
							}, 2100)	

						}).catch(function(error) {
							console.log(error);
							this.$message.error('请求评论失败')
						});
				},
				getIndex(e) {
					console.log(e)
				},
				// 获取上传状态
				select(e) {
					console.log('选择文件：', e)
				},
				// 获取上传进度
				progress(e) {
					console.log('上传进度：', e)
				},

				// 上传成功
				success(e) {
					console.log('上传成功')
				},

				// 上传失败
				fail(e) {
					console.log('上传失败：', e)
				},


			},
}
</script>

<style scoped lang="scss">
	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}
	.el-icon-arrow-down {
		font-size: 12px;
	}
	.commit {
		height: 80rpx;
		margin: 20rpx 0px;
		color: red;
	}
	.box {
		height: 300rpx;
		margin: 10rpx 20rpx;
	}

	.context {
		padding-top: 40rpx;
	}

	.upload {
		padding-top: 200rpx;
		padding-left: 20rpx;
		padding-bottom: 20rpx;
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
