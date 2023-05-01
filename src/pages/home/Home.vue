<template>
  <div>
    <home-header></home-header>
    <home-wrap>
      <home-swiper :banners="swiperList"></home-swiper>
      <home-recommend :shots="recommendList"></home-recommend>
    </home-wrap>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeWrap from './components/Wrap'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeWrap,
    HomeRecommend,
  },
  data() {
    return {
      swiperList: [],
      recommendList: [],
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
      axios.get('/api/v1/videos').then(this.getHomeVideosSucc)
    },
    getHomeVideosSucc(e) {
      let res
      res = e.data
      if (res.code === 0) {
        this.recommendList = res.data
      }
    }
  }
}
</script>

<style>
</style>
