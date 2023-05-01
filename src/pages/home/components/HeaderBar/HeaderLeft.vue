<template>
  <div class="left">
    <div class="menu-system">
      <SwitchMode></SwitchMode>
      <div v-if="hasUserInfoAndToken">
        <div class="profile menu-link" @click="$router.push({ name: 'Profile' });">
          <div class="icon-wrapper">
            <svg t="1682737793525" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="15785" width="200" height="200">
              <path
                  d="M708.367 353.656c0-56.745-22.729-110.092-63.996-150.218s-96.132-62.224-154.494-62.224-113.229 22.099-154.498 62.224-63.996 93.473-63.996 150.218c0 43.987 13.713 86.196 39.651 122.064 7.273 10.06 21.559 12.479 31.904 5.406 10.343-7.073 12.834-20.963 5.561-31.019-20.486-28.329-31.315-61.684-31.315-96.451 0-92.585 77.471-167.911 172.694-167.911s172.689 75.325 172.689 167.911-77.471 167.906-172.694 167.906c-47.055 0-92.711 8.965-135.702 26.646-41.516 17.076-78.796 41.509-110.806 72.632-32.007 31.123-57.142 67.371-74.705 107.736-18.181 41.808-27.401 86.199-27.401 131.948 0 12.298 10.252 22.266 22.898 22.266s22.898-9.968 22.898-22.266c0-162.35 135.843-294.425 302.816-294.425 58.361 0 113.229-22.099 154.497-62.22s63.996-93.477 63.996-150.221zM530.991 631.551c0 12.298 10.252 22.266 22.898 22.266h304.337c12.647 0 22.898-9.968 22.898-22.266s-10.252-22.266-22.898-22.266H553.889c-12.647 0-22.898 9.968-22.898 22.266z m327.238 91.12H553.892c-12.65 0-22.898 9.968-22.898 22.266s10.252 22.266 22.898 22.266h304.337c12.647 0 22.898-9.968 22.898-22.266 0-12.294-10.252-22.266-22.898-22.266z m0 113.385H553.892c-12.65 0-22.898 9.967-22.898 22.266s10.252 22.266 22.898 22.266h304.337c12.647 0 22.898-9.968 22.898-22.266 0-12.294-10.252-22.266-22.898-22.266z"
                  fill="#2c2c2c" p-id="15786"></path>
            </svg>
            <span>Profile</span>
          </div>
        </div>

        <div class="logout menu-link" @click="logout">
          <div class="icon-wrapper">
            <svg t="1682738343354" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="18985" width="200" height="200">
              <path
                  d="M533.333333 896a21.333333 21.333333 0 0 1-21.333333 21.333333H341.333333A192.213333 192.213333 0 0 1 149.333333 725.333333V298.666667A192.213333 192.213333 0 0 1 341.333333 106.666667h170.666667a21.333333 21.333333 0 0 1 0 42.666666H341.333333A149.333333 149.333333 0 0 0 192 298.666667v426.666666A149.333333 149.333333 0 0 0 341.333333 874.666667h170.666667a21.333333 21.333333 0 0 1 21.333333 21.333333z m335.104-399.104l-170.666666-170.666667a21.333333 21.333333 0 0 0-30.208 30.208l134.272 134.229334H426.666667a21.333333 21.333333 0 0 0 0 42.666666h375.168l-134.272 134.229334a21.333333 21.333333 0 0 0 30.208 30.208l170.666666-170.666667a21.333333 21.333333 0 0 0 0-30.208z"
                  fill="#2c2c2c" p-id="18986"></path>
            </svg>
            <span>Logout</span>
          </div>
        </div>
      </div>
      <div class="right-bottom" v-else>
        <RightBottom></RightBottom>
      </div>
    </div>
  </div>
</template>

<script>
import storageService from '../../service/storageService'
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
  margin-top: 10px;
  align-items: center;
}

.menu-link > * {
  margin-right: 8px;
}

.logout svg, .profile svg {
  width: 24px;
  height: 24px;
}

.left {
  height: 100%;
}

.menu-system {
  overflow: hidden;
  width: 70%;
  height: 100%;
  background: #fff;
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
