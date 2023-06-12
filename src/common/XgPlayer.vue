<template>
  <div id="video-player">
    <!-- 弹幕 -->
    <div class="bullet-chat controls-autohide" v-show="isFullscreen">
      <div class="danmu-box-input">
        <input v-on:focus="pauseVideo" v-model="value" type="text"
               placeholder="Send a friendly danmu."/>
        <button @click="sendDanmuMsg(value)">Send</button>
      </div>
    </div>
  </div>
</template>
<script>
import Player, {Danmu} from 'xgplayer';
import Mp4Plugin from "xgplayer-mp4"
import 'xgplayer/dist/index.min.css';
import HlsPlugin from 'xgplayer-hls';
import 'xgplayer/es/plugins/danmu/index.css'

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
      value: "",
      player: null, //实例
      isFullscreen: false,
      danmuID: 100,
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
    this.player.on(Events.FULLSCREEN_CHANGE, (isFullscreen) => {
      this.isFullscreen = !!isFullscreen;
    });

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
        // fitVideoSize: 'auto',

        controls: {
          autoHide: true,
          mode: "normal",
          mute: false, // 不显示控制声音的按钮
        },

        /** danmu **/
        defaultOpen: true,
        closeDefaultBtn: true,
        danmu: {
          panel: false,// 弹幕样式设置
          closeDefaultBtn: false, //开启此项后不使用默认提供的弹幕开关，默认使用西瓜播放器提供的开关
          defaultOff: true, //开启此项后弹幕不会初始化，默认初始化弹幕
          opacity: .5,
          comments: [
            {
              duration: 15000,
              id: '1',
              start: 2000,
              txt: '请不要相信视频中的广告，不好奇，不访问 Please don\'t believe the advertisement in the video, don\'t visit it.',
              mode: '',//显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll
              prior: false, //该条弹幕优先显示，默认false
              color: false, //该条弹幕为彩色弹幕，默认false
              style: {  //弹幕自定义样式
                color: '#eee',
                fontSize: '20px',
                border: 'solid 0px #3e3e3e',
                borderRadius: '20px',
                padding: '5px 10px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            },
          ],
          area: {
            start: 0,
            end: 1
          },
        },

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
        plugins: [Mp4Plugin, HlsPlugin, Danmu],
        mp4plugin: {
          maxBufferLength: 100,
          minBufferLength: 10,
          retryCount: 3,
          retryDelay: 1000, // 每次重试间隔 1 秒，默认值
          timeout: 10000, // 请求超时时间为 10 秒，默认值
        },
        hls: {
          maxBufferLength: 100,
          minBufferLength: 10,
          retryCount: 3, // 重试 3 次，默认值
          retryDelay: 1000, // 每次重试间隔 1 秒，默认值
          loadTimeout: 10000, // 请求超时时间为 10 秒，默认值
          fetchOptions: {
            // 该参数会透传给 fetch，默认值为 undefined
            mode: 'cors'
          }
        },
        // ios全屏被接管，开启这个则网页全屏
        fullscreen: {
          useCssFullscreen: true, // 全屏按钮将会调用页面内全屏
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
    sendDanmuMsg(val) {
      this.player.danmu.sendComment({
        //发送弹幕
        duration: 15000,
        id: "chat" + this.danmuID++,
        txt: val,
        style: {
          color: '#eee',//ff9500
          fontSize: '20px',
          border: 'solid 0px #3e3e3e',
          borderRadius: '20px',
          padding: '5px 10px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      });
      this.value = null;
      console.log(this.danmuID);
    },
    pauseVideo() {
      this.player.pause(); // 暂停视频
    },
  },
};
</script>

<style>
.bullet-chat {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.bullet-chat button {
  border: none;
  background-color: #007bff;
  /*#f85959*/
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.danmu-box-input {
  display: flex;
  /*width: 30%;*/
  /*height: 40px;*/
  border-radius: 25px;
  overflow: hidden;
}

input[type="text"] {
  width: 100%;
  font-size: 14px;
  border: none;
  border-radius: 25px 0 0 25px;
  background: #f2f2f2;
}

.bullet-chat button, input[type="text"] {
  padding: 10px;
}

button[type="submit"] {
  width: 100px;
  height: 44px;
  border: none;
  font-size: 14px;
  color: #fff;
  background: #000;
  border-radius: 0 25px 25px 0;
  cursor: pointer;
  transition: background 0.3s ease;
}
</style>

