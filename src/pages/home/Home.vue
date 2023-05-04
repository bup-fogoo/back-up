<template>
  <div>
    <home-header></home-header>
    <home-wrap>
      <home-swiper :banners="swiperList"></home-swiper>
      <home-recommend :shots="recommendList"></home-recommend>
      <!--      <div v-if="loading" style="text-align: center; margin-top: 10px;">加载中...</div>-->
      <loadingText v-if="loading"/>
    </home-wrap>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeWrap from './components/Wrap'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
import loadingText from "@/common/components/loadingText";
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeWrap,
    HomeRecommend,
    loadingText
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  },
  data() {
    return {
      swiperList: [],
      recommendList: [],
      loading: false, // 添加一个loading变量
    }
  },
  created() {
    this.loadingFunc()
  },
  methods: {
    loadingFunc() {
      this.getHomeHots()
      this.getHomeVideos()
    },
    getHomeHots() {
      axios.get('/api/v1/videos/hot').then(this.getHomeHotsSucc)
    },
    getHomeHotsSucc(e) {
      let res
      res = e.data
      if (res.code === 0) {
        this.swiperList = res.data
      }
    },
    getHomeVideos() {
      if (this.loading) return // 如果正在加载，则直接返回
      this.loading = true // 标记为正在加载
      axios.get('/api/v1/videos').then(this.getHomeVideosSucc)
    },
    getHomeVideosSucc(e) {
      let res
      res = e.data
      if (res.code === 0) {
        this.recommendList = this.recommendList.concat(res.data)
      }
      this.loading = false // 标记为未加载状态
    },
    handleScroll(event) {
      if (event.target !== document) {
        return; // 如果事件触发的元素不是当前页面元素，则直接返回
      }
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 获取滚动高度
      const windowHeight = document.documentElement.clientHeight // 获取窗口高度
      const scrollHeight = document.documentElement.scrollHeight // 获取页面高度
      const bottom = 50 // 滚动到距离页面底部50px时触发加载视频
      if (scrollTop + windowHeight + bottom >= scrollHeight) {
        this.getHomeVideos()
      }
    }
  }
}
</script>

<style>
</style>
