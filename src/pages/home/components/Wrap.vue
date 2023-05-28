<template>
  <div class="r-slide-menu">
    <div class="r-slide-menu-wrap" :class="transitionClass" :style="wrapStyle">
      <div class="home-hidden">
        <div class="hh-label">
          <i></i>
          <span>right</span>
        </div>
        <div class="hh-recom">
          <i></i>
          <span>slide</span>
        </div>
      </div>
    </div>
    <div
        class="r-slide-menu-content"
        :class="transitionClass"
        :style="contentStyle"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend"
        @click="handleContentClick"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWrap',
  props: {
    width: {
      type: String,
      default: '250'
    },
    ratio: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      isMoving: false,
      transitionClass: '',
      startPoint: {
        X: 0,
        y: 0
      },
      oldPoint: {
        x: 0,
        y: 0
      },
      move: {
        x: 0,
        y: 0
      }
    }
  },
  computed: {
    wrapStyle() {
      return {
        width: `${this.width}px`,
        left: `-${this.width / this.ratio}px`,
        transform: `translate3d(${this.move.x / this.ratio}px, 0px, 0px)`
      }
    },
    contentStyle() {
      return {
        transform: `translate3d(${this.move.x}px, 0px, 0px)`
      }
    }
  },
  methods: {
    touchstart(e) {
      this.oldPoint.x = e.touches[0].pageX
      this.oldPoint.y = e.touches[0].pageY
      this.startPoint.x = this.move.x
      this.startPoint.y = this.move.y
      this.setTransition()
    },
    touchmove(e) {
      let newPoint = {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
      }
      let moveX = newPoint.x - this.oldPoint.x
      let moveY = newPoint.y - this.oldPoint.y
      if (Math.abs(moveX) < Math.abs(moveY)) return false
      e.preventDefault()
      this.isMoving = true
      moveX = this.startPoint.x * 1 + moveX
      moveY = this.startPoint.y + moveY

      if (moveX >= this.width) {
        this.move.x = this.width
      } else if (moveX <= 0) {
        this.move.x = 0
      } else {
        this.move.x = moveX
      }
    },
    touchend(e) {
      this.setTransition(true)
      this.isMoving = false
      this.move.x = this.move.x > this.width / this.ratio ? this.width : 0
    },
    // 点击切换
    switch() {
      this.setTransition(true)
      this.move.x = this.move.x === 0 ? this.width : 0
    },
    setTransition(isTransition = false) {
      this.transitionClass = isTransition ? 'r-slide-menu-transition' : ''
    },
    handleContentClick: function () {
      this.move.x = 0
    }
  }
}
</script>

<style>
.hh-label,
.hh-recom {
  width: 200px;
  line-height: 30px;
}

.r-slide-menu-wrap,
.r-slide-menu-content {
  /* 滑动的速度 */
  -webkit-transition: transform 0.5s;
  transition: transform 0.5s;
  will-change: transform;
}

html:root {
  --animate-duration: 0.6s !important;
  --animate-delay: 0.5s !important;
  --animate-repeat: 0.5s !important;
}

.r-slide-menu-content {
  background: #f5f6f7;
  /* background-image: linear-gradient(to right, #a8edea, #fed6e3); */
}

.r-slide-menu-wrap {
  position: absolute;
  /* background-image: linear-gradient(to right, #fed6e3, #a8edea); */
}

.home-hidden {
  height: 100%;
  margin: 3.3vw;
  padding: 3.3vw;
  /* background-image: linear-gradient(to right, #d4fc79, #96e6a1); */
  border-radius: 3.3vw;
}
</style>
