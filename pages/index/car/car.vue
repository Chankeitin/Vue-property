<template>
  <view class="discover">
    <view class="page-section">
<!--      滚动页面-->
      <view class="page-section-spacing">
        <scroll-view
          class="scroll-view"
          scroll-y="true"
        >
          <view class="my-works-container">
            <view class="my-works-item" v-for="item in myWorks">
              <view class="my-works-img"></view>
              <view class="my-works-content-container">
                <view class="my-works-title">{{ item.title }}</view>
                <view class="my-works-label-container">
                  <view
                    class="my-works-label"
                    v-for="label in item.label"
                  >{{ label }}</view>
                </view>
                <view class="my-works-content">{{ item.content }}</view>
                <view
                  class="my-work-certificate"
                  @tap="showCertificateClick"
                >查看详情</view>
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
		      myWorks: [
		        {
		          title: '劳斯莱斯',
		          content: '劳斯莱斯(Rolls-Royce)是世界顶级豪华轿车，以豪华而享誉全球。除了制造汽车，劳斯莱斯还涉足飞机发动机制造领域，它也是世界上最优秀的发动机制造者，空客飞机部分型号用的就是劳斯莱斯的发动机。',
		          label: ['标签1', '标签2'],
		          haveCertificate: true
		        },
		        {
		          title: '法拉利',
		          content: '法拉利(Ferrari)推出的一款旗舰级超级跑车，于2013年3月在日内瓦车展首次亮相，LaFerrari拥有超凡极致的性能表现、空气动力效率以及操控性，为超级跑车树立了新的标杆。',
		          haveCertificate: false
		        },
		        {
		          title: '迈巴赫',
		          content: '迈巴赫是汽车历史上一个充满传奇色彩的品牌，巧夺天工的设计和无与伦比的精湛的制造技术使它在上个世纪初成为代表德国汽车工业最高水平的杰作。如果不是60年前的那场战争，迈巴赫恐怕早已成为与劳斯莱斯齐名的世界顶级豪华车。今天，德国人凭借自己的聪明才智和精湛的技艺使这一古老品牌迅速恢复昔日的光辉，重新诠释了“Maybach（迈巴赫）”这一传奇品牌——一个象征着完美和奢华的轿车。',
		          haveCertificate: false
		        },
		      ]
		    }
		  },
		  methods: {
		  }
	}
</script>

<style scoped lang="scss">
	//整体页面
	.discover {
	  background-color: #EEEEEE;
	}
	
	.page-section-spacing{
	  margin-top: 0;
	  text-align: center;
	  margin-bottom: 87px;
	}
	.scroll-view {
	  height: 100%;
	}
	.scroll-view-item{
	  height: 100%;
	}
	
	
	.my-works-container {
	  width: 323px;
	  margin-left: 50%;
	  transform: translate(-50%);
	  margin-top: 13px;
	  .my-works-item:nth-child(1) > .my-works-img {
	    background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcar0.autoimg.cn%2Fupload%2Fspec%2F13452%2Fu_20120723095341589264.jpg&refer=http%3A%2F%2Fcar0.autoimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625644340&t=f41a610e023e7176913e34ba24327318");
	  }
	  .my-works-item:nth-child(2) > .my-works-img {
	    background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2F00.minipic.eastday.com%2F20170818%2F20170818115250_d41d8cd98f00b204e9800998ecf8427e_5.jpeg&refer=http%3A%2F%2F00.minipic.eastday.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625644340&t=eb77aaed61ddbf953a49e5f6aef0e528");
	  }
	  .my-works-item:nth-child(3) > .my-works-img {
	    background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcar0.autoimg.cn%2Fupload%2Fspec%2F10464%2Fu_20110713084922239264.jpg&refer=http%3A%2F%2Fcar0.autoimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625644340&t=ffba13c76defea253e206c47dfc53e94");
	  }
	  .my-works-item {
	    width: 323px;
	    height: 114px;
	    background: #F9F9F9;
	    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.11);
	    border-radius: 10px;
	    margin-bottom: 14px;
	    display: flex;
	    flex-direction: row;
	    justify-content: flex-start;
	    .my-works-img {
	      width: 114px;
	      height: 114px;
	      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
	      border-radius: 20px;
	      background-repeat: no-repeat;
	      background-position: center center;
	      background-size: 100% 100%;
	    }
	    .my-works-content-container {
	      display: flex;
	      flex-direction: column;
	      justify-content: center;
	      align-items: flex-start;
	      margin-left: 7px;
	      .my-works-title {
	        font-size: 13px;
	        font-weight: bold;
	        line-height: 18px;
	        color: #333333;
	      }
	      .my-works-label-container {
	        display: flex;
	        flex-direction: row;
	        justify-content: flex-start;
	        align-items: center;
	        margin-top: 3px;
	        .my-works-label {
	          width: 34px;
	          height: 13px;
	          background: #E7E7E7;
	          border-radius: 4px;
	          font-size: 7px;
	          font-weight: 400;
	          line-height: 9px;
	          color: #999999;
	          padding-top: 3px;
	          box-sizing: border-box;
	        }
	      }
	      .my-works-content {
	        width: 192px;
	        height: 34px;
	        font-size: 12px;
	        font-weight: 400;
	        line-height: 17px;
	        color: #666666;
	        overflow: scroll;
	        text-align: left;
	        margin-top: 5px;
	      }
	      .my-work-certificate {
	        width: 100%;
	        font-size: 12px;
	        font-weight: 400;
	        line-height: 17px;
	        color: #F9AC05;
	        text-align: right;
	      }
	    }
	  }
	}
	
</style>
