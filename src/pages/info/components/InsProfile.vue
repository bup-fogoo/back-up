<template>
  <div>
    <div class="profile-container">
      <!-- 头像 -->
      <div class="avatar-container">
        <img :src="avatarSrc" alt="Avatar" class="avatar">
        <!-- 昵称 -->
        <div class="nickname">{{ nickname }}</div>
        <!-- 关注状态 -->
        <button v-if="!isSelf" class="follow-button" v-text="followButtonText" @click="toggleFollow"></button>
      </div>
    </div>
    <div style="position: relative">
      <div class="ins-profile">
        <!-- 帖子数、关注数和粉丝数 -->
        <div class="counts">
          <div class="count"><span class="label">{{ postCount }} Posts</span></div>
          <div class="count"><span class="label">{{ followerCount }} Followers</span></div>
          <div class="count"><span class="label">{{ followingCount }} Following</span></div>
        </div>
      </div>
    </div>
    <div style="padding: 20px">
      <div>
        <!-- 个人主页链接 -->
        <a>
          {{ aboutMe }}
        </a>
        <a :href="profileUrl" class="profile-link">View Profile</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'InsProfile',

  props: {
    // 昵称
    nickname: {
      type: String,
      required: true
    },

    // 关注状态
    isFollowed: {
      type: Boolean,
      default: false
    },

    // 帖子数
    postCount: {
      type: Number,
      default: 0
    },

    // 粉丝数
    followerCount: {
      type: Number,
      default: 0
    },

    // 关注数
    followingCount: {
      type: Number,
      default: 0
    },

    // 个人主页链接
    profileUrl: {
      type: String,
      default: ''
    },

    // 头像链接
    avatarSrc: {
      type: String,
      required: true
    },
    // 背景图像的 URL
    backgroundUrl: {
      type: String,
      required: true
    },
    aboutMe: {
      type: String,
      default: "nothing"
    },
    isSelf: {
      type: Boolean,
    }
  },

  computed: {
    // 根据关注状态计算关注按钮文本
    followButtonText() {
      return this.isFollowed ? 'Following' : 'Follow';
    }
  },

  methods: {
    // 切换关注状态
    toggleFollow() {
      this.$emit('follow', !this.isFollowed);
    }
  }
}
</script>

<style scoped>
.profile-container {
  position: relative;
  height: 200px;
  width: 100%;
  background-image: url('https://bup.pub/archive/24fc7f4e-1333-44ba-b415-afe38793d19d.png');
  background-size: cover;
  background-position: center;
}

.profile-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
}

.avatar-container {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 30px;
  left: calc(50% - 180px);
  z-index: 99;
}

.avatar {
  width: 70px;
  height: 70px;
  margin-right: 10px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.nickname {
  font-size: 24px;
  line-height: 48px;
  margin: 0 10px 0 10px;
  color: #f5f5f5;
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ins-profile {
  display: flex;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px 10px 0 0;
  margin-top: -15px;
  z-index: 99;
}


.follow-button {
  background-color: #3897f0;
  color: #fff;
  font-size: 16px;
  padding: 8px 40px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
  margin-left: 10px;
}

.counts {
  display: flex;
  margin-top: 10px;
}

.count {
  margin-right: 10px;
  font-size: 16px;
}

.count:last-child {
  margin-right: 0;
}

.label {
  color: #999;
  margin-right: 5px;
}

.profile-link {
  font-size: 16px;
  margin-left: 10px;
  color: #3897f0;
  text-decoration: none;
  border-bottom: 1px solid #3897f0;
}

.profile-link:hover {
  text-decoration: none;
}
</style>
