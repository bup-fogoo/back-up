<template>
  <div>
    <login-header></login-header>
    <div class="login">
        <h1>login</h1>
        <label for=""> email:</label><input v-model="user.email" type="text" placeholder="选请输入邮箱地址">
        <br>
        <label for=""> password:</label><input v-model="user.password" type="password" placeholder="请输入不低于6位密码">
        <br>
        <button @click="login" type="submit">提交</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import loginHeader from '@/pages/home/components/Header'
import storageService from '../../service/storageService'
export default {
  name: 'Login',
  components: {
    loginHeader
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      // 验证数据
      const api = '/api/v1/auth/login'
      axios.post(api, {...this.user}).then(res => {
        // userService.register(this.user).then(res => {
        // 保存token，console.log(res.data)
        storageService.set(storageService.USER_TOKEN, res.data.data.token)
        // 保存用户信息
        axios.get('/api/v1/auth/info', {headers: {Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}`}}).then(response => {
          storageService.set(storageService.USER_INFO, JSON.stringify(response.data.data))
          // 跳转主页
          console.log(response.data.data)
          this.$router.replace({name: 'Home'})
        })
      }).catch(err => {
        // 错误提示
        console.log('err:', err.response.data.msg)
      })
    }
  }
}
</script>

<style>

</style>
