<template>
  <div ref="dplayer"></div>
</template>

<script>
import DPlayer from 'dplayer'

export default {
  name: 'DPlayer',
  props: {
    url: String,
    pic: String,
    subtitle: Array,
    danmaku: {
      type: Object,
      default() {
        return {
          id: '',
          api: '',
          token: '',
          maximum: 1000,
          addition: [],
          user: 'DIYgod',
          bottom: '15%',
          unlimited: true
        }
      }
    },
    theme: {
      type: String,
      default: '#b7daff'
    },
    loop: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    preload: {
      type: String,
      default: 'auto'
    },
    volume: {
      type: Number,
      default: 0.7
    },
    speed: {
      type: Array,
      default() {
        return [0.5, 0.75, 1, 1.25, 1.5, 2]
      }
    },
    screenshot: {
      type: Boolean,
      default: false
    },
    hotkey: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    const options = {
      video: {
        url: this.url,
        pic: this.pic,
        type: 'auto'
      },
      danmaku: this.danmaku,
      subtitle: this.subtitle,
      theme: this.theme,
      loop: this.loop,
      autoplay: this.autoplay,
      preload: this.preload,
      volume: this.volume,
      speed: this.speed,
      screenshot: this.screenshot,
      hotkey: this.hotkey
    }
    this.player = new DPlayer(Object.assign({}, options, this.$attrs))
    this.player.on('play', () => {
      this.$emit('play')
    })
    this.player.on('pause', () => {
      this.$emit('pause')
    })
    this.player.on('ended', () => {
      this.$emit('ended')
    })
    this.player.on('error', (e) => {
      this.$emit('error', e)
    })
  },
  beforeDestroy() {
    this.player && this.player.destroy()
  }
}
</script>
