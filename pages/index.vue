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
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.logo {
  margin: 130px auto 0;
}
</style>
