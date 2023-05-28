<template>
  <div class="c-popup">
    <div @click="handleClick"
         style="
                position: fixed;
                height: 100%;
                top: 0;
                left: 0;
                right: 0;
                z-index:999;
                background: rgba(0, 0, 0, 0.7);
              "
    ></div>
    <div style="padding: 0">
      <div
          class="c-popup-box"
          style="height: 20%; z-index: 1000; padding: 3.3vw"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  data() {
    return {
      close: false // 默认false
    }
  },
  methods: {
    handleClick(status) {
      this.close = true;
      this.$emit("status", status);
    }
  }
}
</script>

<style scoped>
.c-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  transition-property: visibility, opacity;
  transition-duration: 0.3s;
}

.c-popup.is-visible {
  visibility: visible;
  opacity: 1;
}

.c-popup-box {
  position: fixed;
  bottom: 0;
  margin-bottom: -11px;
  right: 0;
  left: 0;
  border-radius: 3.3vw;
  max-height: 100%;
  overflow-y: auto;
  background-color: #fff;
  -webkit-overflow-scrolling: touch;
}

.c-popup-box > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
