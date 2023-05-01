<template>
  <div>
    <profile-header :username="userInfo.username"></profile-header>
    <ins-profile
        :nickname="userInfo.nickname"
        :is-followed="user.isFollowed"
        :post-count="user.postCount"
        :follower-count="user.followerCount"
        :following-count="user.followingCount"
        :profile-url="userInfo.background_url"
        :about-me="userInfo.about_me"
        :avatar-src="userInfo.avatar_url"
        :background-url="userInfo.background_url"
        :isSelf="isSelf"
    ></ins-profile>
    <SwitchBar/>
    <ProfileProperty :profileCoverArr="profileCoverArr"/>

  </div>
</template>

<script>
import storageService from '../home/service/storageService'
import InsProfile from "@/pages/info/components/InsProfile";
import ProfileHeader from "@/pages/info/components/ProfileHeader";
import SwitchBar from "@/pages/info/components/SwitchBar";
import ProfileProperty from "@/pages/info/components/ProfileProperty";
import infoService from "@/pages/info/service/infoService";


export default {
  name: 'Profile',
  components: {
    InsProfile,
    ProfileHeader,
    SwitchBar,
    ProfileProperty
  },
  data() {
    return {
      isSelf: true,
      // 创建一个假的用户信息对象
      user: {
        isFollowed: false,
        postCount: 0,
        followerCount: 0,
        followingCount: 0,
      },
      profileCoverArr: [],
      profileUser: {
        id: 0, // 请替换为要显示的用户的ID
        // 其他用户信息
      }
    }
  },
  computed: {
    userInfo() {
      return JSON.parse(storageService.get(storageService.USER_INFO))
    }
  },
  created() {
    this.loadInfo()
  },
  methods: {
    loadInfo() {
      infoService.getProfile().then(res => {
        if (res.data.code !== 0) {
          this.$message.error(res.data.message)
          return
        }
        // const userInfo = JSON.parse(storageService.get(storageService.USER_INFO))
        // // this.isSelf = userInfo.id === this.profileUser.id
        // console.log(userInfo.id)
        // console.log(this.profileUser.id)
        // console.log(this.isSelf)
        this.user.followerCount = res.data.data.followerCount
        this.user.followingCount = res.data.data.followingCount
        this.user.isFollowed = res.data.data.isFollowing
        this.user.postCount = res.data.data.posts
        this.profileCoverArr = res.data.data.videos
      }).catch(err => {
        // 错误提示
        console.log(err)
        this.$message.error("System error:", err)
      })
    }
  }
}
</script>

<style>

</style>
