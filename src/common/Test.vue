<template>
  <div>
    <input type="text" placeholder="Send a friendly danmu.">
    <button @click="addDanmu()">Send</button>
  </div>
</template>

<script>
export default {
  name: "test",
  methods: {
    addDanmu(message) {
      console.log(message)
      if (1) {
        const danmuData = {
          //发送弹幕
          duration: 15000,
          start: 5000,
          id: 11,
          txt: message,
          style: {
            color: '#eee',//ff9500
            fontSize: '20px',
            border: 'solid 0px #3e3e3e',
            borderRadius: '20px',
            padding: '5px 10px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }
        };
        console.log(danmuData)
        // 调用 sendDanmu action
        this.$store.dispatch('sendDanmu', danmuData);
        console.log(this.$store); // 检查 Vuex index
        console.log(this.$store.getters.getDanmukus); // 尝试访问 getDanmukus getter
      }
    }
  }
}
</script>
<style scoped>

</style>
