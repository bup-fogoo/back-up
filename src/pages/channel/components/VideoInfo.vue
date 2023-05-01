<template>
  <div v-if="videoInfo">
    <div class="block-info">
      <div class="block-info-title">
        <div>
          <span class="iconfont"></span>
          <h1>热门</h1>
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
          <div class="follow-add" @click="handleFollowClick">
            <i class="iconfont"></i>
            <span>关注</span>
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
      <div style="margin: 2vw 3.3vw">
        <span :class="active===index ? 'toolbar-icon-like-true iconfont':'toolbar-icon-like iconfont'"
              @click="handleLikeClick">
            <i></i>
            <span>{{ videoInfo.likes }}</span>
          </span>
        <span
            class="toolbar-icon-dislike iconfont"
            @click="handleDislikeClick"
        >
            <i></i>
            <span>0</span>
          </span>
        <span
            class="toolbar-icon-collection iconfont"
            @click="handleCollectionClick"
        >
            <i></i>
            <span>{{ videoInfo.collections }}</span>
          </span>
        <span class="toolbar-icon-share iconfont" @click="handleShareClick">
            <i></i>
            <span></span>
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

                <div>
                  <i class="iconfont"></i>
                  <span>快分享给你的好友吧！</span>
                </div>

                <div>
                  <span class="close" @click="handleCloseClick">
                  <i class="iconfont"></i></span>
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
        const info = JSON.parse(localStorage.getItem('aikan_user_info'))
        axios.post(`/api/v1/auth/channel/like`, {
          vid: this.contentList['videoUrl'],
          uid: info.uid
        }, {headers: {Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}`}}).then(this.getChannelLikeSucc)
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

:root {
  --animate-duration: 400ms !important;
  --animate-delay: 0.5s !important;
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

.share-popup i::before {
  content: "\e6ae";
}

.close {
  float: right;
}

.close i::before {
  content: "\e67b";
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
