<template>
  <div>
    <div class="title">
      {{ this.popRecommend }}<span class="iconfont">&#xe6bd;</span>
    </div>
    <ul class="item-bg">
      <li class="item" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title textOVerFlow">{{ item.title }}</p>
          <p class="item-desc textOVerFlow">{{ item.desc }}</p>
          <div class="item-buttom">
            <div class="item-buttom-time">
              <span class="iconfont">&#xe680;</span>
              <span class="time-ago">{{ item.timeAgo }}</span>
            </div>
            <div class="item-buttom-see">
              <span class="see-num">{{ item.seeNum }}</span>
              <span class="iconfont">&#xe66e;</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    popRecommend: String,
    list: Array
  }
}
</script>

<style scoped>
.title {
  margin: 0 0.2rem 0.1rem 0.2rem;
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
  margin: 0 0.2rem 0.2rem 0.2rem;
  box-shadow: 0px 0px 10px #eee;
}
.item {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  object-fit: cover;
}
.item-img {
  border-radius: 0.35rem;
  width: 1.6rem;
  height: 1.2rem;
  padding: 0.2rem;
}
.item-info {
  flex: 1;
  padding: 0.2rem 0.2rem 0rem 0rem;
  width: 0;
  min-width: 0;
}
.item-title {
  line-height: 0.4rem;
  height: 0.4rem;
  font-size: 0.32rem;
}
.item-desc {
  font-size: 0.22rem;
  height: 0.6rem;
  line-height: 0.3rem;
  color: #aaa;
}
.item-buttom {
  display: inline-block;
  line-height: 0.4rem;
  height: 0.4rem;
  display: flex;
  color: #ccc;
  font-size: 0.2rem;
}
.item-buttom-time {
  flex: 1;
}
.item-buttom-time span {
  float: left;
}
.time-ago {
  text-indent: 0.1rem;
}
.item-buttom-see {
  flex: 1;
}
.item-buttom-see span {
  float: right;
}
.see-num {
  text-indent: 0.1rem;
}
</style>
