<template>
  <div class="main_padding">
    <div class="main_content_area">
      <div class="main_content" v-for="item of list" :key="item.id">
        <div class="main_area">
          <router-link
            tag="div"
            :to="'/channel/' + item.id"
            class="main_photo"
          >
            <img :src="item.imgUrl" />
          </router-link>
          <div class="main_text_area">
            <div class="main_name">
              <h3>{{ item.title }}</h3>
            </div>
            <div class="main_text">
              <p>{{ item.desc }}</p>
            </div>
          </div>
          <div class="main_label">
            <a
              href="#"
              title="查看标签更多文章"
              v-for="innerLaber in item.laber"
              :key="innerLaber.index"
              ><h6>{{ innerLaber }}</h6></a
            >
          </div>
          <div class="main_icon_main">
            <div class="main_icon">
              <img class="main_icon_img" :src="item.headUrl" alt="UP主" />
              <h6>{{ item.name }}</h6>
              <div class="main_icon_con">
                <span class="iconfont main_icon_con_like">&#xe6a4;</span>
                <p>{{ item.like }}</p>
                <span class="iconfont main_icon_con_com">&#xe67e;</span>
                <p>{{ item.comment }}</p>
                <span class="iconfont main_icon_con_see">&#xe66e;</span>
                <p>{{ item.see }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  props: {
    list: Array
  }
}
</script>

<style>
.main_padding {
  padding: 0 0.2rem 0.2rem 0.2rem;
  overflow: hidden;
}
.main_photo img {
  visibility: top;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.main_content_area {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-evenly;
}
.main_content {
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0px 10px #eee;
}
.main_photo {
  height: 3.76rem;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.main_photo img {
  transition: all 0.2s; /*图片放大过程的时间*/
}
.main_photo img:hover {
  transform: scale(1.05); /*鼠标经过图片放大的倍数*/
}

.main_text_area {
  margin: 8px;
}
.main_text p {
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
.main_name h3 {
  font-size: 20px;
  line-height: 30px;
}
.main_name {
  height: 30px;
}
.main_icon {
  display: flex;
  height: 20px;
}
.main_icon_img {
  border-radius: 0.2rem;
  margin: auto 0;
  width: 12px;
  height: 12px;
}
.main_label {
  margin: 0 0.2rem 0.1rem 0.2rem;
}
.main_label,
.main_name {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  white-space: nowrap;
  overflow: hidden;
  overflow-x: auto;
}
.main_area {
  overflow: hidden;
  height: 6rem;
  width: 100%;
}
.main_text {
  white-space: nowrap;
  overflow: auto;
  overflow-y: hidden;
}
.main_text::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.main_label::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.main_name::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.main_label {
  font-size: 0; /*去除间隙*/
}
.main_label a {
  transition: color 0.2s; /*图片放大过程的时间*/
  font-size: 12px;
  margin: 0 6px 0 0;
  display: inline-block;
  background: #f0f0f0;
  border-radius: 8px;
  color: #575757;
  line-height: 15px;
}
.main_label a:hover {
  color: #999999;
}
.main_label h6 {
  margin: 0 0.12rem;
}
.main_icon_main {
  font-size: 0;
  margin: 0 0.2rem;
  line-height: 20px;
}
.main_icon p {
  font-size: 10px;
  line-height: 20px;
  color: #999;
}
.main_icon h6 {
  font-size: 10px;
  margin: 0 0 0 3px;
  color: #999;
}
.main_icon_con {
  margin: 0px 0px 0px auto;
  display: flex;
  height: 20px;
  line-height: 20px;
}
.main_icon_con_like,
.main_icon_con_com,
.main_icon_con_see {
  /*不让选中图片*/
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  font-size: 12px;
  line-height: 22px;
  margin: 0 3px;
}
</style>
