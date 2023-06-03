<template>
  <div v-if="videoInfo">
    <div class="block-info">
      <div class="block-info-title">
        <h2>{{ videoInfo.title }} </h2>
      </div>
      <div class="container">
        <div class="up-info">
          <div class="face-img">
            <router-link
                role="link"
                :to="'/profile?uid=' + videoInfo.user_id"
            >
              <img :src="videoInfo.avatar_url" alt=""/>
            </router-link>
          </div>
          <div class="face-up">
            <router-link
                role="link"
                :to="'/profile?uid=' + videoInfo.user_id"
            >
              <span>{{ videoInfo.nickname }}</span>
            </router-link>
          </div>
          <div class="face-fans"><p>0 fans</p></div>
          <div class="follow-add" @click="handleFollowClick">
            <span>Follow</span>
          </div>
        </div>
      </div>
      <div class="data">
        <span class="view">{{ videoInfo.views }} views</span>
        <span class="danmu">0 danmu</span>
        <span class="time">{{ videoInfo.created_at }}</span>
        <span class="avid">{{ videoInfo.id }}</span>
      </div>
      <div v-if="videoInfo.description.length > 0" class="desc">
        <div class="show-more-wrapper">
          <p v-if="truncated">{{ videoInfo.description.slice(0, 50) }}...</p>
          <p v-else>{{ videoInfo.description }}</p>
          <a v-if="truncated" @click="truncated = false" class="show-more iconfont">
            <svg t="1685759381890" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="6473" width="200" height="200">
              <path
                  d="M904.533333 311.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 644.266667 179.2 311.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333l362.666666 362.666667c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866667-12.8l362.666666-362.666667c17.066667-17.066667 17.066667-42.666667 0-59.733333z"
                  p-id="6474"></path>
            </svg>
          </a>
          <a v-else @click="truncated = true" class="show-more iconfont">
            <svg t="1685265192321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="6610" width="200" height="200">
              <path
                  d="M904.533333 674.133333l-362.666666-362.666666c-17.066667-17.066667-42.666667-17.066667-59.733334 0l-362.666666 362.666666c-17.066667 17.066667-17.066667 42.666667 0 59.733334 17.066667 17.066667 42.666667 17.066667 59.733333 0L512 401.066667l332.8 332.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733334z"
                  p-id="6611"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="toolbar">
      <div style="margin: 2vw 3.3vw" class="iconfont">
        <span class="iconfont"
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
            <span></span>
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
      <popup @status="handleCloseClick" v-bind:class="{ 'is-visible': showShare }">
        <div>
          <span @click="copyUrl">{{ url }}</span>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import storageService from "@/pages/home/service/storageService";
import axiosInstance from "@/router/api";
import Popup from "@/common/components/popup";
import jwt_decode from "jwt-decode";

export default {
  name: 'VideoInfo',
  components: {Popup},
  props: {
    videoInfo: {type: Object, default: null}
  },
  data() {
    return {
      showShare: false,
      index: 0,
      active: -1,
      isLogin: false,
      url: null,
      truncated: true
    }
  },
  mounted() {
    // 在组件挂载后，获取当前页面的 URL 地址
    this.url = window.location.href;
  },
  methods: {
    handleIsLogin: function () {
      if (localStorage.getItem('aikan_user_token') && localStorage.getItem('aikan_user_info')) {
        // 从本地存储中获取JWT
        const token = storageService.get(storageService.USER_TOKEN);
        // 解码token并获取"exp"属性
        const decodedToken = jwt_decode(token);
        const tokenExp = decodedToken.exp;

        // 获取当前时间戳
        const currentTime = Date.now() / 1000; // 将时间戳转换为以秒为单位
        // 判断token是否已过期
        if (tokenExp < currentTime) {
          // 如果token已过期，需要重新进行身份验证
          localStorage.removeItem('aikan_user_info');
          localStorage.removeItem('aikan_user_token');
          // 重定向到登录页面
          window.location.href = '/login';
          return;
        }
        this.isLogin = true
        return this.isLogin
      } else {
        this.isLogin = false
        return this.isLogin
      }
    },
    handleFollowClick: function () {
      if (this.handleIsLogin()) {
        axiosInstance.post(`/api/v1/users/${this.videoInfo.user_id}/follow`).then(res => {
          if (res.data.code !== 0) {
            this.$message.error(res.data.message);
            return;
          }
          this.$message.success(res.data.message)
          // this.isSelf = false;
        }).catch(err => {
          // 错误提示
          console.log(err);
          this.$message.error("follow sytem false");
        });
      } else {
        this.$message.warning('请先登入!')
      }
    },
    handleLikeClick: function () {
      if (this.handleIsLogin()) {
        axiosInstance.post(`/api/v1/video/${this.$route.params.id}/like`, {params: {uid: this.userId}}).then(res => {
          if (res.data.code !== 0) {
            this.$message.error(res.data.data);
            return;
          }
          this.$message.success(res.data.data)
          // this.isSelf = false;
        }).catch(err => {
          // 错误提示
          console.log(err);
          this.$message.error("like system false");
        });
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
        axiosInstance.post(`/api/v1/video/${this.$route.params.id}/collection`, {params: {uid: this.userId}}).then(res => {
          if (res.data.code !== 0) {
            this.$message.error(res.data.message);
            return;
          }
          this.$message.success(res.data.message)
          // this.isSelf = false;
        }).catch(err => {
          // 错误提示
          console.log(err);
          this.$message.error("like system false");
        });
      } else {
        this.$message.warning('请先登入!')
      }
    },
    handleShareClick: function () {
      this.showShare = true
    },
    handleCloseClick() {
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
        navigator.clipboard.writeText(this.url)
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

.show-more-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
}

.show-more {
  margin-left: 10px;
  align-items: normal !important;
}

.block-info {
  padding: 3vw 3.3vw 0 3.3vw;
}

.block-info-title {
  display: flex;
}

.block-info-title h2 {
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-weight: 500;
  font-size: 5vw;
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
}

.face-up span {
  font-size: 3.73333vw;
  display: block;
  height: 4.53333vw;
  line-height: 4.53333vw;
}

.face-fans, .face-up p {
  font-size: 3.2vw;
  height: 4.53333vw;
  line-height: 4.53333vw;
  color: #999;
}

.face-fans {
  margin-left: 3vw;
}


.follow-add {
  margin-left: auto;
  display: inline-block;
  text-align: center;
  width: 17.6vw;
  height: 6.4vw;
  line-height: 6.4vw;
  background: var(--0f-color);
  color: var(--f1-color);
  border-radius: 5.06667vw;
  font-size: 3.46667vw;
}

.desc {
  display: flex;
  flex-direction: column;
}

.data,
.desc p {
  font-size: 3.2vw;
  line-height: 4vw;
  margin-top: 2vw;
  white-space: pre-wrap;
}

.data {
  color: #999;
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

.toolbar {
  border-bottom: 0.26667vw solid rgba(207, 207, 207, 0.3);
}

.up-about i {
  float: right;
}

.iconfont {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2vw;
}

.iconfont svg {
  cursor: pointer;
  width: 5vw;
  height: 5vw;
  fill: var(--icon-color);
}

.follow-add {
  padding: .1rem .2rem;
}

.follow-add svg {
  fill: #66c6f6 !important;
}

</style>
