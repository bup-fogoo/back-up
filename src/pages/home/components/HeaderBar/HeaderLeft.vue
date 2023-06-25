<template>
  <div class="left">
    <div class="menu-system" @touchmove.prevent>
      <SwitchMode></SwitchMode>
      <!--   公告    -->
      <div style="padding: 3vw;margin:3vw;background:#73BBC9;border-radius: 1vw">
        <h1 style="font-size: 15px;margin-bottom: 3px">道友！前段开发没你不行(Vue2)</h1>
        <h6 style="font-size: 13px;margin-bottom: 3px">Looking for front-end development</h6>
        <hr>
        <h3 style="font-size: 13px;margin-bottom: 3px">电影名：阿根正传 最新更新时间2023.06.06</h3>
      </div>
      <div v-if="hasUserInfoAndToken">
        <div class="profile menu-link" @click="$router.push({ name: 'Profile' });">
          <div class="icon-wrapper">
            <svg t="1685778430548" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="7398" width="200" height="200">
              <path
                  d="M959.36 920.96C944 739.2 819.84 588.8 651.52 534.4c70.4-45.44 117.12-124.16 117.12-214.4 0-141.44-115.2-256-256.64-256-142.08 0-256.64 114.56-256.64 256 0 90.24 46.72 168.96 117.12 214.4C204.16 588.8 80 739.2 64.64 920.96c0 3.2-0.64 5.76 0 10.24C65.92 947.2 80 960 96 960c17.92 0 32-14.72 32-32 16.64-197.76 182.4-352 384-352s366.72 154.24 384 352c0 17.28 14.08 32 32 32 16 0 30.08-12.8 31.36-28.8 0.64-4.48 0-7.04 0-10.24zM319.36 320c0-106.24 86.4-192 192.64-192 106.24 0 192.64 85.76 192.64 192S618.24 512 512 512c-106.24 0-192.64-85.76-192.64-192z"
                  p-id="7399"></path>
            </svg>
            <span>Profile</span>
          </div>
        </div>

        <div class="logout menu-link" @click="logout">
          <div class="icon-wrapper">
            <svg t="1685778577682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="9335" width="200" height="200">
              <path
                  d="M512 64a32 32 0 0 0-32 32v416a32 32 0 0 0 64 0V96a32 32 0 0 0-32-32z m171.328 33.952a32 32 0 0 0-24.704 59.072l0.224 0.064C798.048 214.752 896 351.936 896 512c0 212.096-171.904 384-384 384S128 724.096 128 512c0-160.064 97.92-297.248 237.152-354.912a32 32 0 1 0-24.672-59.04l0.224-0.064c-162.4 67.264-276.672 227.328-276.672 414.048 0 247.424 200.576 448 448 448s448-200.576 448-448c0-186.752-114.24-346.784-276.672-414.048z"
                  p-id="9336"></path>
            </svg>
            <span>Logout</span>
          </div>
        </div>
      </div>
      <div class="right-bottom" v-else>
        <RightBottom></RightBottom>
      </div>
      <div style="display: flex; justify-content: center;padding:10px;">
        <a href="https://t.me/+XxrdHjBU9qRhMWNl">Telegram</a>
      </div>
    </div>
  </div>
</template>

<script>
import RightBottom from "@/pages/home/components/HeaderBar/left/RightBottom";
import SwitchMode from "@/pages/home/components/HeaderBar/left/SwitchMode";

export default {
  name: 'HeaderLeft',
  computed: {
    hasUserInfoAndToken() {
      return localStorage.getItem('aikan_user_info') && localStorage.getItem('aikan_user_token');
    }
  },
  components: {
    RightBottom,
    SwitchMode
  },
  methods: {
    logout() {
      // 从本地存储中删除 aikan_user_info 和 aikan_user_token
      localStorage.removeItem('aikan_user_info');
      localStorage.removeItem('aikan_user_token');
      // 刷新页面，跳转到主页面
      location.reload()
    }
  }
}

</script>

<style>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
}

.icon-wrapper span {
  margin-left: 10px;
}

.menu-link {
  cursor: pointer;
  display: flex;
  padding-left: 3vw;
  margin-top: 10px;
  align-items: center;
}

.menu-link > * {
  margin-right: 8px;
}

.logout svg, .profile svg {
  width: 24px;
  height: 24px;
  fill: var(--0f-color);
}

.left {
  height: 100%;
}

.menu-system {
  overflow: hidden;
  width: 70%;
  height: 100%;
  background: var(--menu-bg-color);
  pointer-events: all;

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
