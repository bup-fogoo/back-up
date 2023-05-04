<template>
  <div>
    <div class="r-slide-menu">
      <div class="block-video">
        <XgPlayer
            v-if="videoInfo"
            :url="videoInfo.url.toString()"
            :cover="videoInfo.cover_url.toString()"
        />
      </div>
    </div>
  </div>
</template>
<script>
import XgPlayer from "@/common/XgPlayer";


export default {
  name: 'ChannelVideoPlayer',
  components: {
    XgPlayer
  },
  props: {
    videoInfo: Object
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
