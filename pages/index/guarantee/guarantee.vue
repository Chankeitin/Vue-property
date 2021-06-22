<template>
  <view class="discover">
    <!--    TabBar-->
    <view class="foot-tab-bar">
      <view class="menu-icon"></view>
      <button
        class="foot-tab-bar-copy-button"
      >下载</button >
    </view>
    <view class="page-section">
<!--      滚动页面-->
      <view class="page-section-spacing">
        <scroll-view
          class="scroll-view"
          scroll-y="true"
        >
          <view class="competition-information-container">
            <view class="competition-title">{{ competitionDetail.title }}</view>
            <view class="competition-organizer">{{ competitionDetail.organizer }}</view>
            <view class="competition-deadline">{{ competitionDetail.deadline }}</view>
            <view class="competition-content">{{ competitionDetail.content }}</view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  name: '',
  components: {},
  data() {
    return {
      competitionDetail: {
          title: '房屋保修信息',
          content: '保修信息。。。。。。。。。。。。1111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
          deadline: '2020-12-02~2025.02-02',
          organizer: 'xxx公司',
      }
    }
  },
  methods: {

  }
}
</script>


<style lang="scss">
	
	//NavigationBar
	.navigation-bar {
	  position: fixed;
	  left: 0;
	  right: 0;
	  top: 0;
	  height: 88px;
	  width: 375px;
	  background-color: #E7E1CD;
	  z-index: 1;
	  display: flex;
	  flex-direction: row;
	  justify-content: flex-start;
	  box-sizing: border-box;
	  .navigation-bar-return-icon {
	    background-repeat: no-repeat;
	    background-position: center center;
	    margin-top: 54px;
	    margin-left: 16px;
	    background-size: 100% 100%;
	    text-align: center;
	    width: 12px;
	    height: 24px;
	  }
	  .navigation-bar-logo {
	    background-repeat: no-repeat;
	    background-position: center center;
	    margin-top: 44px;
	    margin-left: 131px;
	    background-size: 100% 100%;
	    text-align: center;
	    width: 58px;
	    height: 39px;
	  }
	}
	
	//TabBar
	.foot-tab-bar {
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  justify-content: center;
	  background-color: #E9E9E9;
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
	.foot-tab-bar-copy-button {
	  background-color: #F0AD4E;
	  width: 237px;
	  height: 48px;
	  border-radius: 100px;
	  color: #EEEEEE;
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
	
	
	.page-section-spacing{
	  margin-top: 0;
	  text-align: center;
	  height: 107px;
	}
	.scroll-view {
	  height: 100vh;
	}
	
	.competition-information-container {
	  width: 349px;
	  height: auto;
	  background: #FFFFFF;
	  margin-left: 50%;
	  transform: translate(-50%);
	  display: flex;
	  flex-direction: column;
	  justify-content: flex-start;
	  text-align: left;
	  .competition-title {
	    height: 40px;
	    font-size: 28px;
	    font-weight: bold;
	    line-height: 40px;
	    color: #000000;
	    margin-top: 23px;
	  }
	  .competition-organizer {
	    height: 20px;
	    width: 107px;
	    background: #FEB70F;
	    opacity: 1;
	    border-radius: 5px;
	    font-size: 10px;
	    font-weight: bold;
	    line-height: 20px;
	    color: #FFFFFF;
	    margin-top: 10px;
	    text-align: center;
	  }
	  .competition-deadline {
	    width: 174px;
	    height: 28px;
	    background: #316EBF;
	    opacity: 1;
	    border-radius: 5px;
	    font-size: 12px;
	    font-weight: bold;
	    line-height: 28px;
	    color: #FFFFFF;
	    margin-top: 10px;
	    text-align: center;
	  }
	  .competition-content {
	    width: 349px;
	    font-size: 15px;
	    font-weight: 400;
	    line-height: 25px;
	    color: #000000;
	    overflow: scroll;
	    margin-top: 27px;
	  }
	}

</style>