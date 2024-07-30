<template>
  <MainComponent />
  <FooterComponent />
</template>

<script>
import MainComponent from '@/components/MainComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'HomeComponent',
  components: { FooterComponent, MainComponent }
}
</script>

<style scoped>

</style>