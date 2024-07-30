<template>
  <div class="alert alert-primary" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'AlertComponent',
  inject: ['message'],
}
</script>

<style scoped>

</style>