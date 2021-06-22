<template>
	<view class="container1">
		<view class="container2">
			<tag class="tag" @getIndex1="getIndex1" @getIndex2="getIndex2"></tag>
		</view>
		<view class="container3">
			<scroll-view scroll-y>
				<speech class="message" @getIcon="getIcon()" :iconList="iconList"></speech>
			</scroll-view>
		</view>

		<view class="lab">
			<unifab class="uni-fab" :content="content" :pattern="pattern" :horizontal="horizontal" :vertical="vertical"
				:direction="direction" @trigger="trigger"></unifab>
		</view>

	</view>
</template>

<script>
	import tag from '../../components/tag/tag.vue'
	import speech from '../../components/speech/speech.vue'
	import axios from 'axios'
	import unifab from '../../components/uni-fab/uni-fab.vue'
	export default {
		components: {
			tag,
			speech,
			unifab
		},
		data() {
			return {
				index1: 0,
				index2: -1,
				tagIndex: 0,
				iconList: [],
				allList: [],
				adresstrue: [],
				adressfalse: [],
				// url: 'mine/post/post',
				content: [{
					iconPath: '../../static/society/发布的帖子.png',
					text: '发布帖子',
					details: '与邻居分享心情，分享见闻'
				}, {
					iconPath: '../../static/society/帮助.png',
					text: '发布帮助',
					details: '闲置物品，邻里交易更放心'

				}, {
					iconPath: '../../static/society/活动.png',
					text: '发布活动',
					details: '和邻居相约，热闹非凡'

				}],
				pattern: {
					color: '#000000',
					selectedColor: '#007AFF',
					backgroundColor: '#ffffff',
					buttonColor: 'rgb(233, 125, 122)'
				},
				vertical: 'bottom',
				horizontal: 'right',
				direction: 'vertical'

			}
		},
		onLoad() {
			this.getMessage(this.tagIndex)
		},
		methods: {
			getMessage(tagIndex) {
				axios
					.get('http://localhost:8001/comment/getCommentList', {
						params: {
							tagId: tagIndex,
						},

					}).then((response) => {
						this.allList = response.data.data.CommentList;
						this.iconList = this.allList 
						console.log(this.iconList) 
						console.log(response.data.data.CommentList) 
						if(response.data.code === 200 && window.sessionStorage.getItem('username')){
							this.$message.success('获取社区评论列表成功')
						}
						else {
							this.$message.error('暂无权限，请先登录')
						}
						// uni.showToast({
						// 	title: response.data.message,
						// 	duration: 2000
						// });
					})
					.catch(function(error) {
						this.$message.error('获取评论列表失败')
					});
			},

			getIndex1(index) {
				this.index1 = index
				this.getList(this.index1,this.index2)	
				console.log(this.iconList.length)
			},
			getIndex2(index) {
				this.index2 = index
        this.getList(this.index1,this.index2)
				console.log(this.iconList.length)
			},
			getList(index1,index2) {
				if(index1 === 0 && index2 === -1){
					this.iconList = this.allList 
				}
				if(index1 === 0 && index2 === 0){
					this.iconList = this.allList.filter(item => item.commentAddress  === false)
				}
				if(index1 === 0 && index2 === 1){
					this.iconList = this.allList.filter(item => item.commentAddress  === true)
				}
				if(index1 === 1 && index2 === -1){
					this.iconList = this.allList.filter(item => item.tagId === 1)
					console.log(this.iconList.length)
				}
				if(index1 === 1 && index2 === 0){
					this.iconList = this.allList.filter(item => item.tagId === 1 && item.commentAddress  === false)
				}
				if(index1 === 1 && index2 === 1){
					this.iconList = this.allList.filter(item => item.tagId === 1 && item.commentAddress  === true)
				}
				if(index1 === 2 && index2 === -1){
					this.iconList = this.allList.filter(item => item.tagId === 2)
				}
				if(index1 === 2 && index2 === 0){
					this.iconList = this.allList.filter(item => item.tagId === 2 && item.commentAddress  === false)
				}
				if(index1 === 2 && index2 === 1){
					this.iconList = this.allList.filter(item => item.tagId === 2 && item.commentAddress  === true)
				}
				if(index1 === 3 && index2 === -1){
					this.iconList = this.allList.filter(item => item.tagId === 3)
				}
				if(index1 === 3 && index2 === 0){
					this.iconList = this.allList.filter(item => item.tagId === 3 && item.commentAddress  === false)
				}
				if(index1 === 3 && index2 === 1){
					this.iconList = this.allList.filter(item => item.tagId === 3 && item.commentAddress  === true)
				}
				if(index1 === 4 && index2 === -1){
					this.iconList = this.allList.filter(item => item.tagId === 4)
				}
				if(index1 === 4 && index2 === 0){
					this.iconList = this.allList.filter(item => item.tagId === 4 && item.commentAddress  === false)
				}
				if(index1 === 4 && index2 === 1){
					this.iconList = this.allList.filter(item => item.tagId === 4 && item.commentAddress  === true)
				}
			},
			trigger(e) {
				// console.log(e)
				// let other = this.content.map((d, i) => {
				//    d.active = i== e.index
				// }) //改变悬浮按钮中内容的状态是否为选定
				
        //页面显示用户选择的功能
				if(window.sessionStorage.getItem('username')){
					this.$message.success('选择'+ this.content[e.index].text+'成功')
					setTimeout(function() {
						if (e.index === 0) {
							uni.navigateTo({
								url: '/pages/mine/post/post'
							})
						} else if (e.index === 1) {
							uni.navigateTo({
								url: '/pages/mine/friendHands/friendHands'
							})
						} else {
							uni.navigateTo({
								url: '/pages/mine/activities/activities'
							})
						}
					}, 1000)
				}
				else{
					this.$message.error('暂无权限，请先登录')
				}
 


			}
		}
	}
</script>

<style scoped lang="scss">
	.container1 {
		height: 100vh;
		overflow: hidden;
		background-color: #eee;

		.container2 {
			height: 200rpx;
			margin: 20rpx 20rpx;
			background-color: white;
			border-radius: 20rpx;
		}

		.container3 {
			height: auto;
			margin: 20rpx 20rpx;
			background-color: white;
			border-radius: 20rpx;

			// padding-bottom: 200rpx;
			scroll-view {
				height: 100vh;
				margin-bottom: 200rpx;
			}

			.message {
				margin: 0 20rpx;
			}

		}


		.lab {
			height: 300rpx;
			color: red;
			background-color: #E5E5E5;
			// .uni-fab {
			// 	width: 400rpx;
			// 	height: 200rpx;
			// }
		}


	}
</style>
