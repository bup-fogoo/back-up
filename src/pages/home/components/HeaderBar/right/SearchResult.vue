<template>
  <div class="search-result">
    <!-- 渲染视频列表 -->
    <ul class="video-list">
      <li v-for="(item, index) in videoList" :key="index">
        <a :href="item.link" class="video-link">
          <div class="video-cover">
            <img :src="item.coverUrl" alt="video cover" class="cover-image">
            <span class="duration">{{ item.duration }}</span>
          </div>
          <div class="video-info">
            <h3 class="video-title">{{ item.title }}</h3>
            <div class="meta-info">
              <span class="play-count">{{ item.playCount }}次播放</span>
              <span class="publish-time">{{ item.publishTime }}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>

    <!-- 当列表为空时显示提示信息 -->
    <p v-if="!videoList.length" class="no-results">没有找到匹配的视频</p>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: {
    query: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      videoList: [], // 视频列表
      loading: false // 是否正在加载
    }
  },
  methods: {
    fetchVideoList () {
      // 发送请求获取视频数据
      this.loading = true
      fetch(`https://example.com/videos?query=${this.query}`)
        .then((response) => response.json())
        .then((data) => {
          this.videoList = data.results
          this.loading = false
        })
        .catch((error) => {
          console.error(error)
          this.loading = false
        })
    }
  },
  mounted () {
    // 组件渲染完毕后立即获取视频列表
    this.fetchVideoList()
  }
}
</script>

<style scoped>
.video-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.video-list li {
  margin-bottom: 20px;
}

.video-link {
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
}

.video-cover {
  position: relative;
  width: 200px;
  height: 120px;
  overflow: hidden;
  margin-right: 16px;
}

.cover-image {
  width: 100%;
  height: auto;
  display: block;
}

.duration {
  position: absolute;
  bottom: 4px;
  right: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 12px;
  padding: 2px 6px;
}

.video-info {
  flex: 1;
}

.video-title {
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 8px;
}

.meta-info {
  font-size: 14px;
  color: #999;
}
</style>
