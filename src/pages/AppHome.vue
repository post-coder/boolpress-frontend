<script>
export default {
  name: 'AppHome',
}
</script>

<template>
  
  <div class="container py-5">
    <h1>Sei nella homepage</h1>

    <hr>
    <router-link :to="{name: 'about'}">Vai alla pagina di about</router-link>
  </div>

</template>

<style lang="scss" scoped>
  
</style>