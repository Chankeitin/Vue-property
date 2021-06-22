<template>
	<view class="tab-bar">
		<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
			@buttonClick="buttonClick" />
	</view>
</template>

<script>
	// import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	import uniGoodsNav from '../../../uni_modules/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components: {
			uniGoodsNav
		},
		data() {
			return {
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 0,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 0
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})

			},
			buttonClick(e) {
				console.log(e)
 
				
				if(e.index === 2) {
					uni.navigateTo({
						url: '../shoppingCart/shoppingCart'
					})
				}
			},
			buttonClick(e) {
				console.log(e)
				if(e.index === 0) {
					uni.showToast({
						title: `加入购物车成功`,
						icon: 'none'
					})
				}
 
				this.options[2].info++
			}
		}
	}
</script>

<style scoped lang="scss">
	.tab-bar {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
