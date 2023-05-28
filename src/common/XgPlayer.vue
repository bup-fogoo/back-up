<template>
  <div id="video-player"></div>
</template>
<script>
import Player from 'xgplayer';
import Mp4Plugin from "xgplayer-mp4"
import 'xgplayer/dist/index.min.css';
import {Events} from 'xgplayer'


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
    };
  },
  mounted() {
    // 初始化播放器
    this.initPlayer();
    // this.player.on(Events.ERROR, (error) => {
    //   alert(JSON.stringify(error))
    //   // 延迟1秒钟后尝试重新加载视频
    //   setTimeout(() => {
    //     alert('Reloading video...');
    //     this.player.reload();
    //     this.player.retry();
    //   }, 1000);
    // })
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
    initPlayer() {
      if (!this.url) return console.warn('url is not esist');
      const config = {
        id: 'video-player',
        url: this.url,
        poster: this.cover,
        fluid: true, // 是否启用流式布局
        lang: "en",

        /**倍速播放 */
        playbackRate: [0.5, 0.75, 1, 1.5, 2],
        defaultPlaybackRate: 1, // 默认起播倍速

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
          retryCount: 3,
          retryDelay: 1000, // 每次重试间隔 1 秒，默认值
          timeout: 10000, // 请求超时时间为 10 秒，默认值
        },
        // ios全屏被接管，开启这个则网页全屏
        fullscreen: {
          useCssFullscreen: true // 全屏按钮将会调用页面内全屏
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

