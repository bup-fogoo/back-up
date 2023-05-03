<template>
  <div>
    <div class="r-slide-menu">
      <div class="block-video">
        <div v-if="videoInfo">
          <video-mui-player
              :url="videoInfo.url.toString()"
              :cover="videoInfo.cover_url.toString()"
              :title="videoInfo.title.toString()"
          ></video-mui-player>
        </div>
        <div v-else>
          <loading/>
        </div>
      </div>
      <video-info :videoInfo="videoInfo"></video-info>
      <!--      <video-up-recommend></video-up-recommend>-->
      <related-recommend></related-recommend>
    </div>
  </div>
</template>
<script>
import VideoUpRecommend from '@/pages/channel/components/VideoUpRecommend'
import VideoInfo from '@/pages/channel/components/VideoInfo'
import VideoMuiPlayer from '@/pages/channel/components/VideoMUIPlayer'
import RelatedRecommend from '@/pages/channel/components/RelatedRecommend'
import loading from "@/common/components/loading";
import axios from 'axios'
import storageService from '../../home/service/storageService'


export default {
  name: 'ChannelVideoPlayer',
  components: {
    VideoUpRecommend,
    VideoMuiPlayer,
    VideoInfo,
    RelatedRecommend,
    loading
  },
  props: {
    list: Array
  },
  data() {
    return {
      videoInfo: null
    }
  },
  methods: {
    getChannelInfo() {
      axios.get(`/api/v1${this.$route.path}?t=${Date.now()}`).then(this.getChannelInfoSucc)
    },
    getChannelInfoSucc: function (res) {
      res = res.data
      if (res.code === 0) {
        this.videoInfo = res.data
      }
    }
  },
  mounted() {
    this.getChannelInfo()
  }
}
</script>

<style>
/* 评论区显示与否*/
.display-open {
  display: none !important;
}


.build-img img {
  width: 100%;
  height: 100%;
}

.build-img {
  display: inline-block;
  overflow: hidden;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
}


.block-video {
  /*height: 56.26667vw;*/
  width: 100vw;
}

.block-video img {
  overflow: hidden;
  width: 100%;
  height: 56.8vw;
}




</style>
