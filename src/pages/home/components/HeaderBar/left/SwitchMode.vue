<template>
  <div class="appearance" @click="toggleDarkMode" :class="{ 'switch': isDarkMode }">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
          d="M12 1.75V3.25M12 20.75V22.25M1.75 12H3.25M20.75 12H22.25M4.75216 4.75216L5.81282 5.81282M18.1872 18.1872L19.2478 19.2478M4.75216 19.2478L5.81282 18.1872M18.1872 5.81282L19.2478 4.75216M16.25 12C16.25 14.3472 14.3472 16.25 12 16.25C9.65279 16.25 7.75 14.3472 7.75 12C7.75 9.65279 9.65279 7.75 12 7.75C14.3472 7.75 16.25 9.65279 16.25 12Z"
          stroke-width="1.5" stroke-linecap="round" class="sun"/>
      <path
          d="M2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C16.7154 21.25 20.6068 17.7216 21.1778 13.161C20.1198 13.8498 18.8566 14.25 17.5 14.25C13.7721 14.25 10.75 11.2279 10.75 7.5C10.75 5.66012 11.4861 3.99217 12.6799 2.77461C12.4554 2.7583 12.2287 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12Z"
          stroke-width="1.5" stroke-linejoin="round" class="moon"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "SwitchMode",
  data() {
    return {
      isDarkMode: false
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      // 修改 body 元素的样式
      document.body.classList.toggle('dark');
      // 修改其他元素的样式
      const elements = document.querySelectorAll('.light');
      elements.forEach((el) => {
        el.classList.toggle('light');
        el.classList.toggle('dark');
      });
      // 修改菜单元素的样式
      const menuSystem = this.$refs.menuSystem;
      if (this.isDarkMode) {
        menuSystem.classList.remove('light');
        menuSystem.classList.add('dark');
      } else {
        menuSystem.classList.remove('dark');
        menuSystem.classList.add('light');
      }
    }
  }
}
</script>

<style scoped>
/* 定义 CSS 变量 */
:root {
  --bg-color: #333!important;
  --text-color: #fff!important;
  --link-color: #f5f5f5!important;
}

/* 使用 CSS 变量 */
.light {
  background-color: #f5f5f5;
  color: #333;
}

.dark {
  background-color: var(--bg-color)!important;
  color: var(--text-color)!important;
}

.dark a:link,
.dark a:visited {
  color: var(--link-color);
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF;
  transition: all 0.4s ease;
}

* {
  box-sizing: border-box;
}

.appearance {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.appearance svg path {
  transform-origin: center;
  transition: all 0.6s ease;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

.appearance svg path.sun {
  stroke: white;
  transform: scale(0.4) rotate(60deg);
  opacity: 0;
}

.appearance svg path.moon {
  stroke: black;
  opacity: 1;
}

.appearance.switch svg path.sun {
  transform: scale(1) rotate(0);
  opacity: 1;
}

.appearance.switch svg path.moon {
  transform: scale(0.4) rotate(-60deg);
  opacity: 0;
}
</style>
