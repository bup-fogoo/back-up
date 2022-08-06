<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div>
    <div class="swiper">
      <div
        class="swiper-slide"
        v-for="(banner, i) of banners"
        :key="i"
        v-show="i === n"
      >
        <router-link :to="banner.videoHref">
          <img class="swiper-slide-img" :src="banner.imgUrl" />
        </router-link>
      </div>
      <div class="swiper-cricle">
        <div class="swiper-cricle-list">
          <span
            v-for="(banner, i) of banners"
            :key="i"
            :class="i === n ? 'active' : ''"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    banners: Array
  },
  data () {
    return {
      n: 0
    }
  },
  methods: {
    play: function () {
      setInterval(this.autoPlay, 3000)
    },
    autoPlay: function () {
      this.n++
      if (this.n === this.banners.length) {
        this.n = 0
      }
    }
  },
  mounted: function () {
    this.play()
  }
}
</script>

<style>
.swiper-cricle-list {
  position: absolute;
  font-size: 0;
  margin: -45.33333vw 0;
  left: 20%;
  transform: translate(-50%, -50%);
}
.swiper-cricle {
  transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -o-transform: rotate(90deg);
}
.swiper-cricle span {
  display: inline-block;
  margin: 0 3px;
  opacity: 0.7;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background: #fff;
}
.active {
  opacity: 1 !important;
}
.swiper {
  position: relative;
  padding: 0.2rem;
}
.swiper-slide {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  font-size: 18px;
  text-align: center;

  /* Center slide text vertically */
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide-img {
  display: block;
  width: 100%;
  /* height: 150vw; */
  object-fit: cover;
  border-radius: 0.3rem;
}
</style>
