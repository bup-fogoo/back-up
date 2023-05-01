<template>
  <div class="swich">
    <div class="swich-title">
      <span @click="handleRecommend" :class="showComment===0 ? 'swich-color' : ''">相关推荐</span>
      <span @click="handleComment" :class="showComment===1 ? 'swich-color' : ''">评论0</span>
    </div>
    <div class="swich-list-box" :class="showComment===1 ? 'display-open' : ''">
      <div class="swich-list">
        <div class="list-box"
             v-for="rr of RelateRecommend"
             :key="rr.id"
        >
          <router-link
            role="link"
            :to="'/video/' + rr.id"
            :key="rr.id"
            @click.native="refresh"
          >
            <img
              :src="rr.cover_url"
              @load="handleImageLoad" @error="handleImageError"
              alt=""
            />
            <p>
              {{ rr.title }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RelatedRecommend',
  loadingError: false,
  data () {
    return {
      RelateRecommend: [],
      showComment: 0
    }
  },
  methods: {
    getChannelInfo () {
      axios.get(`/api/v1/videos`).then(this.getChannelRelationSucc)
    },
    getChannelRelationSucc (res) {
      res = res.data
      if (res.code === 0) {
        this.RelateRecommend = res.data
        console.log(this.RelateRecommend)
      }
    },
    handleRecommend: function () {
      if (this.showComment === 1) {
        this.showComment = 0
      }
      if (this.showComment === 0) {
        this.showComment = 0
      }
    },
    handleComment: function () {
      if (this.showComment === 1) {
        this.showComment = 0
      }
      if (this.showComment === 0) {
        this.showComment = 1
      }
    },
    handleInput: function () {
      this.$message.info('add comment')
    },
    handleImageLoad () {
      this.loading = false
    },
    handleImageError (event) {
      // 处理加载失败的情况
      event.target.src = 'https://img.win3000.com/m00/a0/67/af98e3666efe3e454f27d1191832b407.jpg'
    },
    refresh () {
      this.$router.go(0)
      // location.reload()
    }
  },
  mounted () {
    this.getChannelInfo()
  }
}
</script>

<style scoped>
.swich-color {
  color: #66c6f6;
}
.list-box img {
  border-radius: 2vw;
  background-size: 36%;
  width: 100%;
  height: 24.881111vw;
}

.list-box {
  width: 44.9933333vw;
  display: inline-block;
}
.list-box p {
  font-size: 3.2vw;
  line-height: 4vw;
  color: #212121;
  margin: 2.6vw 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.swich-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.swich {
  padding: 0 3.3vw;
}

.swich-title {
  display: flex;
  justify-content: space-evenly;
}

.swich-title span {
  height: 11.73333vw;
  line-height: 11.73333vw;
}



</style>
