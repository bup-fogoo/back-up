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

.block-info {
  /* margin: 3vw 3.3vw 0vw 3.3vw;
  background: #fff;
  border-radius: 2vw; */
  padding: 3vw 3.3vw 0vw 3.3vw;
}

.block-info-title {
  display: flex;
  line-height: 4vw;
}

.block-info-title div {
  height: 4vw;
  display: flex;
  padding: 0 1.6vw;
  border-radius: 2.66667vw;
  box-shadow: 0 0 1.6vw rgba(255, 255, 255, 0.9);
}

.block-info-title span::before {
  content: "\e6e7";
  font-size: 3.2vw;
  color: #6cf;
  line-height: 4vw;
}

.block-info-title h1 {
  /* 保持不换行 */
  word-break: keep-all;
  margin: 0 1vw;
  font-size: 3.2vw;
  color: #6cf;
}

.block-info-title h2 {
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 4.3vw;
  line-height: 5vw;
}

.up-info {
  padding-top: 2vw;
  display: flex;
  align-items: center;
}

.face-img img {
  margin: 0 3vw 0 0;
  width: 9.6vw;
  height: 9.6vw;
  border-radius: 4.8vw;
  border: 0.49999px solid #ccc;
}

.face-up span {
  font-size: 3.73333vw;
  color: #212121;
  display: block;
  height: 4.53333vw;
  line-height: 4.53333vw;
}

.face-up p {
  margin-top: 1.33333vw;
  font-size: 3.2vw;
  height: 3.2vw;
  line-height: 3.2vw;
  color: #999;
}

.follow-add {
  margin-left: auto;
  display: inline-block;
  text-align: center;
  width: 17.6vw;
  height: 6.4vw;
  line-height: 6.4vw;
  border: 1px solid #6cf;
  color: #6cf;
  border-radius: 1.06667vw;
  font-size: 3.46667vw;
}

.follow-add i::before {
  font-size: 4.26667vw;
  content: "\e665";
}

.data,
.desc p {
  font-size: 3.2vw;
  line-height: 4vw;
  margin-top: 2.66667vw;
  color: #999;
  white-space: pre-wrap;
}

.data span {
  margin-right: 2vw;
}

.toolbar :nth-child(4) {
  float: right;
}

.toolbar-icon-like i,
.toolbar-icon-like-true i,
.toolbar-icon-dislike i,
.toolbar-icon-collection i,
.toolbar-icon-share i {
  line-height: 4.26667vw;
  height: 4.26667vw;
  font-size: 5.26667vw;
  text-align: center;
  color: #999;
  vertical-align: middle;
}

.toolbar-icon-like span,
.toolbar-icon-dislike span,
.toolbar-icon-collection span {
  margin-right: 20px;
  margin-left: 2px;
}

.toolbar-icon-like i::before {
  content: "\e6d6";
}

.toolbar-icon-like-true i::before {
  content: "\e708";
}

.toolbar-icon-dislike i::before {
  content: "\e684";
}

.toolbar-icon-collection i::before {
  content: "\e69b";
}

.toolbar-icon-share i::before {
  content: "\e6cf";
}

.toolbar span {
  /*display: inline-block;*/
  line-height: 4.26667vw;
  height: 4.26667vw;
  font-size: 2.6666667vw;
  color: #999;
}

.toolbar-icon {
  height: 4.26667vw;
  margin-bottom: 2vw;
}

.toolbar {
  border-bottom: 0.26667vw solid rgba(207, 207, 207, 0.3);
}

.up-about i {
  float: right;
}

.up-about i::before {
  content: "\e694";
}


</style>
