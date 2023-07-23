<template>
  <div>
    <div class="search-box">
      <!-- 将表单绑定到 submit 事件 -->
      <form @submit.prevent="submitSearch">
        <input v-model="searchText" type="text" placeholder="Please enter the content.">
        <button type="submit">Search</button>
      </form>
    </div>
    <div>
      <!-- 显示搜索结果列表 -->
      <ul v-if="searchResult.length" class="search-result">
        <li v-for="(item, index) in searchResult" :key="index">
          <a :href="'/video/' + item.id">{{ item.title }}</a>
        </li>
      </ul>

      <!-- 当没有搜索结果时显示提示信息 -->
      <div v-if="!searchResult.length && searched" class="no-results">
        <nothing />
      </div>

    </div>
  </div>

</template>
<script>
import axios from 'axios'
import nothing from "@/common/components/nothing";

export default {
  name: 'Search',
  data () {
    return {
      searchText: '', // 搜索关键字
      searchResult: [], // 搜索结果
      searched: false // 是否已经进行过搜索
    }
  },
  components: {
    nothing
  }
  ,
  methods: {
    submitSearch () {
      if (!this.searchText) {
        return
      }
      // 发送请求获取搜索结果
      // 127.0.0.1:18888/api/v1/videos/search?q=剧情1&page=1&perPage=10&sortField=created_at&sortOrder=desc&durationMin=0&durationMax=200&location=上海
      axios.get(`/api/v1/videos/search?q=${this.searchText}`)
        .then((response) => {
          this.searchResult = response.data.data
          console.log(this.searchResult)
          this.searched = true
        })
        .catch((error) => {
          console.error(error)
          this.searched = true
        })
    }
  }
}
</script>

<style scoped>
.no-results {
  margin: 0 10px;
  color: #b7b7b7;
}
.search-box {
  display: flex;
  justify-content: center;
  margin: 10px;
}

form {
  display: flex;
  width: 100%;
  height: 44px;
  border-radius: 25px;
  overflow: hidden;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: none;
  border-radius: 25px 0 0 25px;
  background: #f2f2f2;
}

button[type="submit"] {
  width: 100px;
  height: 44px;
  border: none;
  font-size: 14px;
  color: #fff;
  background: #000;
  border-radius: 0 25px 25px 0;
  cursor: pointer;
  transition: background 0.3s ease;
}

button[type="submit"]:hover {
  background: #4e4e4e;
}

.search-result li {
  margin: 0 10px 10px 10px;
}
.search-result li a{
  font-size: 12px;
  line-height: 12px;
  /*color: #4e4e4e;*/
  text-decoration: underline; /* 添加下划线 */
  /*text-decoration-thickness: 2px; !* 设置下划线的粗细 *!*/
  text-underline-offset: 3px; /* 将下划线下移5像素 */
}

</style>
