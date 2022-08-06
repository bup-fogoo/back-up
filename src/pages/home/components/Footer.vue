<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div>
    <div>
      <div class="footer">
        <div class="footer_col">
          <p>&copy; 2021 &mdash; Awas</p>
        </div>
        <div class="footer_col">
          <a href="http://beian.miit.gov.cn/" target="_black"
            >豫ICP备2021019061号-1</a>
        </div>
        <div class="footer_col">
          <a href="http://awas.ink/">关于</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style scoped>
.footer {
  display: flex;
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  font-size: .18rem;
}
.footer_col {
  margin: 0 auto;
  order: -1;
  flex-grow: 1;
  text-align: center;
}
.footer_col a {
  color: #505050;
}
</style>
