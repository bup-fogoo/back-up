
  function mobT(){
   var sUserAgent = navigator.userAgent.toLowerCase();
   var tourl="";
   var url=document.location.href;
   var pcurl="awas.ink";
   var moblieurl="m.awas.ink";
   if ((sUserAgent.match(/(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i))) {
      //pc端转手机端
      if(url.indexOf(moblieurl)==-1)
      {
        tourl=url.replace(pcurl,moblieurl);
        window.location.href=tourl;
      }
   }
   else{
      //手机端转pc端
      if(url.indexOf("http://styhsoft.eicp.net:4658/test/m/")!=-1)
      {
        tourl=url.replace(moblieurl,pcurl);
        window.location.href=tourl;
      }
   }   
  }
  mobT();


<template>
  <div class="r-slide-menu">
    <div class="r-slide-menu-wrap" :class="transitionClass" :style="wrapStyle">
      <slot name="menu"></slot>
      <div style="height: 61px"></div>
      <div class="menu-bg">
        <div class="header">
          <input type="username" name="" id="" placeholder="username" />
          <input type="password" name="" id="" placeholder="password" />
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

<script scoped>
export default {
  name: "ChannelTab",
  props: {
    width: {
      type: String,
      default: "250",
    },
    ratio: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      isMoving: false,
      transitionClass: "",
      startPoint: {
        X: 0,
        y: 0,
      },
      oldPoint: {
        x: 0,
        y: 0,
      },
      move: {
        x: 0,
        y: 0,
      },
    };
  },
  computed: {
    wrapStyle() {
      let style = {
        width: `${this.width}px`,
        left: `-${this.width / this.ratio}px`,
        transform: `translate3d(${this.move.x / this.ratio}px, 0px, 0px)`,
      };
      return style;
    },
    contentStyle() {
      let style = {
        transform: `translate3d(${this.move.x}px, 0px, 0px)`,
      };
      return style;
    },
  },
  methods: {
    touchstart(e) {
      this.oldPoint.x = e.touches[0].pageX;
      this.oldPoint.y = e.touches[0].pageY;
      this.startPoint.x = this.move.x;
      this.startPoint.y = this.move.y;
      this.setTransition();
    },
    touchmove(e) {
      let newPoint = {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY,
      };
      let moveX = newPoint.x - this.oldPoint.x;
      let moveY = newPoint.y - this.oldPoint.y;
      if (Math.abs(moveX) < Math.abs(moveY)) return false;
      e.preventDefault();
      this.isMoving = true;
      moveX = this.startPoint.x * 1 + moveX * 1;
      moveY = this.startPoint.y * 1 + moveY * 1;

      if (moveX >= this.width) {
        this.move.x = this.width;
      } else if (moveX <= 0) {
        this.move.x = 0;
      } else {
        this.move.x = moveX;
      }
    },
    touchend(e) {
      this.setTransition(true);
      this.isMoving = false;
      this.move.x = this.move.x > this.width / this.ratio ? this.width : 0;
    },
    // 点击切换
    switch() {
      this.setTransition(true);
      this.move.x = this.move.x === 0 ? this.width : 0;
    },
    setTransition(isTransition = false) {
      this.transitionClass = isTransition ? "r-slide-menu-transition" : "";
    },
    handleContentClick: function () {
      this.move.x = 0;
    },
  },
};
</script>

<style>
.r-slide-menu-wrap,
.r-slide-menu-content {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* 滑动的速度 */
  -webkit-transition: transform 0.3s;
  transition: transform 0.3s;
}
.r-slide-menu-content {
  background-image: linear-gradient(to right, #a8edea, #fed6e3);
}
.r-slide-menu-wrap {
  background-image: linear-gradient(to right, #a8edea, #fed6e3);
}
</style>
