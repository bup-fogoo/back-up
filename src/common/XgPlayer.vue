<template>
  <div id="video-player" className="video-player"></div>
</template>
<script>
import Player from 'xgplayer';
import Mp4Plugin from "xgplayer-mp4"
import 'xgplayer/dist/index.min.css';
import axios from "axios";

export default {
  name: "XgPlayer",
  props: {
    url: {
      // 父组件传过来的视频链接
      type: String,
      default: '',
    },
    cover: {
      // 父组件传过来的视频封面链接
      type: String,
      default: '',
    },
  },
  data() {
    return {
      player: null, //实例
      start: 0, // 当前已加载的字节起始位置
      end: 885242879, // 当前已加载的字节结束位置,5242879
    };
  },
  mounted() {
    console.log('传过来的url:', this.url);
    // 初始化播放器
    this.initPlayer();
  },
  created() {
  },
  // 监听播放路径的变化
  watch: {
    url: {
      handler(newValue, oldValue) {
        if (!this.player) {
          this.initPlayer();
          return;
        }
        this.player.src = this.url;
      },
    },
  },
  methods: {
    // =========================1，设置播放器必要参数===================
    async initPlayer() {
      if (!this.url) return console.warn('url is not exist');
      const videoElement = document.getElementById("video-player");
      const apiUrl = this.url;
      const base64Url = btoa(apiUrl);
      const proxyUrl = "/api/v1/channel?url=" + encodeURIComponent(base64Url);

      try {
        const response = await axios.get(proxyUrl, {
          responseType: "blob",
          headers: {
            Range: `bytes=${this.start}-${this.end}`,
          },
        });
        const chunk = response.data;
        videoElement.src = URL.createObjectURL(chunk);

        if (response.data) {
          const url = URL.createObjectURL(response.data);
          const config = {
            id: 'video-player',
            url,
            poster: this.cover,
            fluid: true,
            crossOrigin: true,
            lang: "en",
            // theme color #F97B22
            commonStyle: {
              // 进度条底色
              progressColor: '',
              // 播放完成部分进度条底色
              playedColor: '',
              // 缓存部分进度条底色
              cachedColor: '',
              // 进度条滑块样式
              sliderBtnStyle: {},
              // 音量颜色
              volumeColor: ''
            },

            /**倍速播放 */
            playbackRate: [0.5, 0.75, 1, 1.5, 2],
            defaultPlaybackRate: 1,

            playsinline: this.isAppleDevice(), // IOS设备设置，防止被浏览器劫持
            'x5-video-player-type': 'h5', // 微信内置浏览器设置，防止被浏览器劫持
            'x5-video-orientation': 'portraint',
            /**画中画 */
            pip: true,
            pipConfig: {
              bottom: 100,
              right: 100,
              width: 320,
              height: 180,
            },
            // download: true,
            /**初始化首帧 */
            videoInit: true,
            autoplay: false,
            plugins: [Mp4Plugin],
            mp4plugin: {
              maxBufferLength: 50,
              minBufferLength: 10,
            },
            // ios全屏被接管，开启这个则网页全屏
            fullscreen: {
              useCssFullscreen: false // 全屏按钮将会调用页面内全屏
            },
          };
          //========================== 2，开始实例化======================
          const player = new Player(config);

          if (player) {
            this.player = player;
            /* 这里注册监听 */
            // 监听视频开始播放 播放传给父组件的是true
            this.player.on('play', () => {
              this.$emit('triggerEvent', true);
            });
            // 监听视频已经暂停 暂停传给父组件的是true
            this.player.on('pause', () => {
              this.$emit('triggerEvent', false);
            });
            // 监听 视频退出全屏
            // this.player.on('exitFullscreen', () => {
            //   window.scrollTo(0, 0);
            //   console.log('已经退出全屏了');
            // });

            // 在实例化后设置源地址
            this.player.src = url;

          }
        }
      } catch (error) {
        console.error(error);
      }
    },
    // IOS设备设置，防止被浏览器劫持
    isAppleDevice() {
      const ua = navigator.userAgent.toLowerCase();
      return /iphone|ipad|phone|Mac/i.test(ua);
    },
  },
};
</script>

<style></style>

