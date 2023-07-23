<template>
  <div class="shots-container">
    <div class="shots-item" v-for="shot in shots" :key="shot.id">
      <a :href="/video/+shot.id">
        <div class="shots-preview">
          <img :src="shot.cover_url" alt="shot preview" class="preview-image" :class="{ 'loading': loading }"
               @load="handleImageLoad" @error="handleImageError">
          <div v-if="loading" class="loading-animation"></div>
        </div>
      </a>
      <div class="details">
        <div class="media-channel">
          <div><a :href="'/profile?uid='+shot.user_id">
            <div class="channel-thumbnail-icon" aria-hidden="false" aria-label="转到频道"><img alt=""
                                                                                           :src="shot.avatar_url">
            </div>
          </a>
          </div>
          <a class="media-item-extra-endpoint" aria-hidden="true" :href="'/video/'+shot.id"></a></div>
        <div class="media-item-info cbox">
          <div class="media-item-metadata"><a :href="'/video/'+shot.id"><h3 class="media-item-headline"><span
              class="aj-core-attributed-string" aria-label="人工智能发展到什么程度了？是不是太快了点？ 来自小Lin说 1天前 19分钟 357,217次观看"
              role="text">{{ shot.title }}</span></h3>
            <div class="" aria-hidden="true">
              <div class="ajm-badge-and-byline-info"><span
                  class="ajm-badge-and-byline-item-byline" dir="auto" aria-hidden="true"><span
                  class="aj-core-attributed-string">{{ shot.nickname }}</span></span><span
                  class="ajm-badge-and-byline-separator" aria-hidden="true">•</span><span
                  class="ajm-badge-and-byline-item-byline" dir="auto" aria-hidden="true"><span
                  class="aj-core-attributed-string" aria-label="35万次观看" role="text">{{ shot.views }} views</span></span><span
                  class="ajm-badge-and-byline-separator" aria-hidden="true">•</span><span
                  class="ajm-badge-and-byline-item-byline" dir="auto" aria-hidden="true"><span
                  class="aj-core-attributed-string" role="text">{{ shot.created_at | timeAgo }}</span></span></div>
            </div>
          </a></div>
          <div @click="switchTouch" class="media-item-menu">
            <button
                class="aj-spec-button-shape-next aj-spec-button-shape-next--text aj-spec-button-shape-next--mono aj-spec-button-shape-next--size-l aj-spec-button-shape-next--icon-button "
                aria-label="操作菜单" style="">
              <div class="iconfont" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24"
                     viewBox="0 0 24 24" width="24">
                  <path
                      d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <popup @status="switchTouch2" id="home-popup" v-bind:class="{ 'is-visible': showShare }">
      <div class="home-popup-box">
        <svg t="1685726557555" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5874" width="200" height="200"><path d="M914.88 352.06c-21.86-51.68-53.15-98.09-93-137.94-39.85-39.85-86.26-71.13-137.94-93C630.42 98.48 573.57 87 515 87s-115.42 11.48-168.94 34.12c-51.68 21.86-98.09 53.15-137.94 93-39.85 39.85-71.13 86.26-93 137.94C92.48 405.58 81 462.43 81 521s11.48 115.42 34.12 168.94c21.86 51.68 53.15 98.09 93 137.94 39.85 39.85 86.26 71.13 137.94 93C399.58 943.52 456.43 955 515 955s115.42-11.48 168.94-34.12c51.68-21.86 98.09-53.15 137.94-93 39.85-39.85 71.13-86.26 93-137.94C937.52 636.42 949 579.57 949 521s-11.48-115.42-34.12-168.94zM151 521c0-200.71 163.29-364 364-364 89.05 0 170.73 32.15 234.06 85.44L236.44 755.06C183.15 691.73 151 610.05 151 521z m364 364c-86.5 0-166.06-30.33-228.58-80.92l511.66-511.66C848.67 354.94 879 434.5 879 521c0 200.71-163.29 364-364 364z" p-id="5875"></path></svg>
        <h1>Not interested</h1>
      </div>
      <div class="home-popup-box">
        <svg t="1685725267503" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3544" width="200" height="200"><path d="M512 128c212 0 384 172 384 384S724 896 512 896 128 724 128 512s172-384 384-384m0-64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z" p-id="3545"></path><path d="M480 704h64v64h-64z m0-448h64v384h-64z" p-id="3546"></path></svg>
        <h1>Report this video</h1>
      </div>
      <div class="home-popup-box">
        <svg t="1685725533094" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1651" width="200" height="200"><path d="M512.8 64.2c-247.5 0-448.2 200.7-448.2 448.2s200.7 448.2 448.2 448.2S961 759.9 961 512.4 760.3 64.2 512.8 64.2z m266 714.2C744.2 813 704 840.1 659.2 859c-46.3 19.6-95.6 29.5-146.4 29.5-50.8 0-100.1-9.9-146.4-29.5-44.8-18.9-85-46.1-119.6-80.6s-61.7-74.8-80.6-119.6c-19.6-46.3-29.5-95.6-29.5-146.4s9.9-100.1 29.5-146.4c18.9-44.8 46.1-85 80.6-119.6s74.8-61.7 119.6-80.6c46.3-19.6 95.6-29.5 146.4-29.5 50.8 0 100.1 9.9 146.4 29.5 44.8 18.9 85 46.1 119.6 80.6s61.7 74.8 80.6 119.6c19.6 46.3 29.5 95.6 29.5 146.4s-9.9 100.1-29.5 146.4c-18.9 44.8-46 85-80.6 119.6z" p-id="1652"></path><path d="M548.1 497.4V241.3c0-19.9-16.1-36-36-36s-36 16.1-36 36v270.5c0 7.2 2.1 14 5.8 19.6 1.5 2.6 3.4 5.1 5.6 7.3L678.8 730c7 7 16.2 10.5 25.5 10.5s18.4-3.5 25.5-10.5c14.1-14.1 14.1-36.9 0-50.9L548.1 497.4z" p-id="1653"></path></svg>
        <h1>Add to playlist</h1>
      </div>
    </popup>

  </div>
</template>

<script>
import {getTimeAgo} from '@/common/js/time.js'
import Popup from "@/common/components/popup";

export default {
  name: 'HomeRecommend',
  components: {Popup},
  loadingError: false,
  props: {
    shots: Array
  },
  data() {
    return {
      loading: true,
      loadingError: false,
      showShare: false,
    }
  },
  methods: {
    handleImageLoad() {
      this.loading = false
    },
    handleImageError(event) {
      // 处理加载失败的情况
      event.target.src = 'https://bup.pub/error_404.jpg'
    },
    switchTouch() {
      this.showShare = true
    },
    switchTouch2() {
      this.showShare = false
    }
  },
  filters: {
    timeAgo(timestamp) {
      return getTimeAgo(timestamp)
    }
  }
}
</script>

<style scoped>
.home-popup-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.home-popup-box svg {
  width: 24px;
  height: 24px;
}
#home-popup {
  color: #0f0f0f;
  font-size: 4vw;
}

#home-popup h1 {
  padding: 3vw;
  font-size: .3rem;
}

.iconfont svg {
  fill: var(--icon-color);
}

.shots-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  justify-content: center;
  width: 100%;
  margin: 0;
}

.shots-item {
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 0;
}

.shots-preview {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.preview-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}


.user-avatar img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/*  video-info  */
.channel-thumbnail-icon img {
  height: 40px;
  width: 40px;
  border-radius: 20px;
}

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  margin: 4px 0px 16px 12px;
}

.media-channel {
  margin-top: 8px;
  flex-shrink: 0;
}

.media-item-info {
  align-items: flex-start;
  margin-left: 12px;
}

.media-item-info .details {
  align-items: flex-start;
  margin-left: 12px;
  -webkit-box-align: start;
}

.cbox {
  display: flex;
}


.media-item-info, .details {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  min-width: 0;
}

.media-item-metadata {
  margin-top: 8px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  min-width: 0;
}

.media-item-headline {
  font-weight: 500;

}

.media-item-headline span {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  max-height: 2.5em;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 1.25;
  text-overflow: ellipsis;
  font-weight: normal;
}

.aj-core-attributed-string {
  font-weight: 500;
}

.ajm-badge-and-byline-info {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  max-height: 3em;
  line-height: 1.1;
  text-overflow: ellipsis;
  overflow: hidden;
}

.ajm-badge-and-byline-item-byline, .ajm-badge-and-byline-separator {
  display: inline;
  opacity: .6;
  font-size: 12px;
}

.ajm-badge-and-byline-item-byline, .ajm-badge-and-byline-separator {
  margin-right: 4px;
}

.aj-spec-button-shape-next--mono.aj-spec-button-shape-next--text {
  color: #f1f1f1;
}

.aj-spec-button-shape-next--size-l {
  width: 48px;
  height: 48px;
  font-size: 18px;
  line-height: 48px;
  border-radius: 24px;
}

.aj-spec-button-shape-next {
  position: relative;
  margin: 0;
  white-space: nowrap;
  min-width: 0;
  text-transform: none;
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  border: none;
  cursor: pointer;
  outline-width: 0;
  box-sizing: border-box;
  background: none;
  text-decoration: none;
  -webkit-flex: 1;
  -webkit-box-flex: 1;
  flex: 1;
  display: -webkit-flex;
  display: -webkit-box;
  display: flex;
  -webkit-flex-direction: row;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -webkit-box-pack: center;
  justify-content: center;
}


</style>
