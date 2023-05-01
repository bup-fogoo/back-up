<template>
  <div class="hot-tags">
    <h3 class="title">{{ title }}</h3>
    <div class="tag-list">
      <a v-for="(tag, index) in tags" :key="index" class="tag" :href="tag.link">
        {{ tag.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotTags',
  props: {
    title: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.hot-tags {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.tag {
  display: inline-block;
  margin: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

.tag:hover {
  background-color: #f1f1f1;
}
</style>
