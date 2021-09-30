<template>
  <div class="logo_box">
    <nuxt-img src="/logo.png" sizes="sm:100vw md:272px lg:272px" />
  </div>
</template>

<script>
export default {
  components: {}
}
</script>
<style scoped>
.logo_box {
  display: block;
  min-height: 92px;
  box-sizing: border-box;
}
img .logobox {
  max-width: 100%;
  object-fit: contain;
  width: auto;
  min-height: 92px;
}
</style>
