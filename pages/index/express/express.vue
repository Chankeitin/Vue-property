<template>
	<view class="discover">
		<view class="page-section">
			<!--      滚动页面-->
			<view class="page-section-spacing">
				<scroll-view class="scroll-view" scroll-y="true">

					<view class="classification-containers">
						<view class="option-button button-hover">收件</view>
						<view class="option-button" @click="outSchoolClick">寄件</view>
					</view>

					<view class="competition-list-container">
						<view class="competition-list-item" v-for="item in competitionList"
							@click="toCompetitionDetail">
							<view class="competition-theme-picture"></view>
							<view class="competition-theme-text-container">
								<text class="competition-theme-title">{{ item.title }}</text>
								<text class="competition-theme-content">{{ item.content }}</text>
								<text class="competition-theme-deadline">签收时间：{{ item.deadline }}</text>
								<text class="competition-theme-organizer">{{ item.organizer }}</text>
								<button v-if="item.state == 'started'"
									class="sign-up-enter-button sign-up-button">签收</button>
								<button v-if="item.state == 'notStart'"
									class="not-started-button sign-up-button">物流</button>
								<button v-if="item.state == 'over'" class="over-button sign-up-button">已签收</button>
							</view>
						</view>
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
				competitionList: [{
						title: '派送中',
						content: '耳机耳机索尼耳机',
						deadline: '2020-12-02',
						organizer: '百世快递',
						state: 'started'
					},
					{
						title: '运输中',
						content: '饼干饼干',
						deadline: '2020-09-08',
						organizer: '顺丰快递',
						state: 'notStart'
					},
					{
						title: '已签收',
						content: '鸭脖鸭脖全是肉很好吃',
						deadline: '2020-04-20',
						organizer: '顺丰快递',
						state: 'over'
					},
					{
						title: '派送中',
						content: '零食大礼包',
						deadline: '2020-12-02',
						organizer: '顺丰快递',
						state: 'started'
					},
					{
						title: '派送中',
						content: '晚上吃什么吃什么',
						deadline: '2020-12-02',
						organizer: '顺丰快递',
						state: 'started'
					},
					{
						title: '运输中',
						content: '吃什么',
						deadline: '2020-09-08',
						organizer: '顺丰快递',
						state: 'notStart'
					},
					{
						title: '已签收',
						content: '黄焖鸡米饭怎么样',
						deadline: '2020-04-20',
						organizer: '顺丰快递',
						state: 'over'
					},
					{
						title: '派送中',
						content: '鞋子鞋子帆布鞋',
						deadline: '2020-12-02',
						organizer: '顺丰快递',
						state: 'started'
					},
				]
			}
		},
		methods: {}
	}
</script>

<style scoped lang="scss">
	.page-section {
		width: 100%;
		height: 100vh;
	}

	//整体页面
	.discover {
		background-color: #B3D4FC;
	}

	.page-section-spacing {
		margin-top: 0;
		text-align: center;
		height: 98px;
	}

	.scroll-view {
		height: 100vh;
		width: 347px;
		margin-left: 50%;
		transform: translate(-50%);
		margin-bottom: 87px;
	}


	.classification-containers {
		width: 100px;
		height: 30px;
		background: #E4E4E4;
		border-radius: 15px;
		margin-top: 14px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		.option-button {
			width: 50%;
			height: 100%;
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			color: #999999;
			padding-top: 5px;
			box-sizing: border-box;
		}

		.button-hover {
			background-color: #FEB70F;
			color: #EEEEEE;
			border-radius: 15px;
		}
	}

	.competition-list-container {
		width: 100%;
		height: auto;
		background-color: #EEEEEE;
		margin-top: 2px;

		.competition-list-item:nth-child(1)>.competition-theme-picture {
			background-image: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1974241114,2429780454&fm=11&gp=0.jpg");
		}

		.competition-list-item:nth-child(2)>.competition-theme-picture {
			background-image: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1274625248,606904352&fm=26&gp=0.jpg");
		}

		.competition-list-item:nth-child(3)>.competition-theme-picture {
			background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgx.xiawu.com%2Fxzimg%2Fi4%2Fi3%2FT1S5_9FMBcXXXXXXXX_%21%210-item_pic.jpg&refer=http%3A%2F%2Fimgx.xiawu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625466511&t=18e89faa8d21db50d5cda3d9ede60e68");
		}

		.competition-list-item:nth-child(4)>.competition-theme-picture {
			background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgw.alicdn.com%2Fimgextra%2Fi1%2F847961973%2FTB208bPaVXXXXa6XXXXXXXXXXXX-847961973.jpg&refer=http%3A%2F%2Fgw.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625466511&t=aae4a7320733c90ee88d809576be7307");
		}

		.competition-list-item:nth-child(5)>.competition-theme-picture {
			background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.t-chs.com%2FtuhsJDEwLmFsaWNkbi5jb20vaTQvMzMyNjM0NDAwOS9UQjJPekhMZXNMSjhLSmp5MEZuWFhjRkRwWGFfISEzMzI2MzQ0MDA5JDk.jpg&refer=http%3A%2F%2Fwww.t-chs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625466511&t=0a6bf3903f89e20432d606f96e4823b2");
		}

		.competition-list-item:nth-child(6)>.competition-theme-picture {
			background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F167%2Fw1046h721%2F20190205%2FzZdh-hsqyiwt4710036.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625466511&t=dc1cbd13559797bc33fda8ac6a6242ac");
		}

		.competition-list-item:nth-child(7)>.competition-theme-picture {
			background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft2191%2F225%2F1614574716%2F332651%2Fb1e75ef1%2F56cd1669N2634ed96.jpg%21q70.jpg&refer=http%3A%2F%2Fm.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625466511&t=afe81f0ae8273e1d8a4246740fc328d1");
		}

		.competition-list-item:nth-child(8)>.competition-theme-picture {
			background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi3.s1.dpfile.com%2Fpc%2Fb2ab01e34c2fcf3d4fd67b8d8d1fd7cd%28700x700%29%2Fthumb.jpg&refer=http%3A%2F%2Fi3.s1.dpfile.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625466650&t=1292cc34a2896b607c1ff9bf03cfbef5");
		}

		.competition-list-item {
			width: 347px;
			height: 151px;
			box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.11);
			border-radius: 10px;
			margin-top: 24px;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-content: center;

			.competition-theme-picture {
				background-repeat: no-repeat;
				background-position: center center;
				background-size: 100% 100%;
				width: 77px;
				height: 120px;
				border-radius: 5px;
				margin-left: 12px;
				margin-top: 16px;
			}

			.competition-theme-text-container {
				width: 205px;
				height: 110px;
				margin-left: 15px;
				margin-top: 17px;

				.competition-theme-title {
					height: 24px;
					font-size: 17px;
					font-weight: bold;
					line-height: 24px;
					color: #333333;
					display: block;
					text-align: left;
				}

				.competition-theme-content {
					height: 34px;
					font-size: 12px;
					font-weight: 400;
					line-height: 17px;
					color: #999999;
					overflow: hidden;
					display: block;
					text-align: left;
					margin-top: 5px;
				}

				.competition-theme-deadline {
					height: 14px;
					font-size: 12px;
					font-weight: bold;
					line-height: 14px;
					color: #333333;
					overflow: hidden;
					display: block;
					text-align: left;
					margin-top: 8px;
				}

				.competition-theme-organizer {
					height: 14px;
					font-size: 10px;
					font-weight: 400;
					line-height: 14px;
					color: #333333;
					overflow: hidden;
					display: block;
					text-align: left;
					margin-top: 4px;
				}
			}

			.sign-up-button {
				width: 65px;
				height: 23px;
				border-radius: 5px;
				font-size: 11px;
				font-weight: bold;
				line-height: 16px;
				margin-right: 0;
				box-sizing: border-box;
				padding-top: 4px;
				color: #FFFFFF;
			}

			.sign-up-enter-button {
				background: #FEB70F;
			}

			.not-started-button {
				background: #4F75B3;
			}

			.over-button {
				background: #D4D4D4;
			}
		}
	}
</style>
