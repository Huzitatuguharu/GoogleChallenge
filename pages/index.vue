<template>
  <div class="container">
    <Logo class="logo" />
    <Search class="search" />
  </div>
</template>

<script>
import Logo from '@/components/logo.vue'
import Search from '@/components/search.vue'
export default {
  components: {
    Search,
    Logo
  }
}
</script>
<style scoped>
.container {
  background-color: #fff;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
</style>
