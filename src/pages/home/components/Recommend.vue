<template>
  <div class="shots-container">
    <div class="shots-item" v-for="shot in shots" :key="shot.id">
      <router-link :to="/video/+shot.id">
        <div class="shots-preview">
          <img :src="shot.cover_url" alt="shot preview" class="preview-image" :class="{ 'loading': loading }"
               @load="handleImageLoad" @error="handleImageError">
          <div v-if="loading" class="loading-animation"></div>
        </div>
      </router-link>
      <div class="details">
        <div class="media-channel">
          <div><a :href="'/@'+shot.id"></a>
            <div class="channel-thumbnail-icon" aria-hidden="false" aria-label="转到频道"><img alt=""
                                                                                           :src="shot.avatar_url">
            </div>
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
                  class="aj-core-attributed-string" aria-label="35万次观看" role="text">{{
                  shot.views
                }}万次观看</span></span><span
                  class="ajm-badge-and-byline-separator" aria-hidden="true">•</span><span
                  class="ajm-badge-and-byline-item-byline" dir="auto" aria-hidden="true"><span
                  class="aj-core-attributed-string" role="text">{{ shot.created_at | timeAgo }}</span></span></div>
            </div>
          </a></div>
          <div class="media-item-menu">
            <button
                class="aj-spec-button-shape-next aj-spec-button-shape-next--text aj-spec-button-shape-next--mono aj-spec-button-shape-next--size-l aj-spec-button-shape-next--icon-button "
                aria-label="操作菜单" style="">
              <div class="aj-spec-button-shape-next__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24"
                     viewBox="0 0 24 24" width="24">
                  <path
                      d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
                </svg>
              </div>
              <div style="border-radius: inherit;">
                <div class="aj-spec-touch-feedback-shape aj-spec-touch-feedback-shape--touch-response"
                     aria-hidden="true">
                  <div class="aj-spec-touch-feedback-shape__stroke" style=""></div>
                  <div class="aj-spec-touch-feedback-shape__fill" style=""></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {getTimeAgo} from '@/common/js/time.js'

export default {
  name: 'HomeRecommend',
  loadingError: false,
  props: {
    shots: Array
  },
  data() {
    return {
      loading: true,
      loadingError: false
    }
  },
  methods: {
    handleImageLoad() {
      this.loading = false
    },
    handleImageError(event) {
      // 处理加载失败的情况
      event.target.src = 'https://img.lovepik.com/element/40021/7866.png_860.png'
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
  background-color: #fff;
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

.aj-spec-touch-feedback-shape--touch-response .aj-spec-touch-feedback-shape__stroke {
  border: 1px solid #fff;
}

.aj-spec-touch-feedback-shape__stroke {
  will-change: opacity;
  opacity: 0;
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.aj-spec-touch-feedback-shape--touch-response .aj-spec-touch-feedback-shape__fill {
  background-color: #fff;
}

.aj-spec-touch-feedback-shape__fill {
  will-change: opacity;
  opacity: 0;
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
