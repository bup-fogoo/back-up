<template>
  <div class="header-right-bg">
    <search></search>
    <hot-tags :title="title" :tags="tags"/>
    <hot-search :title="hotSearchTitle" :list="hotSearchList"></hot-search>
  </div>

</template>

<script>
import Search from '@/pages/home/components/HeaderBar/right/Search'
import HotTags from '@/pages/home/components/HeaderBar/right/HotTags'
import HotSearch from '@/pages/home/components/HeaderBar/right/HotSearch'

export default {
  name: 'HeaderRight',
  components: {
    Search,
    HotTags,
    HotSearch
  },
  data () {
    return {
      title: 'Hot Tags',
      tags: [
        {name: 'Vue', link: '/tags/vue'},
        {name: 'React', link: '/tags/react'},
        {name: 'JavaScript', link: '/tags/javascript'},
        {name: 'CSS', link: '/tags/css'},
        {name: 'HTML', link: '/tags/html'}
      ],
      hotSearchTitle: 'Hot Search',
      hotSearchList: [
        {id: 1, name: '132', link: '/video/search/1', count: 123},
        {id: 2, name: '789', link: '/video/search/2', count: 100},
        {id: 3, name: '789', link: '/video/search/3', count: 99},
        {id: 4, name: '789', link: '/video/search/4', count: 88},
        {id: 5, name: '789', link: '/video/search/5', count: 77},
        {id: 6, name: '789', link: '/video/search/6', count: 66}
      ]
    }
  }
}
</script>

<style scoped>
.header-right-bg {
  height: 100%;
  /*background-image: linear-gradient(*/
  /*  to right,*/
  /*  rgba(255, 241, 235, 0.2),*/
  /*  rgba(172, 224, 249, 0.2)*/
  /*);*/
}

</style>
