<template>
  <div>
      <myinfo-header></myinfo-header>
      <h1>hello,welcome {{userInfo.name}}</h1>
      <em><label>您的邮件:{{userInfo.email}}</label></em>
  </div>
</template>

<script>
import storageService from '../home/service/storageService'
import myinfoHeader from '../home/components/Header'
export default {
  name: 'Myinfo',
  components: {
    myinfoHeader
  },
  computed: {
    userInfo () {
      return JSON.parse(storageService.get(storageService.USER_INFO))
    }
  }
}
</script>

<style>

</style>
