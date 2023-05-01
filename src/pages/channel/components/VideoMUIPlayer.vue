<template>
  <div class="content-box">
    <div class="container">
      <div id="mui-player">
        <div slot="nextMedia">
          <svg
              t="1584686776454"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1682"
              width="22"
              height="22"
          >
            <path
                d="M783.14692466 563.21664097L240.85307534 879.55472126c-39.1656664 24.10194914-90.38230866-6.02548665-90.38230865-51.21664226v-632.676158c0-45.19115433 51.21664097-75.31859011 90.38230865-51.21664226l542.29384932 316.33808029c39.1656664 21.08920518 39.1656664 81.34407804 0 102.43328194z"
                p-id="1683"
                fill="#ffffff"
            ></path>
            <path
                d="M873.52923331 734.94302767c0 42.17841036-39.1656664 78.33133408-90.38230865 78.33133407s-90.38230866-36.15292371-90.38230735-78.33133407V289.05697233c0-42.17841036 39.1656664-78.33133408 90.38230735-78.33133407s90.38230866 36.15292371 90.38230865 78.33133407v445.88605534z"
                p-id="1684"
                fill="#ffffff"
            ></path>
          </svg>
        </div>
        <div slot="select">Select</div>
      </div>
    </div>
  </div>
</template>
<script>
import MuiPlayer from 'mui-player'
import MuiPlayerDesktopPlugin from 'mui-player-desktop-plugin'

export default {
  name: 'VideoMUIPlayer',
  components: {},
  props: {
    url: String,
    title: String,
    cover: String,
  },
  data() {
    return {}
  },
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let that = this
      // 初始化 MuiPlayer 插件，MuiPlayer 方法传递一个对象，该对象包括所有插件的配置
      var mp = new MuiPlayer({
        container: '#mui-player', // 视频播放容器
        title: this.title,// 视频标题
        src: this.url, //视频地址
        themeColor: '#fa9546',// 主题颜色
        showMiniProgress: true,// 默认显示
        pageHead: false,// 头部是否显示其他图标或提示内容
        volume: 0.5, //声音初始值0-1
        muted: false, //静音
        poster: this.cover,
        autoOrientaion: true, // 全屏时否自动切换方向
        live: false,//是否直播
        loop: false,// 是否默认开启循环
        lang: 'en',
        custom: {
          footerControls: [
            {
              slot: 'nextMedia', // 对应定义的 slot 值
              position: 'left', // 显示的位置，可选 left、right
              tooltip: 'nextMedia', // 鼠标悬浮在控件上显示的文字提示
              oftenShow: false, // 是否常显示。默认为false，在 mobile 环境下竖屏状态下隐藏，pc环境判下视频容器小于500px时隐藏
              click: function (e) {
                // 按钮点击事件回调
                console.log('next media button click...', e)
              },
              style: {
                backgroud: '000',
                color: '000'
              } // 自定义添加控件样式
            },
            {
              slot: 'select', // 对应定义的 slot 值
              position: 'right', // 显示的位置，可选 left、right
              tooltip: 'select', // 鼠标悬浮在控件上显示的文字提示
              oftenShow: false, // 是否常显示。默认为false，在 mobile 环境下竖屏状态下隐藏，pc环境判下视频容器小于500px时隐藏
              click: function (e) {
                // 按钮点击事件回调
                console.log('next media button click...', e)
                that.$message({
                  message: '警告哦，这是一条警告消息',
                  type: 'warning'
                })
              },
              style: {
                // background: 'rgba(255,255,255, 0.1)',
                color: '#fff',
                width: '50px',
                fontsize: "10px",
                marginLeft: '100px'
              } // 自定义添加控件样式
            }
          ]
        },
        plugins: [
          // pc端插件配置
          new MuiPlayerDesktopPlugin({
            customSetting: [
              {
                functions: '清晰度',
                model: 'select',
                show: true,
                zIndex: 0,
                childConfig: [
                  {functions: '蓝光1080P'},
                  {functions: '超清720P'},
                  {functions: '高清480P', selected: true},
                  {functions: '标清360P'},
                ],
                onToggle: function (data, selected, back) {
                  // 先获取视频播放的位置
                  let ct = mp.video().currentTime;
                  let func_name = data.functions;
                  if (func_name === "标清360P") {
                    mp.video().src = "video_url_360P.mp4"
                  } else if (func_name === "高清480P") {
                    mp.video().src = "video_url_480P.mp4"
                  } else if (func_name === "超清720P") {
                    mp.video().src = "video_url_720P.mp4"
                  } else if (func_name === "蓝光1080P") {
                    mp.video().src = "video_url_1080P.mp4"
                  }
                  // 设置切换后的视频位置,回退一秒
                  mp.video().currentTime = ct - 1
                  selected()
                  back(1)
                }
              },
            ], // 设置组配置
            contextmenu: [
              {name: 'muiplayer', show: false},
              {
                name: 'copyPlayUrl',
                context: '复制视频链接',
                zIndex: 0,
                show: true,
                click: function (close) {
                  navigator.clipboard.writeText(mp.video().currentSrc).then(() => {
                    mp.showToast({
                      message: "视频地址复制成功",
                      fontsize: "10px",
                      // color:"#101",
                      background: "rgba(0,255,0)"
                    })
                  })
                }
              },
            ], // 右键菜单组配置
            // thumbnails,  // 缩略图配置 需要ffmpeg 生成缩略图 暂时不弄
            // # 创建指定宽高比160:90，缩略图排列规则10x10 的视频缩略图ffmpeg -i video.mp4 -vsync vfr -vf "select=isnan(prev_selected_t)+gte(t-prev_selected_t\,1),scale=160:90,tile=10x10" -qscale:v 3 "output%03d.jpg"
          })
        ]
      })
    }
  }
}
</script>

<style scoped>
</style>
