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
  data() {
    return {
      title: 'Hot Tags',
      tags: [
        {name: 'Drama', link: '/tags/drama'},
        {name: 'Horror', link: '/tags/horror'},
        {name: 'Suspense', link: '/tags/suspense'},
        {name: 'Action', link: '/tags/action'},
        {name: 'Comedy', link: '/tags/comedy'}
      ],
      hotSearchTitle: 'Hot Search',
      hotSearchList: [
        {id: 1, name: '阿根正传', link: '/video/1', count: 123},
        {id: 2, name: '灌篮高手', link: '/video/2', count: 100},
        {id: 3, name: '千与千寻', link: '/video/3', count: 99},
        {id: 4, name: '咒术回战0 剧场版', link: '/video/16', count: 88},
        {id: 5, name: '寄生虫', link: '/video/123', count: 77},
      ]
    }
  }
}
</script>

<style scoped>
</style>
