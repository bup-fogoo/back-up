<template>
  <div>
    <div class="home-header-fixed">
      <div class="home-header">
        <div class="home-header-left" @click="handleMenuClick">
          <svg t="1683092827343" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="6470" width="200" height="200">
            <path d="M170.666667 213.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="6471"></path>
            <path d="M170.666667 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="6472"></path>
            <path d="M170.666667 810.666667m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="6473"></path>
            <path
                d="M896 778.666667H362.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h533.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM362.666667 245.333333h533.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H362.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32zM896 480H362.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h533.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"
                p-id="6474"></path>
          </svg>
        </div>
        <router-link to="/" class="home-header-logo">
          <h1>AirJump</h1>
        </router-link>
        <div class="home-header-right" @click="handleSearchClick">
          <svg t="1683093145494" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="6613" width="200" height="200"><path
              d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z"
              p-id="6614"></path></svg>
        </div>
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
  height: 1.1rem;
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

.home-header-left svg,
.home-header-right svg {
  width: 0.6rem;
  height: 0.6rem;
}
.home-header-left,
.home-header-right{
  display: flex;
  align-items: center;
  justify-content: center;
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


.menu {
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 88;
}

</style>
