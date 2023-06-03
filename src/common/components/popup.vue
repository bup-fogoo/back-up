<template>
  <div class="c-popup" @touchmove.prevent>
    <div @click="handleClick"
         @touchmove.prevent
         style="
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index:999;
                background: rgba(0, 0, 0, 0.7);
              "
    ></div>
    <div class="c-popup-box">
      <div class="horizontal-line">
        <span class="line"></span>
      </div>
      <div style="margin:6vw 0">
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
.horizontal-line {
  display: flex;
  align-items: center;
}

.line {
  width: 100%;
  height: 1vw !important;
  border-radius: 1vw;
  margin: 0 38vw;
  background-color: #ccc;
}

.c-popup {
  position: fixed;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  transition-property: visibility, opacity;
  transition-duration: 0.2s;
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
  background-color: #fff;
  z-index: 1000;
  padding: 3.3vw;
}

</style>
