<template>
  <div>
      <myspace-header></myspace-header>
      <div v-if="this.mySpace[0]">
        <h1>UID:{{this.mySpace[0].uid}}</h1>
        <h1>NAME:{{this.mySpace[0].name}}</h1>
        <h1>title:{{this.mySpace[0].title}}</h1>
        <h1>imgurl:{{this.mySpace[0].imgUrl}}</h1>
        <h1>videourl:{{this.mySpace[0].videoUrl}}</h1>
      </div>
  </div>
</template>

<script>
import myspaceHeader from '../home/components/Header'
import axios from 'axios'
export default {
  name: 'UserInfo',
  components: {
    myspaceHeader
  },
  data () {
    return {
      mySpace: []
    }
  },
  methods: {
    getInfo () {
      axios.get(`/api/v1/${this.$route.params.uid}`).then(this.getInfoSucc)
      // console.log(`${this.$route.params.uid}`)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        this.mySpace = data.mySpace
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style>

</style>
