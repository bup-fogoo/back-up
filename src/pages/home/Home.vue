<template>
    <div>
      <home-header></home-header>
      <home-wrap>
        <home-swiper :banners="swiperList"></home-swiper>
        <home-content :list="contentList"></home-content>
        <home-recommend-mini :popRecommend="popRecommend" :list="recommendMiniList"></home-recommend-mini>
        <home-recommend :classicReview="classicReview" :list="recommendList"></home-recommend>
      </home-wrap>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeRecommendMini from './components/RecommendMini'
import HomeRecommend from './components/Recommend'
import HomeContent from './components/Content'
import HomeWrap from './components/Wrap'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeWrap,
    HomeRecommend,
    HomeRecommendMini,
    HomeContent
  },
  data () {
    return {
      popRecommend: '',
      classicReview: '',
      swiperList: [],
      recommendMiniList: [],
      recommendList: [],
      contentList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/v1/home').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        this.popRecommend = data.popRecommend
        this.classicReview = data.classicReview
        this.swiperList = data.swiperList
        this.recommendMiniList = data.recommendMiniList
        this.recommendList = data.recommendList
        this.contentList = data.contentList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>
.textOVerFlow {
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
