<template>
  <div class="player-video iconfont">
    <video
      ref="myvideo"
      @canplay="getTotal"
      @timeupdate="timeupdate"
      @click="togglePlay"
      :poster="poster"
      width="100%" height="100%" style="object-fit:cover"
    >
      <source :src="src" />
    </video>
        <div class="player-icon iconfont" @click="togglePlay" v-show="showPL">
          <span></span>
        </div>
        <div class="loaderGradient" v-show="showLG"></div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="controls-bar" v-show="isShow">
        <div class="controls">
          <div class="con-left">
            <i
              :class="{ 'con-play': !isPause, 'con-pause': isPause }"
              @click="togglePlay"
            ></i>
            <i class="con-next"></i>
            <span>{{ currentTime }}/{{ totalTime }}</span>
          </div>
          <div class="con-right">
            <i
              :class="{ 'con-voice': !isMuted, 'con-muted': isMuted }"
              @click="toggleVoice"
            ></i>
            <i class="con-set"></i>
            <i
              :class="{
                'con-full': !isFullScreen,
                'con-exitFull': isFullScreen,
              }"
              @click="toggleFullScreen"
            ></i>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ChannelPlayerVideo',
  props: ['src', 'poster'],
  data () {
    return {
      isShow: false,
      myvideo: null,
      isPause: false,
      showPL: true,
      showLG: true,
      isMuted: false,
      isFullScreen: false,
      currentTime: '00:00',
      totalTime: '00:00',
      startTime: 0
    }
  },
  mounted () {
    this.myvideo = this.$refs.myvideo

    // 记住起始时间，这个时间可以作为时间间隔的参照
    this.startTime = Date.now()
    // 开启一个定时器
    this.timer = setInterval(() => {
      if (Date.now() - this.startTime > 2000) {
        this.isShow = false
      }
    }, 1000)
  },
  methods: {
    togglePlay () {
      this.isPause = !this.isPause
      this.showPL = !this.showPL
      this.showLG = false
      this.isShow = true
      this.startTime = Date.now()
      if (this.showPL) {
        clearInterval(this.timer)
      } else {
        this.timer = setInterval(() => {
          if (Date.now() - this.startTime > 2000) {
            // this.isShow = false
          }
        }, 1000)
      }
      if (this.isPause) {
        this.myvideo.play()
      } else {
        this.myvideo.pause()
      }
    },
    timeFormat (time) {
      let hour = Math.floor(time / 3600)
      let minute = Math.floor((time % 3600) / 60)
      let second = Math.floor(time % 60)
      hour = hour < 10 ? '0' + hour : hour
      minute = minute < 10 ? '0' + minute : minute
      second = second < 10 ? '0' + second : second
      return `${hour} :${minute}:${second} `
    },
    getTotal () {
      this.totalTime = this.timeFormat(this.myvideo.duration)
    },
    timeupdate () {
      this.currentTime = this.timeFormat(this.myvideo.currentTime)
    },
    // 获取初始化信息
    getInit () {
      if (!this.video) {
        this.totalTime = this.timeFormat(0)
      } else {
        this.totalTime = this.timeFormat(this.myvideo.duration)
      }
    },
    // 播放当前时长和总时长
    handlerTimeUpdate () {
      if (!this.video) {
        this.currentTime = `${this.timeFormat(0)}`
      }
      // 由于一开始不能加载完全视频信息，造成无法解析到准确的时间，所以用短路运算避险
      this.currentTime = this.timeFormat(this.video.currentTime || 0)
    },
    toggleVoice () {
      this.isMuted = !this.isMuted
      this.myvideo.muted = !this.myvideo.muted
    },
    toggleFullScreen (event) {
      const myvideo = this.$refs.myvideo
      // 如果当前是全屏状态，就退出全屏，否则进入全屏状态
      // 获取当前的全屏状态
      let isFullscreen = document.webkitIsFullScreen || document.fullscreen
      if (!isFullscreen) {
        const inFun =
          myvideo.requestFullscreen || myvideo.webkitRequestFullScreen
        // 让当前播放器进入全屏状态
        inFun.call(myvideo)
      } else {
        const exitFun =
          document.exitFullscreen || document.webkitExitFullScreen
        // 退出全屏状态要使用document
        exitFun.call(document)
      }
    }
  }
}
</script>

<style>

.loaderGradient {
  position: absolute;
  top: 56.26667vw;
  left: 0;
  width: 100%;
  height: 61px;
  opacity: 0.4;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(transparent),
    to(#000)
  );
  background-image: linear-gradient(-180deg, transparent, #000);
}
.controls-bar {
  position: relative;
  padding: 0 3.3vw;
  color: #ccc;
  background: rgba(0, 0, 0, 0.4);
}
video,.player-video {
  width: 100vw;
  height: 56.26667vw;
}
.player-icon {
  position: relative;
  top: 0px;
  right: 0;
  left: 0;
  bottom: 0;
}
.player-icon span::before {
  content: "\e6c0";
}
.player-icon span {
  position: absolute;
  top: -44vw;
  right: 50%;
  -webkit-transform: translateX(50%) translateY(50%);
  transform: translateX(50%) translateY(50%);
  z-index: 3;
  font-size: 16vw;
  color: rgba(255, 255, 255, 0.6);
}
.controls {
  margin-top: -12vw;
  display: flex;
  height: 11.73333vw;
  line-height: 11.73333vw;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  width: 100%;
  margin-right: 12px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  flex: 1;
  font-size: 5.33333vw;
  text-align: center;
  justify-content: space-between;
}
.con-right {
  float: right;
}
.con-play::before {
  content: "\e6c3";
}
.con-pause::before {
  content: "\e71b";
}
.con-next::before {
  content: "\e71c";
}
.con-voice::before {
  content: "\eb5f";
}
.con-muted::before {
  content: "\eb5e";
}
.con-set::before {
  content: "\e68f";
}
.con-full::before {
  content: "\e620";
}
.con-exitFull::before {
  content: "\e61f";
}
</style>
