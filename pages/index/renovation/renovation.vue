<template>
	<view class="discover">

		<!--    TabBar-->
		<view class="foot-tab-bar">
			<button class="cancel-button">取消</button>
			<button class="next-step-button">下一步</button>
		</view>
		<view class="page-section">
			<!--      滚动页面-->
			<view class="page-section-spacing">
				<scroll-view class="scroll-view" scroll-y="true">
					<text class="form-title">登记信息</text>
					<view class="input-container">
						<input class="title-input form-input" type="text" placeholder="请输入装修名称" focus />
						<input class="team-input form-input" type="text" placeholder="请输入购买名称" focus />
						<input class="teacher-name-input form-input" type="text" placeholder="装修团队名称" focus />
						<input class="teacher-company-input form-input" type="text" placeholder="装修团队所在单位" focus />
					</view>

					<view class="more-author-container" v-for="(item, index) of moreAuthor" :key="index">
						<view class="more-author-top">
							<text class="more-author-number">装修者{{ index+1 }}</text>
							<view class="more-author-delete" @tap="deleteAuthorClick">删除</view>
						</view>
						<view class="more-author-input-container">
							<view class="more-author-short-input-container">
								<input v-model="moreAuthor.name" class="more-author-input form-input" type="text"
									placeholder="请输入装修者名称" focus />
								<input v-model="moreAuthor.schoolNumber" class="more-author-input form-input"
									type="text" placeholder="请输入装修者联系方式" focus />
								<input v-model="moreAuthor.college" class="more-author-input form-input" type="text"
									placeholder="请输入装修者单位" focus />
								<input v-model="moreAuthor.major" class="more-author-input form-input" type="text"
									placeholder="请输入作者专业" focus />
							</view>
							<input v-model="moreAuthor.telephoneNumber" class="author-telephone-input form-input"
								type="text" placeholder="请输入装修者联系方式" focus />
						</view>
					</view>

					<!--          添加作者按钮-->
					<view class="add-author-container" @tap="addAuthorClick">
						<view class="add-author-icon"></view>
						<text class="add-author-text">添加装修者</text>
					</view>

				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				moreAuthor: [],
			}
		},
		methods: {
			// 添加作者
			addAuthorClick() {
				this.moreAuthor.push({});
			},
			// 删除作者
			deleteAuthorClick() {
				this.moreAuthor.pop();
			}
		}
	}
</script>

<style scoped lang="scss">
	//TabBar
	.foot-tab-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #EAFFEA;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 98px;
		width: 100%;
		box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.13);
		border-radius: 28px 28px 0px 0px;
		z-index: 1;
	}


	.cancel-button {
		width: 129px;
		height: 48px;
		background: #007AFF;
		opacity: 1;
		border-radius: 100px;
		color: #EEEEEE;
		margin-right: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		line-height: 28px;
	}

	.next-step-button {
		width: 177px;
		height: 48px;
		opacity: 1;
		border-radius: 100px;
		background-color: #63A35C;
		color: #EEEEEE;
		margin-right: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		line-height: 28px;
	}


	.page-section {
		width: 100%;
		height: 100vh;
	}

	//整体页面
	.discover {
		background-color: #E5E5E5;
	}

	.page-section-spacing {
		margin-top: 0;
		text-align: center;
		height: 107px;
	}

	.scroll-view {
		height: 100vh;
		max-height: 300vh;
		width: 344px;
		margin-left: 50%;
		transform: translate(-50%);
		overflow: scroll;
		margin-bottom: 108px;
	}


	.step-show {
		margin-top: 103px;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 100% 100%;
		margin-left: 50%;
		transform: translate(-50%);
		width: 92px;
		height: 20px;
	}

	.form-title {
		width: 100%;
		height: 28px;
		font-size: 20px;
		font-weight: bold;
		line-height: 28px;
		color: #000000;
		text-align: left;
		margin-top: 18px;
		display: block;
	}

	.competition-information-container {
		height: 40px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
		margin-top: 16px;

		.competition-information {
			flex: 1;
			height: 100%;
			background: #E4E4E4;
			box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.16);
			opacity: 1;
			border-radius: 10px;
			font-size: 16px;
			font-weight: 400;
			line-height: 22px;
			color: #000000;
			padding-top: 9px;
			box-sizing: border-box;
		}

		.competition-information:nth-child(2) {
			margin-left: 19px;
		}
	}


	//共同表单样式
	.form-input {
		height: 40px;
		background: #FFFFFF;
		box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.16);
		opacity: 1;
		border-radius: 10px;
		text-align: left;
		padding-left: 16px;
		box-sizing: border-box;
		margin-top: 12px;
	}

	.input-container {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		.title-input {
			width: 340px;
		}

		.team-input {
			width: 340px;
		}

		.teacher-name-input {
			width: 184px;
		}

		.teacher-company-input {
			width: 340px;
		}
	}

	.tip-container {
		width: 100%;
		height: 14px;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-content: center;
		margin-top: 14px;

		.tip-icon {
			width: 15px;
			height: 15px;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			background-position: center center;
			text-align: center;
			margin-left: 11px;
		}

		.tip {
			height: 14px;
			font-size: 10px;
			font-weight: 400;
			line-height: 14px;
			color: #C93B3B;
			margin-left: 2px;
		}
	}

	.add-author-container {
		margin-top: 20px;
		height: 30px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-content: flex-start;

		.add-author-icon {
			width: 30px;
			height: 30px;
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 100% 100%;
			border-radius: 50%;
		}

		.add-author-text {
			height: 25px;
			font-size: 18px;
			font-weight: bold;
			line-height: 25px;
			color: #FEB70F;
			margin-left: 10px;
		}
	}

	.more-author-container {
		margin-top: 23px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		.more-author-top {
			width: 100%;
			height: 24px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-content: center;

			.more-author-number {
				height: 24px;
				font-size: 17px;
				font-weight: bold;
				line-height: 24px;
				color: #000000;
			}

			.more-author-delete {
				font-size: 16px;
				font-weight: 400;
				line-height: 22px;
				color: #C93B3B;
			}
		}

		.more-author-input-container {
			width: 100%;
			margin-top: 6px;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;

			.more-author-short-input-container {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				flex-wrap: wrap;

				.more-author-input {
					width: 164px;
				}
			}

		}


	}
</style>
