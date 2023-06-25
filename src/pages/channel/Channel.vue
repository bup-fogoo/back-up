<template>
  <div>
    <channelHeader/>
    <div v-if="isDataLoaded">
      <channelVideoPlayer :videoInfo="videoInfo" :video-danmuku="videoDanmuku"/>
      <VideoInfo :videoInfo="videoInfo"/>
      <RelatedRecommend/>
    </div>
    <loading v-else/>
  </div>
</template>

<script>
import channelHeader from '@/pages/home/components/Header'
import channelVideoPlayer from '@/pages/channel/components/VideoPlayer'
import VideoInfo from "@/pages/channel/components/VideoInfo";
import RelatedRecommend from "@/pages/channel/components/RelatedRecommend";
import activeInstance from "@/router/api"
import loading from "@/common/components/loading";

export default {
  name: 'Channel',
  components: {
    channelHeader,
    channelVideoPlayer,
    VideoInfo,
    RelatedRecommend,
    loading,
  },
  data() {
    return {
      isDataLoaded: false,
      contentList: [],
      videoInfo: Object,
      videoDanmuku: []
    }
  },
  methods: {
    getChannelInfo() {
      activeInstance.get(`/api/v1${this.$route.path}?t=${Date.now()}`).then(this.getChannelInfoSucc)
    },
    getChannelInfoSucc(res) {
      res = res.data
      if (res.code === 0) {
        this.videoInfo = res.data
        this.isDataLoaded = true;
      }
    },
    getChannelDanmuku() {
      const routePath = this.$route.path; // 获取路由路径，例如 'http://127.0.0.1:18888/video/1'
      const dynamicParamValue = routePath.split('/').pop(); // 提取最后一个参数值，即 '1'

      activeInstance.get(`/api/v1/video/danmu/${dynamicParamValue}`).then(this.getChannelDanmukuSucc)
    },
    getChannelDanmukuSucc(res) {
      res = res.data
      if (res.code === 0) {
        this.videoDanmuku = res.data
      }
    }
  },
  mounted() {
    this.getChannelInfo()
    this.getChannelDanmuku()
  }
}
</script>

<style scoped>
</style>
