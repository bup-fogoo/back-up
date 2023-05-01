<template>
  <div>
    <div class="card-arrow-left" @click="moveLeft">&lt;</div>
    <div class="card-arrow-right" @click="moveRight">&gt;</div>
    <div class="card-wrapper"
         @touchstart="startSwipe"
         @touchmove="swipe"
         @touchend="endSwipe">
      <transition-group name="card-slide" tag="div" class="card-container">
        <div v-for="(item, index) in items" :key="index"
             :style="{ transform: `translateX(${(index - currentIndex) * 100}%)` }"
             class="card">
          <component :is="item"/>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import VideoComment from "@/pages/channel/components/VideoComment";
import RelatedRecommend from "@/pages/channel/components/RelatedRecommend";

export default {
  data() {
    return {
      items: [RelatedRecommend, VideoComment],
      currentIndex: 0,
      isSwiping: false,
      startSwipeX: null,
      currentSwipeX: null,
    };
  },
  methods: {
    moveLeft() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    moveRight() {
      if (this.currentIndex < this.items.length - 1) {
        this.currentIndex++;
      }
    },
    startSwipe(event) {
      event.preventDefault();
      this.isSwiping = true;
      this.startSwipeX = event.touches[0].clientX;
    },
    swipe(event) {
      event.preventDefault();
      if (!this.isSwiping) {
        return;
      }
      this.currentSwipeX = event.touches[0].clientX;
      const delta = this.currentSwipeX - this.startSwipeX;
      if (delta > 50 && this.currentIndex > 0) {
        // swipe left
        this.currentIndex--;
      } else if (delta < -50 && this.currentIndex < this.items.length - 1) {
        // swipe right
        this.currentIndex++;
      }
      this.startSwipeX = this.currentSwipeX;
    },
    endSwipe(event) {
      event.preventDefault();
      this.isSwiping = false;
    },
  },
  components: {
    VideoComment,
    RelatedRecommend,
  },
};
</script>

<style scoped>
.card-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

}

.card-arrow-left,
.card-arrow-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  cursor: pointer;
  opacity: 0.5;
}

.card-arrow-left:hover,
.card-arrow-right:hover {
  opacity: 1;
}

.card-arrow-left {
  left: 20px;
}

.card-arrow-right {
  right: 20px;
}

.card-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px;
}

.card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}


</style>
