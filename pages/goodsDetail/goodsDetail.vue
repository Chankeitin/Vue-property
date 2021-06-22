<template>
	<view class="goods-detail">
		<detail-nav-bar @itemClick="itemClick" :currentIndexx="currentIndex"></detail-nav-bar>
		<scroll-view class="scroll-view" scroll-y @scroll="scroll" enable-back-to-top scroll-with-animation
			:scroll-top="ScrollTopY">
			<swiper indicator-dots circular autoplay>
				<swiper-item v-for="(item, index) in topImages" :key="index">
					<image :src="item"></image>
				</swiper-item>
			</swiper>

			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
			<detail-params-info :paramInfo="paramInfo" ref="paramsInfo" id="paramsInfo"></detail-params-info>
			<detail-comment-info :commentInfo="commentInfo" ref="commentInfo" id="commentInfo"></detail-comment-info>
			<detail-recommend-info :recommends="recommends" ref="recommendInfo" id="recommendInfo"></detail-recommend-info>
		</scroll-view>
		<!-- <u-back-top :scroll-top="scrollTop" :icon-style="iconStyle" :bottom="130" :top="600"></u-back-top> -->

		<u-back-top :scroll-top="scrollTop" :icon-style="iconStyle" :bottom="130" :top="600"></u-back-top>
		<detail-tab-bar></detail-tab-bar>
	</view>
</template>

<script>
	import {
		getDetail,
		Goods,
		Shop,
		GoodsParam,
		getRecommend,
	} from '../../network/goodsDetail.js'

	import detailNavBar from '../../components/homeServices/goodsDetail/detailNavBar.vue'
	import detailBaseInfo from '../../components/homeServices/goodsDetail/detailBaseInfo.vue'
	import detailTabBar from '../../components/homeServices/goodsDetail/detailTabBar.vue'
	import detailShopInfo from '../../components/homeServices/goodsDetail/detailShopInfo.vue'
	import detailGoodsInfo from '../../components/homeServices/goodsDetail/detailGoodsInfo.vue'
	import detailParamsInfo from '../../components/homeServices/goodsDetail/detailParamInfo.vue'
	import detailCommentInfo from '../../components/homeServices/goodsDetail/detailCommentInfo.vue'
	import detailRecommendInfo from '../../components/homeServices/goodsDetail/detailRecommendInfo.vue'
	export default {
		data() {
			return {
				iid: null,
				data: {},
				topImages: [],
				goods: {},
				shop: {},
				detailInfo: {},
				paramInfo: {},
				commentInfo: {},
				recommends: [],
				themeTopYs: [], //navbar对象各个数据的offsetTop的值
				ScrollTopY: 0, //监听滚动到哪里
				currentIndex: 0,
				isShowBackTop: false,
				message: null,
				scrollTop: 0,
				iconStyle: {
					color: '#ff0000',
				}
			};
		},
		components: {
			detailNavBar, //顶部导航栏
			detailBaseInfo, //介绍信息
			detailShopInfo, //店铺介绍信息
			detailTabBar, //底部导航栏
			detailGoodsInfo, //商品图片详情信息
			detailParamsInfo, //商品参数信息
			detailCommentInfo, //用户评价
			detailRecommendInfo, //商品推荐信息
		},
		onLoad(arg) {
			this.iid = arg.id;

			// 获取商品详情的数据
			uni.request({
				url: 'http://152.136.185.210:7878/api/m5/detail',
				data: {
					iid: this.iid
				},
				success: res => {
					console.log(res.data.result);
					console.log(this.$refs.paramsInfo)
					const data = res.data.result;
					// 获取顶部信息
					this.topImages = data.itemInfo.topImages;
					// 获取商品信息获取商品信息
					this.goods = new Goods(
						data.itemInfo,
						data.columns,
						data.shopInfo.services
					);
					// 获取店铺信息
					this.shop = new Shop(data.shopInfo);
					// 获取商品信息
					this.detailInfo = data.detailInfo;
					// 保存参数信息
					this.paramInfo = new GoodsParam(
						data.itemParams.info,
						data.itemParams.rule
					);
					// 保存评论信息
					if (data.rate.list) {
						this.commentInfo = data.rate.list[0];
					}
				}
			})

			// 获取推荐信息
			uni.request({
				url: 'http://152.136.185.210:7878/api/m5/recommend',
				success: res => {
					this.recommends = res.data.data.list;
				}
			})

		},
		updated() {
		},
		methods: {

			scroll(e) {
				if (e.detail.scrollTop < this.themeTopYs[1]) this.currentIndex = 0;
				else if (e.detail.scrollTop >= this.themeTopYs[1] && e.detail.scrollTop < this.themeTopYs[2])
					this.currentIndex = 1;
				else if (e.detail.scrollTop >= this.themeTopYs[2] && e.detail.scrollTop < this.themeTopYs[3])
					this.currentIndex = 2;
				else this.currentIndex = 3;
			},

			itemClick(index) {
				switch (index) {
					case 0:
						this.ScrollTopY = this.themeTopYs[0];
						break;
					case 1:
						this.ScrollTopY = this.themeTopYs[1];
						break;
					case 2:
						this.ScrollTopY = this.themeTopYs[2];
						break;
					case 3:
						this.ScrollTopY = this.themeTopYs[3];
						break;
				}
			},
			// 返回顶部
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			},
			imageLoad() {
				
				
					this.themeTopYs = [];
					this.themeTopYs.push(0);
					// this.themeTopYs.push(this.$refs.paramsInfo.$el.offsetTop - 44);
					// this.themeTopYs.push(this.$refs.commentInfo.$el.offsetTop - 44);
					// this.themeTopYs.push(this.$refs.recommendInfo.$el.offsetTop - 44);
					// this.themeTopYs.push(Number.MAX_VALUE);
					
					const paramsInfo = uni.createSelectorQuery().in(this);
					paramsInfo.select('#paramsInfo').boundingClientRect(data => {
					  this.themeTopYs.push(data.top-44);
					}).exec();
					
					const commentInfo = uni.createSelectorQuery().in(this);
					commentInfo.select('#commentInfo').boundingClientRect(data => {
					  this.themeTopYs.push(data.top-60);
					}).exec();
					
					const recommendInfo = uni.createSelectorQuery().in(this);
					recommendInfo.select('#recommendInfo').boundingClientRect(data => {
					  this.themeTopYs.push(data.top-44);
					}).exec();
					
					
					console.log(this.themeTopYs)
				
			},
		},
		// watch: {
		// 	ScrollTopY() {
		// 		console.log(this.ScrollTopY);
		// 	}
		// }
	}
</script>

<style scoped lang="scss">
	.goods-detail {
		scroll-view {
			// height: calc(100vh-50px-49px);
			height: 100vh;

			swiper {
				width: 100%;
				height: 600rpx;
				margin-top: 98rpx;

				image {
					width: 100%;
					height: 100%;
				}
				
				

			}
		}

	}
</style>
