<template>
  <div>
    <div class="r-slide-menu" v-for="item of contentList" :key="item.id">
      <div class="block-video">
        <channel-player-video :src="'https://aeav.cn/videos/' + item.videoUrl + '.mp4'" :poster = "item.imgUrl"></channel-player-video>
        <div>
          <!-- <img :src="item.imgUrl" alt=""> -->
        </div>
      </div>
      <div class="block-info">
        <div class="block-info-title">
          <div>
            <span class="iconfont"></span>
            <h1>{{ item.hot }}</h1>
          </div>
          <h2>{{ item.title }}</h2>
        </div>
        <div class="container">
          <div class="up-info">
            <div class="face-img">
              <router-link
              role="link"
              :to="'/' + item.uid"
              >
                <img :src="item.headUrl" alt="" />
              </router-link>
            </div>
            <div class="face-up">
              <router-link
              role="link"
              :to="'/' + item.uid"
              >
                <span>{{ item.name }}</span>
              </router-link>
              <p>{{ item.fans }}粉丝</p>
            </div>
            <div class="follow-add" @click="handleFollowClick">
              <i class="iconfont"></i>
              <span>关注</span>
            </div>
          </div>
        </div>
        <div class="data">
          <span class="view">{{ item.see }}次观看</span>
          <span class="danmu">{{ item.danmu }}弹幕</span>
          <span class="time">{{ item.time }}</span>
          <span class="avid">{{ item.videoUrl }}</span>
        </div>
        <div class="desc">
          <p>{{ item.desc }}</p>
        </div>
      </div>
      <div class="toolbar">
        <div style="margin: 2vw 3.3vw">
          <span class="toolbar-icon-like iconfont" @click="handleLikeClick">
            <i></i>
            <span>{{ item.like }}</span>
          </span>
          <span
            class="toolbar-icon-dislike iconfont"
            @click="handleDislikeClick"
          >
            <i></i>
            <span>{{ item.dislike }}</span>
          </span>
          <span
            class="toolbar-icon-collection iconfont"
            @click="handleCommentClick"
          >
            <i></i>
            <span>{{ item.comment }}</span>
          </span>
          <span class="toolbar-icon-share iconfont" @click="handleShareClick">
            <i></i>
            <span>{{ item.share }}</span>
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
                z-index: 5;
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
                style="height: 20%; z-index: 6; padding: 3.3vw"
                v-show="showShare"
              >
                <i class="iconfont"></i>
                <span>快分享给你的好友吧！</span>
                <span class="close" @click="handleCloseClick">
                  <i class="iconfont"></i>
                </span>
                <span @click="handleCloseClick">关闭</span>
                <div>
                  <span>http://107.174.95.28/img/2-1000x618-01.jpg</span>
                </div>
              </div>

            </transition>
          </div>
        </div>
      </div>
      <div class="cover">
        <div class="up-about">
          <span>博主相关</span>
          <i class="iconfont"></i>
        </div>
        <div class="padding-list">
          <ul class="list">
            <li class="aeav"
            v-for="up of upRecommend"
            :key="up.videpUrl"
            >
              <router-link
              role="link"
              :to="up.videoUrl"
              @click.native="refresh"
              >
              <div class="bfs-img">
                <img :src="up.imgUrl"/>
              </div>
              <div class="gradient" :to="up.videoUrl"></div>
              <div class="current">
                <span>
                  {{ up.title }}
                </span>
              </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="swich">
        <div class="swich-title">
          <span>相关推荐</span>
          <span>评论{{ item.comment }}</span>
        </div>
        <div class="swich-list-box">
          <div class="swich-list">
            <div class="list-box">
              <img
                src="https://www.awas.ink/image/sea-164989_1280.jpg"
                alt=""
              />
              <p>
                hello worldhello worldhello worldhello worldhello worldhello
                worldhello worldhello world
              </p>
            </div>
            <div class="list-box">
              <img
                src="https://www.awas.ink/image/sea-164989_1280.jpg"
                alt=""
              />
              <p>hello world</p>
            </div>
            <div class="list-box">
              <img
                src="https://www.awas.ink/image/sea-164989_1280.jpg"
                alt=""
              />
              <p>
                hello worldhello worldhello worldhello worldhello worldhello
                worldhello worldhello world
              </p>
            </div>
            <div class="list-box">
              <img
                src="https://www.awas.ink/image/sea-164989_1280.jpg"
                alt=""
              />
              <p>
                hello worldhello worldhello worldhello worldhello worldhello
                worldhello worldhello world
              </p>
            </div>
          </div>
        </div>
        <div class="swich-list-item">item</div>
      </div>
    </div>
  </div>
</template>

<script>
import channelPlayerVideo from '@/pages/channel/components/PlayerVideo'
import axios from 'axios'

export default {
  name: 'ChannelPlayerWrap',
  components: {
    channelPlayerVideo
  },
  props: {
    list: Array
  },
  data () {
    return {
      showBlock: false,
      showShare: false,
      showLG: true,
      contentList: [],
      upRecommend: []
    }
  },
  methods: {
    handleFollowClick: function () {
      alert('follow')
    },
    handleLikeClick: function () {
      alert('like')
    },
    handleDislikeClick: function () {
      alert('dislike')
    },
    handleCommentClick: function () {
      alert('comment')
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
    getChannelInfo () {
      axios.get(`/api/v1/${this.$route.path}`).then(this.getChannelInfoSucc)
    },
    getChannelInfoSucc (res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        this.contentList = data.contentList
        this.upRecommend = data.upRecommend
      }
    },
    refresh () {
      this.$router.go(0)
      // location.reload()
    }
  },
  mounted () {
    this.getChannelInfo()
  }
}
</script>

<style>
/* 可以设置不同的进入和离开动画   */
/* 设置持续时间和动画函数        */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
.list-box p {
  font-size: 3.2vw;
  height: 6.467vw;
  color: #212121;
  margin: 1.6vw 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.list-box img {
  border-radius: 2vw;
  background-size: 36%;
  width: 100%;
  height: 24.881111vw;
}
.list-box {
  width: 44.9933333vw;
  display: inline-block;
}
.swich-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.swich {
  padding: 0 3.3vw;
}
.swich-title {
  display: flex;
  justify-content: space-evenly;
}
.swich-title span {
  height: 11.73333vw;
  line-height: 11.73333vw;
  color: #505050;
}
.swich-title :nth-child(1) {
  color: #66c6f6;
}

.block-video {
  height: 56.26667vw;
  width: 100vw;
}
.block-video img {
  overflow: hidden;
  width: 100%;
  height: 56.8vw;
}
.block-info {
  /* margin: 3vw 3.3vw 0vw 3.3vw;
  background: #fff;
  border-radius: 2vw; */
  padding: 3vw 3.3vw 0vw 3.3vw;
}
.block-info-title {
  display: flex;
  line-height: 4vw;
}
.block-info-title div {
  height: 4vw;
  display: flex;
  padding: 0 1.6vw;
  border-radius: 2.66667vw;
  box-shadow: 0 0 1.6vw rgba(255, 255, 255, 0.9);
}
.block-info-title span::before {
  content: "\e6e7";
  font-size: 3.2vw;
  color: #6cf;
  line-height: 4vw;
}
.block-info-title h1 {
  /* 保持不换行 */
  word-break: keep-all;
  margin: 0 1vw;
  font-size: 3.2vw;
  color: #6cf;
}
.block-info-title h2 {
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  margin: 0 0 0 3vw;
  font-size: 4.3vw;
}
.up-info {
  padding-top: 4vw;
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
.toolbar-icon-like i,
.toolbar-icon-dislike i,
.toolbar-icon-collection i,
.toolbar-icon-share i {
  line-height: 4.26667vw;
  height: 4.26667vw;
  font-size: 4.26667vw;
  text-align: center;
  color: #999;
  vertical-align: middle;
}
.toolbar-icon-like i::before {
  content: "\e6d6";
}
.toolbar-icon-dislike i::before {
  content: "\e684";
}
.toolbar-icon-collection i::before {
  content: "\e69b";
}
.toolbar-icon-share i::before {
  content: "\e6cf";
}
.toolbar span {
  display: inline-block;
  line-height: 4.26667vw;
  height: 4.26667vw;
  font-size: 2.6666667vw;
  color: #999;
}
.toolbar-icon {
  height: 4.26667vw;
  margin-bottom: 2vw;
}
.toolbar,
.cover {
  border-bottom: 0.26667vw solid rgba(207, 207, 207, 0.3);
}
.up-about {
  padding: 0 3.3vw;
  height: 11.73333vw;
  line-height: 11.73333vw;
}
.up-about i {
  float: right;
}
.up-about i::before {
  content: "\e694";
}
.bfs-img {
  width: 100%;
}
.aeav {
  margin: 0 2.333333vw 0 0vw;
  display: inline-block;
  width: 31.2vw;
  height: 19.46667vw;
  position: relative;
  border-radius: 1.6vw;
}
.bfs-img img {
  width: 31.2vw;
  height: 19.46667vw;
  border-radius: 1.6vw;
}
.gradient {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  opacity: 0.4;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(transparent),
    to(#000)
  );
  /* background-image: linear-gradient(-180deg,transparent,#000); */
  border-radius: 1.6vw;
}
.current span {
  height: 8vw;
  margin: 2vw 0;
  font-size: 3.2vw;
  color: #505050;
  line-height: 4.26667vw;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.list {
  /* touch-action: none; */
  overflow: -Scroll;
  overflow-y: hidden;
  display: inline-block;
  clear: both;
  white-space: nowrap;
  overflow-x: auto;
  width: 100%;
}
.padding-list {
  padding: 0 3.3vw;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
</style>
