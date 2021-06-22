<template>
	<view class="back-top">
		<image src="../../../static/icon/homeServices/top.png" v-show="isShow" @click="backTop">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
			}
		},
		props: ['scrollY'],
		watch: {
			//获取当前页面到顶部的值
			scrollY() {
				console.log(this.scrollY)
				if (this.scrollY > 1200) this.isShow = true;
				else this.isShow = false;
			}
		},
		methods: {
			// 返回顶部
			backTop() {
				this.$emit('backTop');
			}
		}
	}
</script>

<style scoped lang="scss">
	.back-top {
		position: fixed;
		right: 8px;
		bottom: 50px;

		image {
			width: 43px;
			height: 43px;
		}
	}
</style>
