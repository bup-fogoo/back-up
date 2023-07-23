<template>
  <div id="video-player"></div>
</template>
<script>
import Player, {Danmu} from 'xgplayer';
import Mp4Plugin from "xgplayer-mp4"
import 'xgplayer/dist/index.min.css';
import HlsPlugin from 'xgplayer-hls';
import 'xgplayer/es/plugins/danmu/index.css'
import Vue from 'vue/dist/vue.js';
import {getRandomTime} from "@/common/js/random-time";
import {Events} from 'xgplayer'

// 创建发送弹幕的组件
const DanmuSender = Vue.extend({
  template: `
    <div class="bullet-chat" data-index="3">
    <div style="margin: 6px;display: flex;">
      <input type="text" v-model="message" placeholder="Send a danmu">
      <button @click="sendDanmu()">Send</button>
    </div>
    </div>
  `,
  data() {
    return {
      message: ''
    };
  },
  methods: {
    sendDanmu() {
      if (this.message.trim() !== '') {
        this.$emit('send-danmu', this.message); // 触发发送弹幕的事件并传递数据
        this.message = '';
      }
    }
  },
});

export default {
  name: "XgPlayer",
  components: {
    DanmuSender
  },
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
    danmukus: {
      type: Array,
      default: () => []
    },
  },
  template: `
    <div>
    <xg-player ref="player" :options="player.config"></xg-player>
    </div>
  `,
  data() {
    return {
      value: "",
      player: Player, //实例
      isFullscreen: false,
      danmuku: [],
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
    this.$nextTick(() => {
      // console.log(this.$el); // 在DOM渲染完成后访问$el属性
      const controlBar = this.$el.querySelector('.xg-left-grid');
      const danmuSender = new DanmuSender().$mount();
      controlBar.appendChild(danmuSender.$el);
      danmuSender.$on('send-danmu', (data) => {
        const currentTimeInSeconds = this.player.currentTime; // 获取当前播放时间，单位为秒
        const currentTimeInMilliseconds = Math.floor(currentTimeInSeconds * 1000); // 将秒转换为毫秒
        const danmuData = {
          //发送弹幕
          duration: 15000,
          start: currentTimeInMilliseconds,
          id: getRandomTime(),
          txt: data,
          style: {
            color: '#eee',//ff9500
            fontSize: '20px',
            border: 'solid 0px #3e3e3e',
            borderRadius: '20px',
            padding: '5px 10px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }
        };
        const routePath = this.$route.path; // 获取路由路径，例如 'http://127.0.0.1:18888/video/1'
        const dynamicParamValue = routePath.split('/').pop(); // 提取最后一个参数值，即 '1'
        fetch(`/api/v1/video/danmu/${dynamicParamValue}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(danmuData)
        })
            .then(response => {
              if (response.ok) {
                this.player.danmu.sendComment(danmuData)
                // 请求成功处理
                console.log("弹幕已成功发送");
              } else {
                // 请求失败处理
                console.error("发送弹幕时出现错误");
              }
            })
            .catch(error => {
              console.error("发送弹幕时出现错误", error);
            });
        // this.$store.dispatch('sendDanmu', danmuData);
        // console.log(this.$store.getters.getDanmukus); // 尝试访问 getDanmukus getter
      })
    });
  },
  created() {
    const defaultValue = {
      duration: 15000,
      id: 'default',
      start: 2000,
      txt: '请不要相信视频中的广告 Don\'t visit it.',
      mode: 'scroll',
      prior: false,
      color: false,
      style: {
        color: '#eee',
        fontSize: '20px',
        border: 'solid 0px #3e3e3e',
        borderRadius: '20px',
        padding: '5px 10px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      },
    }
    if (this.danmukus == null) {
      this.danmuku = [defaultValue]
      return
    }
    this.danmuku = [defaultValue, ...this.danmukus];
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
        fitVideoSize: 'auto',
        ignores: ['volume'], // 忽略手机版本的音频控制按钮
        mobile: {
          gestureY: true,//是否启用垂直手势处理，默认值true, 垂直手势包括屏幕右侧和屏幕左侧，默认左侧调节亮度，右侧调节音量
          disablePress: false, // 是否禁用时间预览面板
        },

        volume: {},

        dynamicBg: {
          disable: true // 手机竖屏的视频bg动态模糊
        },

        controls: {
          autoHide: true,
          mode: "normal",
        },

        /** danmu **/
        defaultOpen: true,
        closeDefaultBtn: true,
        danmu: {
          panel: false,// 弹幕样式设置
          closeDefaultBtn: false, //开启此项后不使用默认提供的弹幕开关，默认使用西瓜播放器提供的开关
          defaultOff: true, //开启此项后弹幕不会初始化，默认初始化弹幕
          opacity: .5,
          comments: this.danmuku,
          area: {
            start: 0,
            end: 1
          },
        },
        marginControls: false, // 控制栏与视频画面不重叠

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
        // rotate: true //显示旋转按钮
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
          needBackIcon: true,
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
  },
};
</script>

<style>
.bullet-chat {
  margin-left: 16px;
}

.bullet-chat button {
  border: none;
  background-color: #007bff;
  /*#f85959*/
  border-radius: 0 6px 6px 0;
  color: #fffc;
  font-size: 12px;
  cursor: pointer;
}

input[type="text"] {
  font-size: 12px;
  border: none;
  border-radius: 6px 0 0 6px;
  background: rgba(242, 242, 242, 0.38);
}

.bullet-chat button, input[type="text"] {
  padding: 4px 8px;
}

button[type="submit"] {
  border: none;
  font-size: 12px;
  color: #fffc;
  background: #000;
  cursor: pointer;
  transition: background 0.3s ease;
}
</style>

