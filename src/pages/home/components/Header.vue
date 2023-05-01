<template>
  <div>
    <div class="home-header-fixed">
      <div class="home-header">
        <div class="home-header-left" @click="handleMenuClick">
          <span class="iconfont menu-icon"></span>
        </div>
        <router-link to="/" class="home-header-logo">
          <h1>AirJump</h1>
        </router-link>
        <span class="home-header-right" @click="handleSearchClick">
          <div class="iconfont search-icon"></div>
        </span>
      </div>
    </div>
    <!-- 菜单部分 -->
    <transition name="custom-classes-transition"
                enter-active-class="animate__animated animate__fadeInLeft"
                leave-active-class="animate__animated animate__fadeOutLeft">
      <div class="menu" v-show="showMenu">
        <div style="height: 60px"></div>
        <header-left></header-left>
      </div>
    </transition>
    <!-- 搜索部分 -->
    <transition name="custom-classes-transition"
                enter-active-class="animate__animated animate__fadeInRight"
                leave-active-class="animate__animated animate__fadeOutRight">
      <div class="menu" v-show="showSearch">
        <div style="height: 60px"></div>
        <div class="menu-system" style="float: right">
          <header-right></header-right>
        </div>
      </div>
    </transition>
    <!-- 遮罩层 -->
    <transition name="custom-classes-transition"
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut">
      <div class="mask" v-show="showMenu || showSearch" @click="hideMenus"></div>
    </transition>
    <div style="height: 60px"></div>
  </div>
</template>

<script>
import HeaderLeft from './HeaderBar/HeaderLeft.vue'
import HeaderRight from './HeaderBar/HeaderRight.vue'

export default {
  name: 'HomeHeader',
  data() {
    return {
      showMenu: false,
      showSearch: false
    }
  },
  components: {
    HeaderLeft,
    HeaderRight
  },
  methods: {
    handleMenuClick() {
      if (!this.showSearch) { // 如果搜索框未显示，则切换菜单的显示状态
        this.showMenu = !this.showMenu;
        if (this.showMenu) {
          document.body.style.overflow = "hidden"; // 防止滚动
        } else {
          document.body.style.overflow = ""; // 恢复滚动
        }
      } else { // 如果搜索框已经显示，则隐藏搜索框
        this.showSearch = false;
      }
    },
    handleSearchClick() {
      if (!this.showMenu) { // 如果菜单未显示，则切换搜索框的显示状态
        this.showSearch = !this.showSearch;
        if (this.showSearch) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      } else { // 如果菜单已经显示，则隐藏菜单
        this.showMenu = false;
      }
    },
    hideMenus() {
      this.showMenu = false;
      this.showSearch = false;
      document.body.style.overflow = ""; // 恢复滚动
    },
    logout() {
      alert('logout succ')
      localStorage.removeItem('aikan_user_token')
      localStorage.removeItem('aikan_user_info')
      location.reload()
    }
  }
}
</script>

<style scoped>
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

.home-header-fixed {
  position: fixed;
  width: 100%;
  z-index: 99;
}

.home-header {
  display: flex;
  line-height: 1.1rem;
  backdrop-filter: saturate(5) blur(20px);
  background: rgba(255, 255, 255, 0.8);
  color: #4e5358; /* home-header colos */
  box-shadow: 0 0 4px 10px rgba(138, 138, 138, 0.08);
}

.home-header-left {
  width: 0.64rem;
  float: left;
  padding: 0 0.2rem;
}

.menu-icon::before {
  content: "\e6b6";
  text-align: center;
  font-size: 0.6rem;
}

.home-header-logo {
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

.home-header-logo h1 {
  font-size: 0.6rem;
}

.home-header-right {
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
