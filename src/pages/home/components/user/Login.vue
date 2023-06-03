<template>
  <div>
    <login-header></login-header>
    <div class="login-wrapper">
      <div class="login-header">Login</div>
      <div class="form-wrapper">
        <input v-model="user.username" type="text" name="username" placeholder="username" class="input-item">
        <input v-model="user.password" type="password" name="password" placeholder="password" class="input-item">
        <div @click="login" id="login" class="btn">Login</div>
      </div>
      <div class="msg">
        Don't have account? <a href="/register">Sing up</a>
      </div>
    </div>
  </div>
</template>

<script>
import loginHeader from '@/pages/home/components/Header'
import storageService from '../../service/storageService'
import activeInstance from '@/router/api'


export default {
  name: 'Login',
  components: {
    loginHeader
  },
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      activeInstance.post("/api/v1/auth/login", this.user).then(res => {
            if (res.data.code !== 0) {
              this.$message.error(res.data.message)
              return
            }
            // 保存token，console.log(res.data)
            storageService.set(storageService.USER_TOKEN, res.data.data.token)
            // 保存用户信息
            // 将 userinfo 转换成字符串
            const userinfoStr = JSON.stringify(res.data.data.userinfo);
            storageService.set(storageService.USER_INFO, userinfoStr)
            this.$router.replace({name: 'Home'})
          }
      ).catch(err => {
        // 错误提示
        console.log(err)
        this.$message.error("SYSTEM EEROR")
      })
    }
  },
  mounted: function () {
    // 自动触发是否已经登入的函数
    if (localStorage.getItem('aikan_user_token') && localStorage.getItem('aikan_user_info')) {
      this.$router.replace({name: 'Home'})
    }
  }
}
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 35px;
  line-height: 35px;
}

.login-wrapper {
  font-family: 'Open Sans Light';
  letter-spacing: .05em;
  background-color: #fff;
  width: 250px;
  padding: 0 50px;
  position: absolute;
  left: 50%;
  border-radius: 15px;
  top: 40%;
  transform: translate(-50%, -50%);
}

.login-wrapper .login-header {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}

.login-wrapper .form-wrapper .input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: none;
  padding: 10px 0;
  border-bottom: 2px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}

.login-wrapper .form-wrapper .input-item::placeholder {
  text-transform: uppercase;
}

.login-wrapper .form-wrapper .btn {
  text-align: center;
  padding: 5px;
  margin-top: 40px;
  border-radius: 25px;
  background-image: linear-gradient(to right, #225ffd, #225ffd);;
  color: #fff;
}

.login-wrapper .msg {
  text-align: center;
  line-height: 80px;
}

.login-wrapper .msg a {
  text-decoration-line: none;
  color: #2453ce;
}

</style>
