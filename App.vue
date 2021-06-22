<!-- <template>
	<div id="app">
		<router-view></router-view>
	</div>
</template> -->

<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";

	/*每个页面公共css */
	/* #ifdef MP-WEIXIN */
	:not(not) {
		/* *所有选择器 */
		box-sizing: border-box;
	}

	/* #endif */

	@font-face {
		font-family: "iconfont";
		/* Project id 2528993 */
		src: url('./static/icon/common/iconfont/iconfont.woff2?t=1620288181130') format('woff2'),
			url('./static/icon/common/iconfont/iconfont.woff?t=1620288181130') format('woff'),
			url('./static/icon/common/iconfont/iconfont.ttf?t=1620288181130') format('truetype');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

 
	.icon-ditu:before {
		content: "\e651";
	}
 
	.icon-gouwuche:before {
		content: "\e632";
	}

	.icon-zhuangxiu:before {
		content: "\e675";
		color: green;
	}

	.icon-maimaiche:before {
		content: "\e638";
		color: #ff5500;
	}

	.icon-fangkeyaoqingmdpi:before {
		content: "\e614";
		color: #00aa7f;
	}

	.icon-huangguanguanjundiyihuiyuan:before {
		content: "\e61a";
	}

	.icon-xiaoxi:before {
		content: "\e691";
	}

	.icon-shui:before {
		content: "\e607";
		color: #55aaff;
	}

	.icon-qingli:before {
		content: "\e60d";
		color: #004e76;
	}

	.icon-baoxiu:before {
		content: "\e690";
		color: #004e76;
	}

	.icon-saoyisao:before {
		content: "\e6ea";
		color: #004e76;
	}

	.icon-kuaidichaxun:before {
		content: "\e61d";
		color: #ffaa00;
	}

	.icon-weixiu:before {
		content: "\e6da";
		color: orange;
	}

	.icon-_dayinxiaopiao:before {
		content: "\e82b";
		color: orange;
	}
</style>
