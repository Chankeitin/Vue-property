<template>
	<view class="crown">
		<scroll-view class="scroll" scroll-x>
			<view class="container">
				<view class="box">
					<image class="logo" style="width: 100rpx;height: 100rpx;" :src="avatar" mode=""></image>
					<view class="level">
						<view class="details">
							<image style="width: 100rpx;height: 100rpx;" :src="avatar" mode=""></image>
							<view class="word">
								<view class="currentlevel">银色皇冠</view>
								<view class="score">分值10/100</view>
								<view class="progress">
									<progress percent="10" active stroke-width="3" activeColor="red"/>
								</view>
							</view>
 
						</view>
						<view class="notice">
							<text class="tips">*解锁银色皇冠让你的头像与众不同</text>
						</view>
					</view>
					<view class="content">
						<view class="actions">
							<view class="meun">
								<text>跟邻居打个招呼</text>
								<text style="padding-left: 240rpx;color: red;">+10</text>
							</view>
						</view>
					</view>
				</view>
				<view class="box">
					<image class="logo" style="width: 100rpx;height: 100rpx;" :src="avatar" mode=""></image>
					<view class="level">
						<view class="details">
							<view class="wechat">
								<image :src="avatar" mode=""></image>
							</view>
						</view>
	 
					</view>
					<view class="content">
						<view class="actions">
							<view class="meun" v-for="(item,index) in list" :key='index'>
								<view class="title">
									{{item.key}}
								</view>
								<view class="">
									{{item.value}}
								</view>
							</view>
			 
						</view>
					</view>
				</view>
			</view>
			
		</scroll-view>
 	</view>
</template>

<script>
	export default {
		created() {
				this.avatar = window.sessionStorage.getItem('avatar');
		},
		data() {
			return {
				avatar: "../../../static/Jinx.jpg",
				list: [{
						key: '称呼',
						value: '游客',
					},{
						key: '地址',
						value: 'Bnuz校园',
					},{
						key: '身份',
						value: '待审核',
					},{
						key: '注册时间',
						value: '2021-04-28 09:58:23',
					},
				],
			}
		}
 }
	</script>
</script>

<style scoped lang="scss">
	.crown {
		padding: 0 20rpx;
	}
	.scroll {
		padding-right: 120rpx;
	}
	.container {
		display: flex;
	}
	.box {
		position: relative;
		margin: 100rpx 30rpx;
		width: 600rpx;
		height: 800rpx;
		// background-color: rgb(236, 198, 45);
		border: solid 2rpx  rgb(199, 199, 199);
		
		// rgb(209, 209, 209);
		border-radius: 10rpx;
		.logo {
			position: absolute;
			border-radius: 50rpx;
			top: -50rpx;
			left: 230rpx;
		}
		.level {
			width: 500rpx;
			height: 300rpx;
			margin: 60rpx 30rpx;
			border: solid 2rpx rgb(231, 231, 231);
			border-radius: 10rpx;
			.details {
				display: flex;
				// align-items: center;
				// justify-content: center。;
				padding: 50rpx 80rpx;
				.word {
					.currentlevel {
						padding-left: 60rpx;
						padding-bottom: 10rpx;
						font-size: 30rpx;
						font-weight: 600;
					}
					.score {
						padding-left: 60rpx;
						padding-bottom: 10rpx;
						font-size: 6px;
						color: rgb(231, 231, 231);
					}
					.progress {
						padding-left: 60rpx;
					}
				}

				.wechat {
					position: relative;
					image {
						position: absolute;
						top: -50rpx;
						left: 40rpx;
						width: 280rpx;
						height: 280rpx;
					}
				}
 
			}
			.notice {
				.tips {
					padding: 40rpx;
					font-size: 20rpx;
				}
			}
 
		}
		.content {
			.actions {
				.meun {
					display: flex;
					justify-content: space-between;
					margin-left: 30rpx;
					margin-top: 20rpx;
					padding-bottom: 20rpx;
					width: 500rpx;
					border-bottom: 2rpx solid rgb(209, 209, 209);
					.title {
						font-size: 30rpx;
						font-weight: 600;
					}
				}
			}
		}
	}
 
	
</style>
