<template>
  <div class="episode-selector">
    <div class="episode-container">
      <div v-for="(episode, index) in episodes" :key="index" class="episode-box"
           :class="{ active: activeIndex === index }" @click="activeIndex = index">
        {{ episode }}
      </div>
    </div>
    <p>You are watching episode {{ activeIndex + 1 }}</p>
    <popup v-bind:class="{ 'is-visible': true }"/>
  </div>
</template>

<script>
import Popup from "@/common/components/popup";
export default {
  components: {Popup},
  data() {
    return {
      activeIndex: 0,
      episodes: new Array(99).fill(null).map((_, index) => `P${index + 1}`)
    };
  }
};
</script>

<style scoped>
.episode-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.episode-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%;
}

.episode-box {
  width: calc(25% - 20px);
  height: 10vw;
  background-color: #393939;
  color: white;
  text-align: center;
  line-height: 10vw;
  font-size: 20px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
}

.active {
  background-color: #66cc66;
}
</style>
