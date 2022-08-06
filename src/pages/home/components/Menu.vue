<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div>
    <div class="menu">
      <div class="menu-system">
        <div class="menu-system-login">
          <div class="menu-system-list">
            <span class="iconfont">&#xe6b1;</span>
            <p>有什么用</p>
          </div>
          <div class="menu-system-list">
            <span class="iconfont">&#xe6b1;</span>
            <p>这个网页是干嘛的</p>
          </div>
          <div class="menu-system-list">
            <span class="iconfont">&#xe6b1;</span>
            <p>如何上传视频</p>
          </div>
          <div class="menu-system-list">
            <span class="iconfont">&#xe6b1;</span>
            <p>如何上传图片menu</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMenu'
};
</script>

<style scoped>
.menu {
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 98;
  background: rgba(0, 0, 0, 0.7);
}
.menu-system {
  overflow: hidden;
  width: 70%;
  height: 100%;
  background: #fff;
}
.menu-system-login {
  overflow: hidden;
  margin: 0.2rem;
  background: #eee;
  border-radius: 0.1rem;
  height: 3rem;
  padding: 0.2rem;
}
.menu-system-list {
  height: 0.6rem;
}
.menu-system-list p {
  display: inline-block;
  text-indent: 0.2rem;
  color: #4e534e;
}
.menu-system-list span {
  color: #6cf;
}
</style>
