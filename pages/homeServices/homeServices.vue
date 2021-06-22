<template>
	<view class="homeServices">
		<view class="nav-bar">
			<mSearch class="search" @search="search($event,0)"></mSearch>
			<view class="iconfont icon-gouwuche" @click="goShoppingCart"></view>
		</view>
		<top-bar @topClick="topClick" ref="topbar"></top-bar>
		<scroll-view class="goodsScro" scroll-y @scroll="scroll" enable-back-to-top scroll-with-animation>
			<goods-list :goods="showGoods" @click.native="goDetail"></goods-list>
		</scroll-view>
		<u-back-top :scroll-top="scrollTop" :icon-style="iconStyle" :bottom="130" :top="600"></u-back-top>
	</view>
</template>

<script>
	import mSearch from '../../components/homeServices/mehaotian-search/mehaotian-search.vue'
	import topBar from '../../components/homeServices/topbar/topbar.vue'
	import GoodsList from '../../components/homeServices/goods/GoodsList.vue'
	export default {
		data() {
			return {
				goods: {
					'pop': {
						page: 0,
						list: []
					},
					'new': {
						page: 0,
						list: []
					},
					'sell': {
						page: 0,
						list: []
					},
				},
				currentType: 'pop',
				id: 0,
				scrollTop: 0,

				iconStyle: {
					color: '#ff0000',
				}
			}
		},
		components: {
			mSearch,
			topBar,
			GoodsList,
		},
		created() {
			this.getGoods('pop');
			this.getGoods('new');
			this.getGoods('sell');

			//获取对应商品的id号
			uni.$on('goDetail', (data) => {
				this.id = data;
			})

		},
		computed: {
			showGoods() {
				return this.goods[this.currentType].list
			}
		},
		onReachBottom() {
			this.goods[this.currentType].page++;
			this.getGoods(this.currentType);
		},
 
		methods: {
			// 获取数据
			async getGoods(type) {
				const page = this.goods[type].page + 1;
				const {
					data: res
				} = await new Promise((resolve, reject) => {
					uni.request({
						url: 'http://152.136.185.210:7878/api/m5/home/data',
						data: {
							type,
							page
						},
						success: (res) => {
							resolve(res);
						}
					})
				})
				this.goods[type].list.push(...res.data.list);
			},

			// 搜索框
			search(e, val) {
				console.log(e, val);
				this['val' + val] = e;
			},
			
			goShoppingCart() {
				uni.navigateTo({
					url: '../shoppingCart/shoppingCart'
				})
			},
				
			
			// 监听topbar被点击
			topClick(index) {
				switch (index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
				this.$refs.topbar.currentIndex = index;
			},

			// 去往对应商品的详情页
			goDetail() {
				uni.navigateTo({
					url: '../goodsDetail/goodsDetail?' + 'id=' + this.id
				})
			},
			// 返回顶部
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			},
			
		}
	}
</script>

<style scoped lang="scss">
	.homeServices {
		background-color: #f0f0f0;

		.nav-bar {
			display: flex;
			justify-content: space-between;
			margin-top: -20rpx;

			.search {
				width: 94%;
				position: fixed;
				z-index: 9;
			}

			.iconfont {
				font-size: 50rpx;
			}

			.icon-gouwuche {
				position: fixed;
				height: 90rpx;
				background-color: #fff;
				padding-top: 20rpx;
				z-index: 9;
				right: 0;
			}
		}


		.goods {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: space-around;
			padding: 2px;

		}



	}
</style>
