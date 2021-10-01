<template>
  <div class="wrapper">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

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
<style scoped>
.wrapper {
  overflow-y: auto;
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
