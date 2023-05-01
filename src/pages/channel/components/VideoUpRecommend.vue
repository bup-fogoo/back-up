<template>
  <div class="cover">
    <div class="up-about">
      <span>博主相关</span>
      <i class="iconfont"></i>
    </div>
    <div class="padding-list">
      <ul class="list">
        <li class="list-box"
            v-for="up of upRecommend"
            :key="up.id"
        >
          <router-link
              role="link"
              :to="'/video/' + up.id"
              @click.native="refresh"
          >
            <div class="bfs-img">
              <img :src="up.cover_url" @load="handleImageLoad" @error="handleImageError"/>
            </div>
            <div class="gradient" :to="up.url"></div>
            <div class="current">
                <span>
                  {{ up.title }}
                </span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'VideoUpRecommand',
  loadingError: false,
  props: {
    title: {type: String, default: '视频推荐列表'},
    upRecommend: {type: Array, default: () => []}
  },
  methods: {
    getChannelInfo() {
      axios.get(`/api/v1/videos`).then(this.getChannelRecommendSucc)
    },
    getChannelRecommendSucc(res) {
      res = res.data
      if (res.code === 0) {
        this.upRecommend = res.data
      }
    },
    handleImageLoad() {
      this.loading = false
    },
    handleImageError(event) {
      // 处理加载失败的情况
      event.target.src = 'https://img.win3000.com/m00/a0/67/af98e3666efe3e454f27d1191832b407.jpg'
    },
    refresh() {
      this.$router.go(0)
      // location.reload()
    }
  },
  mounted() {
    this.getChannelInfo()
  }
}
</script>

<style scoped>
.cover {
  border-bottom: 0.26667vw solid rgba(207, 207, 207, 0.3);
}

.up-about {
  padding: 0 3.3vw;
  height: 11.73333vw;
  line-height: 11.73333vw;
}

.padding-list {
  padding: 0 3.3vw;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.list {
  /*touch-action: none;*/
  overflow: Scroll;
  overflow-y: hidden;
  display: inline-block;
  clear: both;
  white-space: nowrap;
  overflow-x: auto;
  width: 100%;
}

.list-box {
  margin: 0 2.333333vw 0 0vw;
  display: inline-block;
  width: 31.2vw;
  height: 19.46667vw;
  position: relative;
  border-radius: 1.6vw;
}

.bfs-img {
  width: 100%;
}


.bfs-img img {
  width: 31.2vw;
  height: 19.46667vw;
  border-radius: 1.6vw;
}

.gradient {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  opacity: 0.4;
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      to(#000)
  );
  /* background-image: linear-gradient(-180deg,transparent,#000); */
  border-radius: 1.6vw;
}


.current span {
  height: 8vw;
  margin: 2vw 0;
  font-size: 3.2vw;
  color: #505050;
  line-height: 4.26667vw;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  user-select: none;
}

</style>
