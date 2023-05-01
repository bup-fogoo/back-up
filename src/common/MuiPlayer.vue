<template>
  <div id="mui-player"/>
</template>

<script>
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'

export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  mounted() {
    var mp = new MuiPlayer({
      container: '#mui-player',
      title: this.title,
      src: this.src
    })
    // 音量调节时触发
    mp.on('volume-change', function (e) {
      mp.video().volume = e.size;
    });
  },
  methods: {}
}
</script>

<style scoped>

</style>

