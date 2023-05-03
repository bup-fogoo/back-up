<template>
  <div class="hot-search">
    <h2 class="hot-search-title">{{ title }}</h2>
    <ul class="hot-search-list">
      <li class="hot-search-item" v-for="(item, index) in list" :key="index">
        <span class="hot-search-rank">{{ index + 1 }}</span>
        <a :href="item.link" target="_blank" class="hot-search-link">{{ item.name }}</a>
        <span class="hot-search-count">{{ item.count }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HotSearch',
  props: {
    title: {
      type: String,
      required: true,
      default: 'HOT SEARCH'
    },
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.hot-search {
  border-radius: 4px;
  padding: 10px;
}

.hot-search-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.hot-search-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.hot-search-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
}

.hot-search-rank {
  margin-right: 10px;
  font-weight: bold;
  font-size: 20px;
}

.hot-search-link {
  color: #333;
  text-decoration: none;
}

.hot-search-count {
  margin-left: auto;
  color: #999;
  font-size: 14px;
}
</style>
