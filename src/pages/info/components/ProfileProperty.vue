<template>
  <div v-if="profileCoverArr && profileCoverArr.length > 0" class="profile-property-bg">
    <div v-for="(item, index) in profileCoverArr" :key="index" class="profile-property-wrapper">
      <router-link :to="'/video/' + item.id">
        <div class="profile-property">
          <img :src="item.cover_url" @error="handleError(item)">
          <div class="watch-info">
            <svg class="icon" viewBox="0 0 1024 1024" width="20" height="20">
              <path
                  d="M853.333333 504.106667l21.333334 2.346666c0-29.226667-4.906667-42.666667-51.413334-77.226666C782.506667 399.36 394.666667 153.6 351.573333 129.92a167.253333 167.253333 0 0 0-175.786666 1.706667A95.573333 95.573333 0 0 0 141.44 213.333333v597.333334a94.506667 94.506667 0 0 0 34.346667 81.493333 149.333333 149.333333 0 0 0 85.333333 25.386667 189.653333 189.653333 0 0 0 90.24-24.32c42.666667-23.68 431.36-270.08 472.106667-298.666667 45.866667-34.986667 51.2-55.466667 51.2-84.693333l-21.333334-5.973334z m-29.226666 10.24c0 15.36 4.053333 20.053333-29.866667 44.8-40.533333 29.013333-422.613333 272.853333-465.28 296.533333-21.333333 11.946667-80.426667 35.84-129.92 1.28-10.24-7.466667-14.933333-20.266667-14.933333-46.293333V213.333333c0-26.24 5.76-39.253333 16.213333-46.506666A104.32 104.32 0 0 1 259.84 149.333333a154.24 154.24 0 0 1 70.186667 19.2c42.666667 23.466667 423.253333 267.946667 463.573333 297.173334 33.92 24.746667 30.293333 29.44 30.293333 44.8v3.626666z"
                  fill="#fff"></path>
            </svg>
            <span>{{ item.views }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
  <nothing v-else/>
</template>
<script>
import nothing from "@/common/components/nothing";


export default {
  name: 'ProfileProperty',
  props: {
    profileCoverArr: Array
  },
  components: {
    nothing
  },
  methods: {
    handleError(item) {
      item.cover_url = 'https://bup.pub/error_404.jpg'
    }
  }
}

</script>

<style scoped>
.profile-property-bg {
  display: flex;
  flex-wrap: wrap; /* 设置 flex-wrap 属性为 wrap */
}

.profile-property-wrapper {
  flex-basis: calc(33.33% - 20px); /* 设置基础大小，减去 margin 的宽度 */
  padding: 10px;
  margin-bottom: 20px; /* 添加 margin 调整样式 */
}

.profile-property {
  position: relative;
  height: 0;
  padding-bottom: 150%;
}

img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-property::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.watch-info {
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  color: #fbfbfb;
  z-index: 1;
}


.watch-info > svg {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}

.watch-info > span {
  margin-right: 20px;
  font-size: 15px;
  color: #e5e7e9;
}
</style>
