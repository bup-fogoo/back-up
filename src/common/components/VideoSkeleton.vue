<template>
  <div class="video-skeleton">
    <div class="video-thumbnail"></div>
    <div class="video-info">
      <div class="video-info-avatar"></div>
      <div class="video-info-container">
        <div class="video-info-container-title"></div>
        <div class="video-info-container-channel"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoSkeleton',
};
</script>

<style scoped>
.video-skeleton {
  display: flex;
  flex-direction: column;
}

.video-thumbnail {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background-color: #ddd;
}

.video-info {
  margin-top: 16px;
  display: flex;
  align-items: center;
}

.video-info-avatar {
  height: 50px;
  width: 50px;
  background-color: #ddd;
  border-radius: 50px;
  margin-right: 16px;
}

.video-info-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.video-info-container-title {
  width: 90%;
  height: 16px;
  margin-bottom: 8px;
  background-color: #ddd;
}

.video-info-container-channel {
  width: 60%;
  height: 12px;
  background-color: #ddd;
}
</style>
