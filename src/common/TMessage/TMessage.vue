<template>
  <transition name="message-fade">
    <div :class="[
                        'message',
                        'message-' + type,
                        center ? 'is-center' : ''
                    ]"
         :style="{top: offset + 'px'}"
         v-if="!closed"
    >
      <p class="message-content">提示信息：{{ message }}</p>
<!--      <i class="icon icon-close"></i>-->
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TMessage',

  data () {
    return {
      message: '这是默认信息',
      type: 'success',
      center: true,
      offset: 60,
      closed: false,
      duration: 2000,
      timer: null,
      onClose: null
      // 扩充一个功能 弹框消失后触发
    }
  },

  mounted () {
    this.timer = setTimeout(() => {
      if (!this.closed) {
        this.close()
      }
    }, this.duration)
  },
  methods: {
    close () {
      this.closed = true
      // 当弹框消失时会调用this.onClose()该函数方法
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    }
  }
}
</script>
