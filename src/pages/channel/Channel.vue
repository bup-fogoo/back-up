<template>
  <div>
    <channel-header></channel-header>
    <channel-PlayerWrap :list="contentList"></channel-PlayerWrap>
  </div>
</template>

<script>
import channelHeader from '@/pages/home/components/Header'
import channelPlayerWrap from '@/pages/channel/components/PlayerWrap'
// import axios from 'axios'

export default {
  name: 'Channel',
  components: {
    channelHeader,
    channelPlayerWrap
  },
  data () {
    return {
      contentList: []
    }
  },
  methods: {
    getChannelInfo () {
      // axios.get('/api/v1/channel').then(this.getChannelInfoSucc)
    },
    getChannelInfoSucc (res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        this.contentList = data.contentList
      }
    }
  },
  mounted () {
    this.getChannelInfo()
  }
}
</script>

<style scoped>
</style>
