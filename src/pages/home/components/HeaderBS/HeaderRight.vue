<template>
<div>

  <div style="padding:.2rem;margin: .2rem;">
    <div class="serach">
      <input value="">
      <button>Search</button>
    </div>
    <div class="label">
      <div class="label_TO">
        <p>爆火</p>
      </div>
      <div class="label_TO">
        <p>你是我的小呀小苹果</p>
      </div>
      <div class="label_TO">
        <p>怎么爱你</p>
      </div>
      <div class="label_TO">
        <p>都不嫌多</p>
      </div>
      <div class="label_TO">
        <p>红红的小脸</p>
      </div>
      <div class="label_TO">
        <p>我的心窝</p>
      </div>
      <div class="label_TO">
        <p>dangdangdang</p>
      </div>
      <div class="label_TO">
        <p>abd</p>
      </div>
      <div class="label_TO">
        <p>123ew2w</p>
      </div>
      <div class="label_TO textOVerFlow">
        <p>8uhbhknjkmnjdasdjak奇葩械苛工</p>
      </div>
      <div class="label_TO">
        <p>呀呀呀啊啊啊啊</p>
      </div>
    </div>
    <div>
          <div class="menu-system-login">
            <div class="menu-system-list">
              <span class="iconfont">&#xe6b1;</span>
              <p>搜索</p>
            </div>
            <div class="menu-system-list">
              <span class="iconfont">&#xe6b1;</span>
              <p>标签</p>
            </div>
            <div class="menu-system-list">
              <span class="iconfont">&#xe6b1;</span>
              <p>咦咦咦</p>
            </div>
            <div class="menu-system-list">
              <span class="iconfont">&#xe6b1;</span>
              <p>问题</p>
            </div>
          </div>
    </div>
  </div>

</div>

</template>

<script>
export default {
  name: 'HeaderRight'
}
</script>

<style scoped>
.menu-system-login {
  overflow: hidden;
  margin: 11px 10px 10px 10px; /*上面少上的1px在这里补上了*/
  background-image: linear-gradient(
    to right,
    rgba(255, 241, 235, 0.2),
    rgba(172, 224, 249, 0.2)
  );
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
input,button {
  background: #ccc;
  border-radius: .2rem;
}
.serach input {
  width: 150px;
  text-indent: 1.5vw;
}
.serach button {
  padding: 2px;
  display: inline-block;
}
.label {
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.label_TO {
  max-width: 70px;
  margin: .1rem;
  border-radius: .2rem;
  padding: 0 .1rem;
  background: rgb(218, 218, 218);
}
.label_TO p {
  font-size: 10px;
  line-height: 22px; /*控制标签的高度*/
  display: inline-block;
  vertical-align:middle;/* 上下居中 */
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow:ellipsis;
}
</style>
