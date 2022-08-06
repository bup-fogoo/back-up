<template>
  <div>
    <div class="title">
      {{ this.classicReview }}<span class="iconfont">&#xe6bd;</span>
    </div>
    <ul class="item-bg">
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <div class="item-img-margin">
            <img class="item-img" :src="item.imgUrl" />
          </div>
        </div>
        <div class="item-info">
          <p class="item-title textOVerFlow">{{ item.title }}</p>
          <p class="item-desc textOVerFlow">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
    <div style="height:.2rem"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    classicReview: String,
    list: Array
  }
}
</script>

<style scoped>
.title {
  margin: 0.1rem 0.2rem;
  border-radius: 0.3rem;
  background: #fff;
  line-height: 0.8rem;
  text-indent: 0.2rem;
}
.title span {
  margin-right: 0.2rem;
  float: right;
  color: #999;
}
.item-bg {
  background: #fff;
  border-radius: 0.3rem;
  margin: 0 .2rem;
  box-shadow: 0px 0px 10px #eee;
}
.tem-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;
}
.item-img-margin {
  padding: 0.2rem, 0.2rem, 0, 0.2rem;
}
.item-img {
  border-radius: 0.3rem;
  overflow: hidden;
  width: 100%;
}
.item-info {
  padding: 0.2rem;
}
.item-title {
  line-height: 0.54rem;
  height: 0.54rem;
  font-size: 0.32rem;
}
.item-desc {
  line-height: 0.4rem;
  height: 0.8rem;
  color: #aaa;
}
</style>
