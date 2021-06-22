<template>
	<view class="notice">
		<scroll-view scroll-y>
			<view class="picture">
				<image style="width: 680rpx;height: 300rpx;" src="../../../static/test/物业公告.jpg" mode=""></image>
			</view>
			<view class="word-first">
				<text>
					【暴雨-橙色】 珠海市气象台于09月28日08时05分将香洲区暴雨黄色预警升级为橙色预警，请注意加强防御。

					管家温馨❤提示：
					请广大住户朋友们提高安全防范意识、做好防雨防风措施：
					1、计划出行的邻居，小心路滑，注意避开电线杆、广告牌、树下等危险区域；
					2、关闭门窗，以免大雨飘入室内；
					3、检查阳台地漏是否畅通、避免积水，检查阳台是否有易掉落杂物、衣服等；
					4、如遇雷电时请及时关闭家中电器的电源，防止雷击对家电造成损坏；
					5、请准备照明工具，以防备临时突发断电所需；
					6、请将您的车辆停放在高处，避免造成不必要的损失。

					如需帮助，请及时联系您的管家或致电24小时控制中心电话，我们一直在您身边。
					【暴雨-橙色】 珠海市气象台于09月28日08时05分将香洲区暴雨黄色预警升级为橙色预警，请注意加强防御。

					管家温馨❤提示：
					请广大住户朋友们提高安全防范意识、做好防雨防风措施：
					1、计划出行的邻居，小心路滑，注意避开电线杆、广告牌、树下等危险区域；
					2、关闭门窗，以免大雨飘入室内；
					3、检查阳台地漏是否畅通、避免积水，检查阳台是否有易掉落杂物、衣服等；
					4、如遇雷电时请及时关闭家中电器的电源，防止雷击对家电造成损坏；
					5、请准备照明工具，以防备临时突发断电所需；
					6、请将您的车辆停放在高处，避免造成不必要的损失。

					如需帮助，请及时联系您的管家或致电24小时控制中心电话，我们一直在您身边。
					【暴雨-橙色】 珠海市气象台于09月28日08时05分将香洲区暴雨黄色预警升级为橙色预警，请注意加强防御。

					管家温馨❤提示：
					请广大住户朋友们提高安全防范意识、做好防雨防风措施：
					1、计划出行的邻居，小心路滑，注意避开电线杆、广告牌、树下等危险区域；
					2、关闭门窗，以免大雨飘入室内；
					3、检查阳台地漏是否畅通、避免积水，检查阳台是否有易掉落杂物、衣服等；
					4、如遇雷电时请及时关闭家中电器的电源，防止雷击对家电造成损坏；
					5、请准备照明工具，以防备临时突发断电所需；
					6、请将您的车辆停放在高处，避免造成不必要的损失。

					如需帮助，请及时联系您的管家或致电24小时控制中心电话，我们一直在您身边。
				</text>
			</view>
			<view class="word-second">
				<text class="date">2020年09月28日 08:45</text>
				<text class="comment">评论</text>
			</view>
		</scroll-view>

		<view class="windows">
			<view class="personal-commnet">
				<image style="border-radius: 50rpx;width: 60rpx;height: 60rpx; " :src = "avatar" mode=""></image>
				<input style="color: rgb(141, 141, 141);
							margin-left: 20rpx;
							margin-top: 8rpx;
							font-size: 34rpx;
							border: rgb(223, 223, 223) 1rpx solid;
							border-radius: 20rpx;
							width: 600rpx;"
				 type="text" placeholder=" 评论..." />
			</view>
		</view>

	</view>

</template>

<script>
	export default {
		data (){
			return {
				avatar: "../../../static/Jinx.jpg"
			}
		},
		created() {
				this.avatar = window.sessionStorage.getItem('avatar');
		}
 
	}
</script>

<style scoped lang="scss">
	.notice {
		height: 100vh;
		/* -webkit-overflow-scrolling: auto; */
		scroll-view {
			height: 100vh;
			padding-bottom: 100rpx;
 
			.picture {
				text-align: center;
			}

			.word-first {
 
			
				padding: 20rpx 70rpx;		
 
			}

			.word-second {
				display: flex;
				padding: 20rpx 70rpx;
			}

			.date {
				font-size: 20rpx;
				color: rgb(141, 141, 141);
			}

			.comment {
				color: rgb(141, 141, 141);
 				padding-left: 300rpx;
 
				// padding-left: 300rpx;
 
			}
		}

		.windows {
			position: fixed;
			background-color: white;
 
			width: 100%;
			height: 100rpx;
			bottom: 0;
			left: 0;
			.personal-commnet {
				display: flex;
				margin-top: 20rpx;
				margin-left: 20rpx;

				// .input {
				// 	color: rgb(141, 141, 141);
				// 	padding-left: 50rpx;
				// 	border: rgb(141, 141, 141) 2rpx solid;
				// }
			}
		}


	}
</style>
