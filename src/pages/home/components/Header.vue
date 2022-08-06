<template>
  <div>
    <div class="header-fixed">
      <div class="header">
        <div class="header-left" @click="handleMenuClick">
          <span class="iconfont menu-icon"></span>
        </div>
        <!-- <router-link to="/" class="header-logo animate__animated animate__flip"> -->
        <router-link to="/" class="header-logo">
          <h1>AWAS</h1>
        </router-link>
        <span class="header-right" @click="handleSearchClick">
          <div class="iconfont search-icon"></div>
        </span>
      </div>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <div class="menu" @click="handleMenuClick" v-show="showMenu">
        <header-left></header-left>
      </div>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeInRight"
      leave-active-class="animate__animated animate__fadeOutRight"
    >
      <div class="menu" @click="handleSearchClick" v-show="showSearch">
        <div style="height: 60px"></div>
        <div
          class="menu-system"
          style="float: right"
          @click.stop="doSomething($event)"
        >
          <header-right></header-right>
        </div>
      </div>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div
        style="
          position: fixed;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          z-index: 87;
          background: rgba(0, 0, 0, 0.7);
        "
        v-show="showBlock"
      ></div>
    </transition>
    <div style="height: 61px"></div>
  </div>
</template>

<script>
import HeaderLeft from '../components/HeaderBS/HeaderLeft.vue'
import HeaderRight from '../components/HeaderBS/HeaderRight.vue'
export default {
  name: 'HomeHeader',
  data () {
    return {
      showMenu: false,
      showSearch: false,
      showBlock: false
    }
  },
  components: {
    HeaderLeft,
    HeaderRight
  },
  methods: {
    handleMenuClick () {
      if (this.showSearch === false) {
        this.showMenu = !this.showMenu
        this.showBlock = !this.showBlock
      } else {
        this.showMenu = false
      }
    },
    handleSearchClick () {
      if (this.showMenu === false) {
        this.showSearch = !this.showSearch
        this.showBlock = !this.showBlock
      } else {
        this.showSearch = false
      }
    },
    logout () {
      alert('logout succ')
      // 清除token
      localStorage.removeItem('aikan_user_token', '')
      // 清除用户信息
      localStorage.removeItem('aikan_user_info', '')
      // 刷新页面，跳转到主页面
      location.reload()
    }
  }
}
</script>

<style>
/* 可以设置不同的进入和离开动画   */
/* 设置持续时间和动画函数        */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.header-fixed {
  position: fixed;
  width: 100%;
  z-index: 99;
}
.header {
  display: flex;
  line-height: 1.1rem;
  backdrop-filter: saturate(5) blur(20px);
  background: rgba(255, 255, 255, 0.8);
  color: #4e5358; /* header colos */
  box-shadow: 0 0 4px 10px rgba(138, 138, 138, 0.08);
}
.header-left {
  width: 0.64rem;
  float: left;
  padding: 0 0.2rem;
}
.menu-icon::before {
  content: "\e6b6";
  text-align: center;
  font-size: 0.6rem;
}
.header-logo {
  display: inline;
  height: 0.64rem;
  line-height: 0.64rem;
  text-align: center;
  margin: auto 0;
  padding: 0 0.2rem;
  flex: 1;
  border-radius: 20px;
  color: #6c6; /* logo colos #6ca */
}
.header-logo h1 {
  font-size: 0.6rem;
}
.header-right {
  width: 0.64rem;
  float: right;
  padding: 0 0.2rem;
}
.search-icon::before {
  content: "\e6ce";
  text-align: center;
  font-size: 0.6rem;
}
.menu {
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 88;
}

</style>
