<template>
  <div>
    <register-header></register-header>
    <div class="container">
      <div>
        <div class="login-wrapper">
          <div class="login-header">Register</div>
          <div class="form-wrapper">
            <input v-model="user.username" type="text" name="username" placeholder="username or email address"
                   class="input-item">
            <div class="password-input-wrapper">
              <input v-model="user.password" :type="showPassword ? 'text' : 'password'" name="password"
                     placeholder="no less than 6 characters" class="input-item">
              <i @click="showPassword = !showPassword" class="fa"
                 :class="showPassword ? 'fa-eye-slash' : 'fa-eye'">show</i>
            </div>
            <div @click="register" class="btn">Submit</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import registerHeader from '@/pages/home/components/Header'
import storageService from '../../service/storageService'
import userService from "@/pages/home/service/userService";

export default {
  name: 'Register',
  components: {
    registerHeader
  },
  data() {
    return {
      showPassword: false,
      user: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    register() {
      userService.register(this.user).then(res => {
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

      }).catch(err => {
        // 错误提示
        console.log(err)
        this.$message.error("出错了")
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
  color: #a6c1ee;
}
</style>
