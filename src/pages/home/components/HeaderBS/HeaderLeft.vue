<template>
    <div class="left">
        <div style="height: 60px"></div>
        <!-- <div class="menu-system" @click.stop="doSomething($event)"> -->
        <div class="menu-system">
          <div class="menu-system-login">
            <div v-if="!userInfo">
              <div class="menu-system-list" v-if="$route.path != '/login'">
                <span class="iconfont">&#xe6b1;</span>
                <p @click="$router.replace('/login')">登入</p>
              </div>
              <div class="menu-system-list" v-if="$route.path != '/register'">
                <span class="iconfont">&#xe6b1;</span>
                <p @click="$router.replace('/register')">注册</p>
              </div>
            </div>
            <div v-if="userInfo">
              <div class="menu-system-list">
                <span class="iconfont">&#xe6b1;</span>
                <p>欢迎， {{userInfo.name}}</p>
              </div>
              <div class="menu-system-list" v-if="$route.path != '/myinfo'">
                <span class="iconfont">&#xe6b1;</span>
                <p @click="$router.push('/myinfo')">个人信息</p>
              </div>
              <div class="menu-system-list">
                <span class="iconfont">&#xe6b1;</span>
                <p @click="logout">登出</p>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import storageService from '../../service/storageService'

export default {
  name: 'HeaderLeft',
  computed: {
    userInfo () {
      return JSON.parse(storageService.get(storageService.USER_INFO))
    }
  },
  methods: {
    logout () {
      alert('logout succ')
      // 清除token
      localStorage.removeItem('aikan_user_token', '')
      // 清除用户信息
      localStorage.removeItem('aikan_user_info', '')
      // 刷新页面，跳转到主页面
      location.reload()
    }
  }
}
</script>

<style>
.left {
    height: 100%;
}
.menu-system {
  overflow: hidden;
  width: 70%;
  height: 100%;
  background: #fff;
}
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
</style>
