<template>
  <div v-if="isDataLoaded">
    <profile-header :username="user.username"></profile-header>
    <ins-profile
        :nickname="user.nickname"
        :is-followed="user.isFollowed"
        :post-count="user.posts"
        :follower-count="user.followerCount"
        :following-count="user.followingCount"
        :profile-url="user.backgroundUrl"
        :about-me="user.aboutMe"
        :avatar-src="user.avatarUrl"
        :background-url="user.backgroundUrl"
        :isSelf="isSelf"
    ></ins-profile>
    <SwitchBar @switch="handleSwitch"/>
    <div class="card-container">
      <div v-for="(card, index) in cards" :key="index" class="card"
           :style="{ transform: `translateX(${(index - currentIndex) * 100}%)` }">
        <ProfileProperty :profileCoverArr="card"/>
      </div>
    </div>
  </div>
  <div v-else>
    <!-- 显示加载中的信息 -->
    <loading/>
  </div>
</template>

<script>
import storageService from '../home/service/storageService'
import InsProfile from "@/pages/info/components/InsProfile";
import ProfileHeader from "@/pages/info/components/ProfileHeader";
import SwitchBar from "@/pages/info/components/SwitchBar";
import ProfileProperty from "@/pages/info/components/ProfileProperty";
import jwt_decode from 'jwt-decode';
import axiosInstance from '@/router/api';
import loading from "@/common/components/loading";

export default {
  name: 'Profile',
  components: {
    InsProfile,
    ProfileHeader,
    SwitchBar,
    ProfileProperty,
    loading
  },
  data() {
    return {
      isDataLoaded: false,
      isSelf: true,
      user: Array,
      profileCoverArr: Array,
      userId: null,
      currentIndex: 0,
      cards: []
    }
  },
  created() {
    this.loadInfo()
  },
  methods: {
    loadInfo() {
      // 获取uid查询参数
      const uid = this.$route.query.uid;
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

      if (uid && uid !== decodedToken.UserId) {
        // 如果存在uid查询参数且不是本人，则显示特定用户的个人信息
        this.userId = uid;
        // 获取特定用户的个人信息...
        axiosInstance.get("/api/v1/profile", {params: {uid: this.userId}}).then(res => {
          if (res.data.code !== 0) {
            this.$message.error(res.data.message);
            return;
          }
          this.isSelf = false;
          this.user = res.data.data
          this.$set(this.cards, 0, res.data.data.videos);
          this.isDataLoaded = true;
        }).catch(err => {
          // 错误提示
          console.log(err);
          this.$message.error("profile get error");
        });
        axiosInstance.get(`/api/v1/videos/${uid}/collections`).then(res => {
          if (res.data.code !== 0) {
            this.$message.error(res.data.message);
            return;
          }
          this.$set(this.cards, 1, res.data.data);
        }).catch(error => {
          console.log(error);
        });

        axiosInstance.get(`/api/v1/videos/${uid}/likes`).then(res => {
          if (res.data.code !== 0) {
            this.$message.error(res.data.message);
            return;
          }
          this.$set(this.cards, 2, res.data.data);
        }).catch(error => {
          console.log(error);
        });
      } else {
        // 如果不存在uid查询参数或者是本人，则显示自己的个人信息
        axiosInstance.get("/api/v1/profile", {params: {uid: this.userId}}).then(res => {
          if (res.data.code !== 0) {
            this.$message.error(res.data.message);
            return;
          }
          this.userId = decodedToken.UserId;
          this.isSelf = true;
          this.user = res.data.data
          this.$set(this.cards, 0, res.data.data.videos);
          this.isDataLoaded = true;
        }).catch(err => {
          // 错误提示
          console.log(err);
          this.$message.error("profile get self error");
        });
        axiosInstance.get(`/api/v1/videos/${decodedToken.UserId}/collections`).then(res => {
          if (res.data.code !== 0) {
            this.$message.error(res.data.message);
            return;
          }
          this.$set(this.cards, 1, res.data.data);
        }).catch(error => {
          console.log(error);
        });

        axiosInstance.get(`/api/v1/videos/${decodedToken.UserId}/likes`).then(res => {
          if (res.data.code !== 0) {
            this.$message.error(res.data.message);
            return;
          }
          this.$set(this.cards, 2, res.data.data);
        }).catch(error => {
          console.log(error);
        });
      }
    },
    handleSwitch(index) {
      this.currentIndex = index;
    },
  }
}
</script>

<style scoped>
.card-container {
  position: relative;
  width: 100vw;
  height: 100vw;
  overflow: hidden;
}

.card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease;
}


</style>
