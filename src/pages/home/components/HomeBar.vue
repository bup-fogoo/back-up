<template>
  <div class="chip-bar-contents" role="tablist">
    <div class="chip-container-box" chip-style="STYLE_EXPLORE_LAUNCHER_CHIP">
      <div class="chip-container" tabindex="" aria-label="">
        <div>
          <div class="yt-spec-icon-shape"
          >
            <div style="width: 24px; height: 24px; fill: currentcolor">
              <svg
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                  style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                    d="m9.8 9.8-3.83 8.23 8.23-3.83 3.83-8.23L9.8 9.8zm3.28 2.97c-.21.29-.51.48-.86.54-.07.01-.15.02-.22.02-.28 0-.54-.08-.77-.25-.29-.21-.48-.51-.54-.86-.06-.35.02-.71.23-.99.21-.29.51-.48.86-.54.35-.06.7.02.99.23.29.21.48.51.54.86.06.35-.02.7-.23.99zM12 3c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <span class="typography-title-1 chip-text"
        ><span class="yt-core-attributed-string" role="text">探索</span></span
        >
      </div>
    </div>
    <div class="ytm-chip-divider-renderer"></div>
    <div
        v-for="(option, index) in options"
        :key="option.text"
        chip-style="STYLE_HOME_FILTER"
        :class="['chip-container-box', { 'selected': option.selected}, { 'all-chip-renderer': index === 0 }]"
        @click="selectOption(option)"
    >
      <div class="chip-container" tabindex="" aria-label="">
        <span class="typography-title-1 chip-text">
          <span
              class="yt-core-attributed-string"
              role="text"
          >{{ option.text }}</span
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeBar',
  data() {
    return {
      options: [
        {text: '全部', selected: true},
        {text: '音乐', selected: false},
        {text: '健身', selected: false},
        {text: '动漫', selected: false},
        {text: '电影', selected: false},
        {text: '已看', selected: false},
        {text: '篮球', selected: false},
        {text: '电视剧', selected: false},
        {text: '搞笑', selected: false},
      ]
    }
  },
  methods: {
    selectOption(option) {
      this.options.forEach((item) => {
        item.selected = false;
      });
      option.selected = true;
    }
  },
  mounted() {
  }
};
</script>
<style scoped>
.chip-bar-contents > * {
  display: inline-block;
  vertical-align: text-top;
}

.chip-bar-contents {
  margin-left: 12px;
}

.chip-container-box {
  margin-right: 12px;
  padding: 8px 0;
}

.chip-container-box {
  cursor: pointer;
  outline: none;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
}

.chip-bar-contents {
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  height: 48px;
  /* 去除下面的滑条 */
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* Hide the scrollbar in WebKit browsers (Chrome, Safari) */
.chip-bar-contents::-webkit-scrollbar {
  display: none;
}

.selected .chip-container {
  background-color: #606060;
  color: #fff;
}

.chip-container {
  height: 32px;
  min-width: 48px;
  text-align: center;
  padding: 0 12px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  border-radius: 8px;
  border: 0;
}

.chip-text {
  max-width: 20rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.typography-title-1 {
  letter-spacing: 0.01em;
}

[chip-style="STYLE_DEFAULT"] .chip-container,
[chip-style="STYLE_HOME_FILTER"] .chip-container,
[chip-style="STYLE_REFRESH_TO_NOVEL_CHIP"] .chip-container {
  background-color: var(--home-line-color);
  -webkit-transition: background-color 0.5s cubic-bezier(0.05, 0, 0, 1);
  transition: background-color 0.5s cubic-bezier(0.05, 0, 0, 1);
}

[chip-style="STYLE_EXPLORE_LAUNCHER_CHIP"] .chip-container {
  background-color: var(--home-line-color);
  border-radius: 2px;
  border: 0;
  padding: 0 12px 0 6px;
}

[chip-style="STYLE_DEFAULT"].selected .chip-container,
[chip-style="STYLE_HOME_FILTER"].selected .chip-container {
  background-color: #606060;
  color: #fff;
}

.yt-core-attributed-string {
  font-size: 14px;
}

.yt-spec-icon-shape {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.ytm-chip-divider-renderer {
  width: 1px;
  margin: 8px 12px 0 0;
  height: 32px;
  background-color: var(--home-line-color);
}
</style>
