<template>
  <div class="area">
    <div class="block-video" >
      <div class="block-icon">
        <span class="iconfont"></span>
      </div>
      <img src="https://www.awas.ink/image/sea-164989_1280.jpg" alt="">
    </div>
    <div class="block-info">
      <div class="block-info-title">
        <div>
          <span class="iconfont"></span>
          <h1>热门</h1>
        </div>
        <h2>巫一巫一凡巫一凡巫一凡巫一凡巫一凡</h2>
      </div>
      <div class="container">
        <div class="up-info">
          <div class="face-img">
            <img src="https://www.awas.ink/image/item-title-01-70x70.png" alt="">
          </div>
          <div class="face-up">
            <span>aeav</span>
            <p>12.4W粉丝</p>
          </div>
          <div class="follow-add">
            <i class="iconfont"></i>
            <span>关注</span>
          </div>
        </div>
      </div>
      <div class="data">
        <span class="view">98.4万观看</span>
        <span class="danmu">7854弹幕</span>
        <span class="time">7-20</span>
        <span class="avid">AV12345678</span>
      </div>
      <div class="desc">
        <p>在使用z-index这个属性之前，
          我们必须先了解使用z-index的必要条件：
          1、要想给元素设置z-index样式，必须先让它变成定位元素，说的明白一点，就是要给元素设置一个postion:relative
          (定位元素：position属性值设置除默认值static以外的元素，包括relative，absolute，fixed)样式。
          2、不要给想控制“上、下”的元素设置z-index，而是对他们的父容器设置z-index样式。
          看懂了以上两点，我们就明白了如何才能使用z-index这个属性，那就是我们在使用z-index前，先将元素定位，
          例如position:relative;然后再后面再添加z-index:2000就OK了。
        </p>
      </div>
    </div>
    <div style="padding:0 3.3vw">
      <div class="toolbar iconfont">
        <div class="toolbar-icon-like">
          <i></i>
          <span>239078</span>
        </div>
        <div class="toolbar-icon-dislike">
          <i></i>
          <span>23432</span>
        </div>
        <div class="toolbar-icon-collection">
          <i></i>
          <span>435555</span>
        </div>
        <div class="toolbar-icon-share">
          <i></i>
          <span>3458</span>
        </div>
    </div>
    </div>
    <div class="cover">
      <div class="up-about">
        <span>博主相关</span>
        <i class="iconfont"></i>
      </div>
      <div class="padding-list">
        <div class="list">
          <div class="aeav">
            <div class="bfs-img"><img src="https://www.awas.ink/image/sea-164989_1280.jpg"></div>
            <div class="gradient"></div>
              <div class="current">
                <span>hello worldhello wello worldhello wello worldhello wello worldhello worldhello world</span>
              </div>
          </div>
          <div class="aeav">
            <div class="bfs-img"><img src="https://www.awas.ink/image/sea-164989_1280.jpg"></div>
            <div class="gradient"></div>
              <div class="current">
                <span>hello worldhello wello worldhello wello worldhello wello worldhello worldhello world</span>
              </div>
          </div>
          <div class="aeav">
            <div class="bfs-img"><img src="https://www.awas.ink/image/sea-164989_1280.jpg"></div>
            <div class="gradient"></div>
              <div class="current">
                <span>hello worldhello wello worldhello wello worldhello wello worldhello worldhello world</span>
              </div>
          </div>
          <div class="aeav">
            <div class="bfs-img"><img src="https://www.awas.ink/image/sea-164989_1280.jpg"></div>
            <div class="gradient"></div>
              <div class="current">
                <span>hello worldhello wello worldhello wello worldhello wello worldhello worldhello world</span>
              </div>
          </div>
          <div class="aeav">
            <div class="bfs-img"><img src="https://www.awas.ink/image/sea-164989_1280.jpg"></div>
            <div class="gradient"></div>
              <div class="current">
                <span>hello worldhello wello worldhello wello worldhello wello worldhello worldhello world</span>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swich">
      <div class="swich-title">
        <span>相关推荐</span>
        <span>评论3244</span>
      </div>
      <div class="swich-list-box">
        <div class="swich-list">
          <div class="list-box">
            <img src="https://www.awas.ink/image/sea-164989_1280.jpg" alt="">
            <p>hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world</p>
          </div>
          <div class="list-box">
            <img src="https://www.awas.ink/image/sea-164989_1280.jpg" alt="">
            <p>hello world</p>
          </div><div class="list-box">
            <img src="https://www.awas.ink/image/sea-164989_1280.jpg" alt="">
            <p>hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world</p>
          </div><div class="list-box">
            <img src="https://www.awas.ink/image/sea-164989_1280.jpg" alt="">
            <p>hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world</p>
          </div>
        </div>
      </div>
      <div class="swich-item">
        item
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'channelBlock'
}
</script>

<style>
.list-box p {
  font-size: 3.2vw;
  height: 6.467vw;
  color: #212121;
  margin: 1.6vw 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.list-box img {
  border-radius: 2vw;
  background-size: 36%;
  width: 100%;
  height: 24.881111vw;

}
.list-box {
  width: 44.9933333vw;
  display: inline-block;
}
.swich-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.swich {
  padding: 0 3.3vw;
  /* background: #fff; */
}
.swich-title {
  display: flex;
  justify-content: space-evenly
}
.swich-title span {
  height: 8.53333vw;
  line-height: 8.53333vw;
  color: #505050;
}
.swich-title :nth-child(1) {
  color: #6cf;
}
.block-icon {
 position: relative;
 top: 0;
 right: 0;
 left: 0;
 bottom: 0;
}
.block-icon span::before {
  content: "\e6c0";
}
.block-video img {
  overflow: hidden;
  width: 100%;
  height: 4.26rem;
}
.block-video span {
  position: absolute;
  margin-top: 10%;
  right: 50%;
  -webkit-transform: translateX(50%) translateY(50%);
  transform: translateX(50%) translateY(50%);
  z-index: 3;
  font-size: 60px;
  color: rgba(255, 255, 255, 0.6);
}
.block-info {
  /* margin: 3vw 3.3vw 0vw 3.3vw; */
  /* background: #fff; */
  /* border-radius: 2vw; */
  padding: 3vw 3.3vw 0vw 3.3vw;
}
.block-info-title {
  display: flex;
  line-height: 4vw;
}
.block-info-title div {
  height: 4vw;
  display: flex;
  padding: 0 6px;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.9);
  /* background: #eeefff; */
}
.block-info-title span::before {
  content: "\e6e7";
  font-size: 3.2vw;
  color: #6cf;
  line-height: 4vw;
}
.block-info-title h1 {
  word-break: keep-all;/* 保持不换行 */
  margin: 0 1vw;
  font-size: 3.2vw;
  color: #6cf;
}.block-info-title h2 {
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  margin: 0 0 0 3vw;
  font-size: 4.3vw;
}
.up-info {
  padding-top: 4vw;
  display: flex;
  align-items: center
}
.face-img img {
  margin: 0 3vw 0 0;
  width: 9.6vw;
  height: 9.6vw;
  border-radius: 4.8vw;
  border: .5px solid #ccc;
}
.face-up span {
  font-size: 3.73333vw;
  color: #212121;
  display: block;
  height: 4.53333vw;
  line-height: 4.53333vw;
}
.face-up p {
  margin-top: 1.33333vw;
  font-size: 3.2vw;
  height: 3.2vw;
  line-height: 3.2vw;
  color: #999;
}
.follow-add {
  margin-left: auto;
  display: inline-block;
  text-align: center;
  width: 17.6vw;
  height: 6.4vw;
  line-height: 6.4vw;
  border: 1px solid #6cf;
  color: #6cf;
  border-radius: 1.06667vw;
  font-size: 3.46667vw;
}
.follow-add i::before {
  content: "\e665";
}
.data, .desc p {
  font-size: 3.2vw;
  margin-top: 2.66667vw;
  color: #999;
  white-space: pre-wrap;
}
.data span{
  margin-right: 2vw;
}
.toolbar div {
  display: inline-block;
}
.toolbar i {
  font-size: 3vw;
}
.toolbar :nth-child(4) {
  float: right;
}
.toolbar-icon-like i::before {
  content: "\e6a4";
}
.toolbar-icon-dislike i::before {
  content: "\e671";
}
.toolbar-icon-collection i::before {
  content: "\e69b";
}
.toolbar-icon-share i::before {
  content: "\e6cf";
}
.toolbar span {
  display:inline-block;
  line-height: 16px;
  height: 16px;
  font-size: 2.6666667vw;
  color: #999;
  text-align: center;
  vertical-align: middle;
  margin: auto 4px;
}
.toolbar-icon {
  height: 16px;
  margin-bottom: 2vw;
}
.toolbar, .cover {
  /* background: #fff; */
  border-bottom: 1px solid rgba(207, 207, 207, 0.3);
}
.up-about {
  padding: 0 3.3vw;
  height: 11.73333vw;
  line-height: 11.73333vw;
}
.up-about i {
  float: right;
}
.up-about i::before {
  content: "\e694";
}
.bfs-img {
  width: 100%;
}
.aeav {
  margin: 0 2.333333vw 0 0vw;
  display: inline-block;
  width: 31.2vw;
  height: 19.46667vw;
  position: relative;
  border-radius: 1.6vw;
}
.bfs-img img {
  width: 31.2vw;
  height: 19.46667vw;
  border-radius: 1.6vw;
}
.gradient {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  opacity: .4;
  background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(#000));
  /* background-image: linear-gradient(-180deg,transparent,#000); */
  border-radius: 1.6vw;
}
.current span {
  height: 8vw;
  margin: 2vw 0;
  font-size: 3.2vw;
  color: #505050;
  line-height: 4.26667vw;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.list {
  overflow:-Scroll;
  overflow-y:hidden;
  display: inline-block;
  clear: both;
  white-space: nowrap;
  overflow-x: auto;
  width: 100%;
}
.padding-list {
  padding: 0 3.3vw;
}
</style>
