<template>
  <div>
    <channelHeader/>
    <div v-if="isDataLoaded">
      <channelVideoPlayer :videoInfo="videoInfo"/>
      <VideoInfo :videoInfo="videoInfo"/>
      <RelatedRecommend/>
    </div>
    <loading v-else/>
  </div>
</template>

<script>
import channelHeader from '@/pages/home/components/Header'
import channelVideoComment from "@/pages/channel/components/VideoComment";
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
    channelVideoComment,
    VideoInfo,
    RelatedRecommend,
    loading
  },
  data() {
    return {
      isDataLoaded: false,
      contentList: [],
      videoInfo: Object
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
        console.log(this.videoInfo)
        this.isDataLoaded = true;
      }
    }
  },
  mounted() {
    this.getChannelInfo()
  }
}
</script>

<style scoped>
</style>
