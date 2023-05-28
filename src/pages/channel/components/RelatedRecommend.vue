<template>
  <div class="related-recommend">
    <div class="related-recommend-title">
      <span @click="handleRecommend(0)" :class="{ active: currentIndex === 0 }">Related</span>
      <span @click="handleComment(1)" :class="{ active: currentIndex === 1 }">Comment</span>
    </div>
    <div class="related-recommend-transform">
      <div class="related-recommend-list-box" :style="{ transform: `translateX(${(0 - currentIndex) * 100}%)` }">
        <div class="related-recommend-list">
          <div class="list-box"
               v-for="rr of RelateRecommend"
               :key="rr.id"
          >
            <router-link
                role="link"
                :to="'/video/' + rr.id"
                :key="rr.id"
                @click.native="refresh"
            >
              <img style="box-shadow: 0 0 1px #888;"
                   :src="rr.cover_url"
                   @load="handleImageLoad" @error="handleImageError"
                   alt=""
              />
              <p>
                {{ rr.title }}
              </p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="related-recommend-list-comment" :style="{ transform: `translateX(${(1 - currentIndex) * 100}%)` }">
        <div class="comments-header">
          <a class="comment-simplebox-icon build-img">
            <!-- 如果用户已经登录，则显示用户自己的头像 -->
            <img v-if="this.meInfo" :src="this.meInfo['avatar_url']" alt="User Avatar">
            <!-- 如果用户没有登录，则显示默认头像 -->
            <img v-else src="https://bup.pub/error_404.jpg" alt="Default Avatar">
          </a>
          <div class="comment-simplebox-input">
            <input class="comment-simplebox-placeholder" placeholder=" add comment ..." v-model="newComment">
          </div>
          <span class="comment-simplebox-reply" @click="handleSubComment">Submit </span>
        </div>
        <div class="comments-header-renderer"
             v-for="ci of CommentInfo"
             :key="ci.id">
          <div class="comments-header">
            <a class="comment-simplebox-icon build-img">
              <img :src="ci.avatar_url" alt="">
            </a>
            <div class="comment-content">
              <div class="comment-header">
                <span class="comment-title">{{ ci.nickname }}</span>
                <span class="comment-published-time">{{ ci.created_at | timeAgo }}</span>
              </div>
              <p class="comment-text user-text">{{ ci.content }}</p>
              <div class="comment-details secondary-text cbox">
                <div class="comment-icons">
                  <div class="comment-action-icon" data-selected="false">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24"
                         viewBox="0 0 24 24" width="24">
                      <path
                          d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
                    </svg>
                  </div>
                  <span v-if="ci.likeNum !== 0" class="comment-count">{{ ci.likeNum }}</span></div>
                <div class="comment-icons">
                  <div class="comment-action-icon" data-selected="false">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24"
                         viewBox="0 0 24 24" width="24">
                      <path
                          d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
                    </svg>
                  </div>
                </div>
                <div class="comment-icons">
                  <div class="comment-action-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24"
                         viewBox="0 0 24 24" width="24">
                      <path
                          d="M8,7h8v2H8V7z M8,13h5v-2H8V13z M5,3v13h10h0.41l0.29,0.29L19,19.59V3H5 M4,2h16v20l-5-5H4V2L4,2z"></path>
                    </svg>
                  </div>
                </div>
                <button class="icon-button comment-menu" aria-label="更多选项" aria-haspopup="true">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24"
                         viewBox="0 0 24 24" width="24">
                      <path
                          d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="comments-center-block">
          <p>No comments yet</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {getTimeAgo} from '@/common/js/time.js'
import axiosInstance from "@/router/api";
import storageService from "@/pages/home/service/storageService";


export default {
  name: 'RelatedRecommend',
  loadingError: false,
  data() {
    return {
      RelateRecommend: [],
      CommentInfo: [],
      currentIndex: 0,
      newComment: '',
      meInfo: []
    }
  },
  filters: {
    timeAgo(timestamp) {
      return getTimeAgo(timestamp)
    }
  },
  methods: {
    getChannelInfo() {
      axios.get(`/api/v1/videos`).then(this.getChannelRelationSucc)
    },
    getChannelRelationSucc(res) {
      res = res.data
      if (res.code === 0) {
        this.RelateRecommend = res.data
      }
    },
    handleRecommend: function (index) {
      this.currentIndex = index
    },
    handleComment: function (index) {
      this.currentIndex = index;
      // 获取评论
      axiosInstance.get(`/api/v1/video/${this.$route.params.id}/comments`,).then(res => {
        if (res.data.code !== 0) {
          this.$message.error(res.data.message);
          return;
        }
        this.CommentInfo = res.data.data
        this.meInfo = JSON.parse(storageService.get(storageService.USER_INFO))
        // this.isSelf = false;
      }).catch(err => {
        // 错误提示
        console.log(err);
        this.$message.error("comment system false");
      });
    },
    handleSubComment: function () {
      const text = this.newComment.trim();
      if (text === '') {
        // Input is empty, do nothing
        this.$message.info("Input is empty");
        return;
      }
      if (!localStorage.getItem('aikan_user_token') && !localStorage.getItem('aikan_user_info')) {
        this.$message.info("Please login");
        return;
      }

      // 发送请求添加评论
      axiosInstance.post("/api/v1/video/comment", {"content": text, "videoId": this.$route.params.id}).then(res => {
        if (res.data.code !== 0) {
          this.$message.warning(res.data.message);
          return;
        }

        // 添加评论内容到当前视频组件的数据中
        const currentTimeStamp = new Date().getTime();
        const newComment = {
          "id": res.data.data.id,
          "nickname": this.meInfo['nickname'],
          "avatar_url": this.meInfo['avatar_url'],
          "created_at": Math.floor(currentTimeStamp / 1000),
          "content": text,
          "likeNum": 0,
        };
        this.CommentInfo.push(newComment);

        // Clear the input field
        this.newComment = '';
      }).catch(err => {
        // 错误提示
        console.log(err);
        this.$message.error("comment system false");
      });
    },
    handleImageLoad() {
      this.loading = false
    },
    handleImageError(event) {
      // 处理加载失败的情况
      event.target.src = 'https://bup.pub/error_404.jpg'
    },
    refresh() {
      this.$router.go(0)
      // location.reload()
    }
  },
  mounted() {
    this.getChannelInfo()
  }
}
</script>

<style scoped>
.related-recommend-transform {
  position: relative;
  overflow: hidden;
  flex-grow: 1; /* 让元素占据剩余空间的全部高度 */
}

.related-recommend-list-comment {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.related-recommend-list-comment, .related-recommend-list-box {
  transition: transform 0.3s ease;
  padding: 0 3vw;
  box-sizing: border-box;
}

.comments-center-block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vw; /* 确定容器高度 */
}

.comments-center-block p {
  font-size: 3vw;
  color: #909090;
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

.list-box p {
  font-size: 3.2vw;
  line-height: 4vw;
  color: #212121;
  margin: 2.6vw 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.related-recommend-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.related-recommend {
  /*padding: 0 3.3vw;*/
}

.related-recommend-title {
  display: flex;
  justify-content: space-evenly;
}

.related-recommend-title span {
  height: 11.73333vw;
  line-height: 11.73333vw;
  font-size: 4.5vw;
}

.active {
  color: #3b82f6;
  position: relative;
}

.active::after {
  content: "";
  border-bottom: 2px solid #3b82f6;
  border-radius: 2px;
  width: 100%;
  position: absolute;
  bottom: 1.5vw;
  left: 0;
}

.active:hover::before {
  width: 100%;
}

.comment-count {
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}

.secondary-text {
  color: #606060;
}

.comment-menu {
  color: #909090;
  margin-left: auto;
}

.icon-button {
  border: none;
  background: transparent;
  width: 40px;
  height: 40px;
  padding: 8px;
  box-sizing: border-box;
}

.comment-details {
  font-size: .3rem;
}

.secondary-text {
  line-height: .3rem;
}

.comment-icons {
  width: 40px;
  height: 36px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.cbox {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.comment-text {
  max-height: none;
  font-size: 0.3rem;
  overflow: hidden;
  word-wrap: break-word;
  margin: 4px 0;
}

.user-text {
  white-space: pre-wrap;
}

.comment-content {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  overflow: hidden;
  padding: 0 8px;
  text-align: initial;
}

.comment-published-time {
  margin-right: 4px;
  font-size: 13px;
  color: #9d9d9d;
}

.comment-content p {
  line-height: 1.25;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.comment-header {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.comment-title {
  display: inline-block;
  font-size: .3rem;
  word-wrap: break-word;
  color: #606060;
}

.comment-content {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  overflow: hidden;
  padding: 0 8px;
  text-align: initial;
}

.comment-simplebox-icon {
  width: .8rem;
  height: .8rem;
  margin-right: 8px;
}

.comments-header {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  padding-bottom: 12px;
}

.comment-simplebox-reply {
  margin-left: 8px;
  text-align: initial;
  line-height: .8rem;
  padding: 0 8px;
  color: #3b82f6;
  border-radius: 8px;
  font-size: 0.3rem;
  border: 1px solid rgba(0, 0, 0, 0.1);

}

.comment-simplebox-placeholder {
  height: .8rem;
  width: 100%;
  color: #606060;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.comment-simplebox-input {
  overflow: initial;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
}

</style>
