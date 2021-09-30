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
.logobox {
  display: block;
  min-height: 92px;
  margin: auto;
}

img .logobox {
  max-width: 100%;
  object-fit: contain;
  width: auto;
}
</style>
