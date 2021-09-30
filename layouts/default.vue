<template>
  <div class="wrapper">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

.
<style scoped>
.wrapper {
}
</style>
<script>
import Header from '@/components/header.vue' // headerをインポート
import Footer from '@/components/footer.vue' // footerをインポート
export default {
  components: {
    Header,
    Footer
  }
}
</script>
