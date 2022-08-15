<template>
  <div class="register">
    <register-header></register-header>
      <h1>register</h1>
      <label for=""> name:</label><input v-model="user.name" type="text" placeholder="请输入昵称(选填)">
      <br>
      <label for=""> email:</label><input v-model="user.email" type="text" placeholder="选请输入邮箱地址">
      <button @click="SendVerificationCode" type="submit">发送验证码</button>
      <br>
      <label for=""> password:</label><input v-model="user.password" type="password" placeholder="请输入不低于6位密码">
      <br>
      <label for=""> code:</label><input v-model="user.code" type="text" placeholder="请输入邮箱验证码">
      <br>
      <button @click="register" type="submit">提交</button>
  </div>
</template>

<script>
import axios from 'axios'
import registerHeader from '@/pages/home/components/Header'
import storageService from '../../service/storageService'
export default {
  name: 'Register',
  components: {
    registerHeader
  },
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        code: ''
      }
    }
  },
  methods: {
    register () {
      // 验证数据
      const api = '/api/v1/auth/register'
      axios.post(api, {...this.user}, {headers: {Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}`}}).then(res => {
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
        console.log('err:', err.response.data)
      })
      // console.log('register')
    },
    SendVerificationCode () {
      const api = '/api/v1/auth/reg/code'
      axios.post(api, {...this.user}, {headers: {Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}`}}).then(res => {
        console.log(res.data)
        alert('发送成功')
      }).catch(err => {
        console.log('err:', err.response.data)
      })
    }
  }
}
</script>

<style>

</style>
