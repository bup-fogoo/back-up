<template>
  <div v-if="videoInfo">
    <div class="block-info">
      <div class="block-info-title">
        <div class="iconfont">
          <svg t="1683095205751" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="8873" width="200" height="200">
            <path
                d="M0 256h1024v512H0V256z m194.24 155.52V640h37.44V538.88h115.84V640h37.44V411.52H347.52v95.36H231.68V411.52h-37.44zM531.2 407.04c-35.2 0-62.72 11.2-82.56 34.24-19.2 21.76-28.48 49.92-28.48 84.8 0 34.56 9.28 62.72 28.48 84.48 19.84 22.4 47.36 33.92 82.56 33.92 34.88 0 62.4-11.2 82.56-33.6 19.2-21.44 28.8-49.6 28.8-84.8 0-35.2-9.6-63.68-28.8-85.12-20.16-22.72-47.68-33.92-82.56-33.92z m0 32.96c23.68 0 41.92 7.36 54.72 22.72 12.48 15.36 18.88 36.48 18.88 63.36 0 26.88-6.4 47.68-18.88 62.72-12.8 15.04-31.04 22.72-54.72 22.72s-42.24-8-55.04-23.68c-12.48-15.36-18.56-35.84-18.56-61.76 0-26.24 6.08-46.72 18.56-62.08 13.12-16 31.36-24 55.04-24z m128.96-28.48v32h74.88V640h37.44V443.52h74.88v-32h-187.2z"
                fill="#333333" p-id="8874"></path>
          </svg>
        </div>
        <h2>{{ videoInfo.title }} </h2>
      </div>
      <div class="container">
        <div class="up-info">
          <div class="face-img">
            <router-link
                role="link"
                :to="'/' + videoInfo.user_id"
            >
              <img :src="videoInfo.avatar_url" alt=""/>
            </router-link>
          </div>
          <div class="face-up">
            <router-link
                role="link"
                :to="'/@' + videoInfo.user_id"
            >
              <span>{{ videoInfo.nickname }}</span>
            </router-link>
            <p>0粉丝</p>
          </div>
          <div class="follow-add iconfont" @click="handleFollowClick">
            <svg t="1683095141366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="7595" width="200" height="200">
              <path
                  d="M874.666667 469.333333H554.666667V149.333333c0-23.466667-19.2-42.666667-42.666667-42.666666s-42.666667 19.2-42.666667 42.666666v320H149.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667s19.2 42.666667 42.666666 42.666667h320v320c0 23.466667 19.2 42.666667 42.666667 42.666666s42.666667-19.2 42.666667-42.666666V554.666667h320c23.466667 0 42.666667-19.2 42.666666-42.666667s-19.2-42.666667-42.666666-42.666667z"
                  p-id="7596"></path>
            </svg>
            <span>Follow</span>
          </div>
        </div>
      </div>
      <div class="data">
        <span class="view">{{ videoInfo.views }}次观看</span>
        <span class="danmu">0弹幕</span>
        <span class="time">{{ videoInfo.created_at }}</span>
        <span class="avid">{{ videoInfo.id }}</span>
      </div>
      <div class="desc">
        <p>{{ videoInfo.description }}</p>
      </div>
    </div>
    <div class="toolbar">
      <div style="margin: 2vw 3.3vw" class="iconfont">
        <span :class="active===index ? 'toolbar-icon-like-true iconfont':'toolbar-icon-like iconfont'"
              @click="handleLikeClick">
          <svg t="1683094679159" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="7174" width="200" height="200"><path
              d="M881.066667 394.666667c-21.333333-23.466667-51.2-36.266667-81.066667-36.266667H618.666667v-117.333333c0-44.8-29.866667-85.333333-87.466667-117.333334-17.066667-10.666667-38.4-12.8-57.6-8.533333-19.2 4.266667-36.266667 17.066667-46.933333 34.133333-2.133333 2.133333-2.133333 4.266667-4.266667 6.4l-125.866667 281.6H204.8c-59.733333 0-108.8 46.933333-108.8 106.666667v258.133333c0 57.6 49.066667 106.666667 108.8 106.666667h544c53.333333 0 98.133333-38.4 106.666667-89.6l51.2-337.066667c4.266667-34.133333-6.4-64-25.6-87.466666z m-593.066667 448H204.8c-25.6 0-44.8-19.2-44.8-42.666667v-256c0-23.466667 19.2-42.666667 44.8-42.666667h83.2v341.333334z m554.666667-373.333334L789.333333 806.4c-4.266667 21.333333-21.333333 36.266667-42.666666 36.266667H352V471.466667l130.133333-290.133334c2.133333-4.266667 4.266667-4.266667 6.4-4.266666 2.133333 0 4.266667 0 8.533334 2.133333 25.6 14.933333 55.466667 38.4 55.466666 64v149.333333c0 17.066667 14.933333 32 32 32h213.333334c12.8 0 25.6 4.266667 34.133333 14.933334 8.533333 6.4 12.8 19.2 10.666667 29.866666z"
              p-id="7175"></path></svg>
            <span>{{ videoInfo.likes }}</span>
          </span>
        <span
            class="toolbar-icon-dislike iconfont"
            @click="handleDislikeClick"
        >
          <svg t="1683094650933" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="7034" width="200" height="200"><path
              d="M904.533333 522.666667L853.333333 185.6c-8.533333-51.2-55.466667-89.6-106.666666-89.6H204.8c-59.733333 0-108.8 46.933333-108.8 106.666667v258.133333c0 57.6 49.066667 106.666667 108.8 106.666667h91.733333l125.866667 281.6c2.133333 2.133333 2.133333 4.266667 4.266667 6.4 14.933333 23.466667 38.4 36.266667 64 36.266666 12.8 0 25.6-4.266667 38.4-10.666666 57.6-34.133333 87.466667-72.533333 87.466666-117.333334v-117.333333h183.466667c32 0 59.733333-12.8 81.066667-36.266667 19.2-25.6 29.866667-55.466667 23.466666-87.466666z m-616.533333-21.333334H204.8c-25.6 0-44.8-19.2-44.8-42.666666v-256c0-23.466667 19.2-42.666667 44.8-42.666667h83.2v341.333333zM832 567.466667c-8.533333 8.533333-21.333333 14.933333-34.133333 14.933333h-213.333334c-17.066667 0-32 14.933333-32 32v149.333333c0 25.6-29.866667 49.066667-55.466666 64-4.266667 2.133333-10.666667 2.133333-14.933334-4.266666L352 533.333333V160H746.666667c21.333333 0 40.533333 14.933333 42.666666 36.266667L842.666667 533.333333c2.133333 10.666667-2.133333 23.466667-10.666667 34.133334z"
              p-id="7035"></path></svg>
            <span>0</span>
          </span>
        <span
            class="toolbar-icon-collection iconfont"
            @click="handleCollectionClick"
        >
            <svg t="1683094501502" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="6753" width="200" height="200"><path
                d="M934.4 356.266667c-8.533333-10.666667-21.333333-19.2-34.133333-21.333334l-234.666667-34.133333-104.533333-213.333333c-6.4-8.533333-14.933333-17.066667-25.6-23.466667-12.8-6.4-27.733333-6.4-40.533334-2.133333-12.8 4.266667-23.466667 14.933333-29.866666 27.733333l-104.533334 213.333333-234.666666 34.133334c-10.666667 2.133333-21.333333 6.4-29.866667 14.933333-21.333333 21.333333-19.2 55.466667 0 74.666667l170.666667 166.4-40.533334 234.666666c-2.133333 10.666667 0 23.466667 6.4 34.133334 12.8 25.6 46.933333 36.266667 72.533334 21.333333l211.2-110.933333 211.2 110.933333c8.533333 4.266667 17.066667 6.4 25.6 6.4h8.533333c14.933333-2.133333 25.6-10.666667 34.133333-21.333333 8.533333-10.666667 10.666667-25.6 8.533334-40.533334l-40.533334-234.666666 170.666667-166.4c8.533333-8.533333 14.933333-19.2 14.933333-29.866667-2.133333-14.933333-6.4-27.733333-14.933333-40.533333z m-224 194.133333c-12.8 12.8-19.2 29.866667-14.933333 46.933333l38.4 217.6L512 699.733333l-221.866667 115.2L328.533333 597.333333c2.133333-17.066667-2.133333-34.133333-14.933333-46.933333l-157.866667-153.6 219.733334-32c17.066667-2.133333 32-12.8 40.533333-29.866667L512 136.533333l98.133333 198.4c8.533333 14.933333 23.466667 27.733333 40.533334 29.866667l219.733333 32-160 153.6z"
                p-id="6754"></path></svg>
            <span>{{ videoInfo.collections }}</span>
          </span>
        <span class="toolbar-icon-share iconfont" @click="handleShareClick">
          <svg t="1683094629524" class="icon" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="6893" width="200" height="200"><path
              d="M874.666667 544c-17.066667 0-32 14.933333-32 32v256c0 6.4-4.266667 10.666667-10.666667 10.666667H192c-6.4 0-10.666667-4.266667-10.666667-10.666667V192c0-6.4 4.266667-10.666667 10.666667-10.666667h256c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H192C151.466667 117.333333 117.333333 151.466667 117.333333 192v640c0 40.533333 34.133333 74.666667 74.666667 74.666667h640c40.533333 0 74.666667-34.133333 74.666667-74.666667V576c0-17.066667-14.933333-32-32-32z"
              p-id="6894"></path><path
              d="M874.666667 117.333333H640c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h157.866667L509.866667 467.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333l285.866667-285.866667V384c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V149.333333c0-17.066667-14.933333-32-32-32z"
              p-id="6895"></path></svg>
          </span>
      </div>
      <div class="share">
        <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
        >
          <div
              style="
                position: fixed;
                height: 100%;
                top: 0;
                left: 0;
                right: 0;
                z-index:999;
                background: rgba(0, 0, 0, 0.7);
              "
              v-show="showBlock"
              @click="handleBlockClick"
          ></div>
        </transition>
        <div style="padding: 0">
          <transition
              name="fade"
              enter-active-class="animate__animated animate__fadeInUp"
              leave-active-class="animate__animated animate__fadeOutDown"
          >
            <div
                class="share-popup"
                style="height: 20%; z-index: 1000; padding: 3.3vw"
                v-show="showShare"
            >
              <div>

                <div class="iconfont">
                  <svg t="1683095002821" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="7314" width="200" height="200">
                    <path
                        d="M861.866667 164.266667c-87.466667-87.466667-230.4-89.6-320-2.133334l-68.266667 68.266667c-12.8 12.8-12.8 32 0 44.8s32 12.8 44.8 0l68.266667-68.266667c64-61.866667 166.4-61.866667 230.4 2.133334 64 64 64 168.533333 2.133333 232.533333l-117.333333 119.466667c-34.133333 34.133333-81.066667 51.2-128 49.066666-46.933333-4.266667-91.733333-27.733333-119.466667-66.133333-10.666667-14.933333-29.866667-17.066667-44.8-6.4-14.933333 10.666667-17.066667 29.866667-6.4 44.8 40.533333 53.333333 100.266667 87.466667 166.4 91.733333h17.066667c59.733333 0 119.466667-23.466667 162.133333-68.266666l117.333333-119.466667c83.2-89.6 83.2-234.666667-4.266666-322.133333z"
                        p-id="7315"></path>
                    <path
                        d="M505.6 750.933333l-66.133333 68.266667c-64 61.866667-166.4 61.866667-230.4-2.133333-64-64-64-168.533333-2.133334-232.533334l117.333334-119.466666c34.133333-34.133333 81.066667-51.2 128-49.066667 46.933333 4.266667 91.733333 27.733333 119.466666 66.133333 10.666667 14.933333 29.866667 17.066667 44.8 6.4 14.933333-10.666667 17.066667-29.866667 6.4-44.8-40.533333-53.333333-100.266667-87.466667-166.4-91.733333-66.133333-4.266667-130.133333 19.2-177.066666 66.133333l-117.333334 119.466667c-85.333333 89.6-85.333333 234.666667 2.133334 322.133333 44.8 44.8 102.4 66.133333 162.133333 66.133334 57.6 0 115.2-21.333333 160-64l66.133333-68.266667c12.8-12.8 12.8-32 0-44.8-14.933333-10.666667-34.133333-10.666667-46.933333 2.133333z"
                        p-id="7316"></path>
                  </svg>
                  <span>快分享给你的好友吧！</span>
                </div>

                <div>
                  <span class="close iconfont" @click="handleCloseClick">
                    <svg t="1683095023116" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="7455" width="200" height="200"><path
                        d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z"
                        p-id="7456"></path></svg>
                  </span>
                </div>

              </div>
              <div style="margin-top: 20px">
                <span @click="copyUrl">{{ `${this.url}` }}</span>
              </div>
            </div>

          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import storageService from "@/pages/home/service/storageService";

export default {
  name: 'VideoInfo',
  props: {
    videoInfo: {type: Object, default: null}
  },
  data() {
    return {
      showBlock: false,
      showShare: false,
      index: 0,
      active: -1,
      isLogin: false,
      url: ''
    }
  },
  mounted() {
    // 在组件挂载后，获取当前页面的 URL 地址
    this.url = window.location.href;
  },
  methods: {
    handleIsLogin: function () {
      if (localStorage.getItem('aikan_user_token') && localStorage.getItem('aikan_user_info')) {
        this.isLogin = true
        return this.isLogin
      } else {
        this.isLogin = false
        return this.isLogin
      }
    },
    handleFollowClick: function () {
      if (this.handleIsLogin()) {
        this.$message.success('follow ok')
      } else {
        this.$message.warning('请先登入!')
      }
    },
    handleLikeClick: function () {
      if (this.handleIsLogin()) {
      } else {
        this.$message.warning('请先登入!')
      }
    },
    handleDislikeClick: function () {
      if (this.handleIsLogin()) {
        this.$message.success('dislike ok')
      } else {
        this.$message.warning('请先登入!')
      }
    },
    handleCollectionClick: function () {
      if (this.handleIsLogin()) {
        this.$message.success('collection ok')
      } else {
        this.$message.warning('请先登入!')
      }
    },
    handleBlockClick: function () {
      this.showBlock = false
      this.showShare = false
    },
    handleShareClick: function () {
      this.showBlock = true
      this.showShare = true
    },
    handleCloseClick: function () {
      this.showBlock = false
      this.showShare = false
    },
    getChannelLikeSucc(res) {
      if (this.like) {
        this.like = false
        this.active--
        this.contentList['like']--
        console.log('取消点赞成功')
      } else {
        this.like = true
        this.active = this.index
        this.contentList['like']++
        console.log('点赞成功')
      }
    },
    copyUrl() {
      if (navigator.clipboard) {
        // 使用 Clipboard API 复制文本到剪贴板中
        navigator.clipboard.writeText(this.text)
            .then(() => {
              console.log('文本已经复制到剪贴板');
            })
            .catch((error) => {
              console.error('无法复制文本', error);
            });
      } else {
        // 浏览器不支持 Clipboard API
        console.warn('该浏览器不支持 Clipboard API');
      }
    }
  }
}
</script>

<style scoped>
.block-info {
  padding: 3vw 3.3vw 0 3.3vw;
}
.block-info-title {
  display: flex;
}

.block-info-title div {
  height: 5vw;
  display: flex;
  padding: 0 1.6vw;
  border-radius: 2.66667vw;
  box-shadow: 0 0 1.6vw rgba(255, 255, 255, 0.9);
}

.block-info-title h2 {
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-weight: 500;
  font-size: 5.3vw;
  line-height: 6.5vw;
}

.up-info {
  padding-top: 2vw;
  display: flex;
  align-items: center;
}

.face-img img {
  margin: 0 3vw 0 0;
  width: 9.6vw;
  height: 9.6vw;
  border-radius: 4.8vw;
  border: 0.49999px solid #ccc;
}

.face-up span {
  font-size: 3.73333vw;
  color: #212121;
  display: block;
  height: 4.53333vw;
  line-height: 4.53333vw;
}

.face-up p {
  margin-top: 1.33333vw;
  font-size: 3.2vw;
  height: 3.2vw;
  line-height: 3.2vw;
  color: #999;
}

.follow-add {
  margin-left: auto;
  display: inline-block;
  text-align: center;
  width: 17.6vw;
  height: 6.4vw;
  line-height: 6.4vw;
  border: 1px solid #6cf;
  color: #6cf;
  border-radius: 1.06667vw;
  font-size: 3.46667vw;
}

.follow-add i::before {
  font-size: 4.26667vw;
  content: "\e665";
}

.data,
.desc p {
  font-size: 3.2vw;
  line-height: 4vw;
  margin-top: 2.66667vw;
  color: #999;
  white-space: pre-wrap;
}

.data span {
  margin-right: 2vw;
}

.toolbar :nth-child(4) {
  float: right;
}

.toolbar-icon-like span,
.toolbar-icon-dislike span,
.toolbar-icon-collection span {
  margin-right: 20px;
  margin-left: 2px;
}


.toolbar span {
  /*display: inline-block;*/
  line-height: 4.26667vw;
  height: 4.26667vw;
  font-size: 2.6666667vw;
  color: #999;
}

.toolbar-icon {
  height: 4.26667vw;
  margin-bottom: 2vw;
}

.toolbar {
  border-bottom: 0.26667vw solid rgba(207, 207, 207, 0.3);
}

.up-about i {
  float: right;
}


.share-popup {
  position: fixed;
  bottom: 0;
  margin-bottom: -11px;
  right: 0;
  left: 0;
  border-radius: 3.3vw;
  max-height: 100%;
  overflow-y: auto;
  background-color: #fff;
  transition: transform 0.3s, -webkit-transform 0.1s;
  -webkit-overflow-scrolling: touch;
}

.iconfont {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.iconfont svg {
  cursor: pointer;
  width: .4rem;
  height: .4rem;
  fill: #515151;
}

.follow-add {
  padding: 3px .2rem;
}

.follow-add svg {
  fill: #66c6f6 !important;
}

.close {
  float: right;
}


.menu-hidden {
  padding: 3.3vw;
  position: relative;
}

.menu-hidden div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.share-popup > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.share-popup > div > div {
  display: flex;
  align-items: center;
}

.share-popup > div > .close {
  margin-left: 10px;
}
</style>
