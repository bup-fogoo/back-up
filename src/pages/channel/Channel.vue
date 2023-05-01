<template>
  <div>
    <channel-header></channel-header>
    <channel-PlayerWrap></channel-PlayerWrap>
<!--    <VideoComment/>-->
  </div>
</template>

<script>
import channelHeader from '@/pages/home/components/Header'
import VideoComment from "@/pages/channel/components/VideoComment";
import channelPlayerWrap from '@/pages/channel/components/VideoPlayer'
// import axios from 'axios'

export default {
  name: 'Channel',
  components: {
    channelHeader,
    channelPlayerWrap,
    VideoComment
  },
  data() {
    return {
      contentList: []
    }
  },
  methods: {
    getChannelInfo() {
      // axios.get('/api/v1/channel').then(this.getChannelInfoSucc)
    },
    getChannelInfoSucc(res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        this.contentList = data.contentList
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
