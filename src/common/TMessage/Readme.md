```
<template>
  <div id="app">
    <router-view/>
    <button @click="handleShowMessage">点击出现弹框</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {
    handleShowMessage () {
      this.$message.error('我好帅啊我好帅啊我好帅啊') # 红
      this.$message.success('我好帅啊我好帅啊我好帅啊') # 绿
      this.$message.info('我好帅啊我好帅啊我好帅啊') # 灰
      this.$message.warning('我好帅啊我好帅啊我好帅啊') # 黄
    }
  }
}
</script>

<style></style>

```
