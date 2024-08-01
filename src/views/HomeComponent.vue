<template>
  <MainComponent />
  <FooterComponent />
</template>

<script>
import MainComponent from '@/components/home/MainComponent.vue'
import FooterComponent from '@/components/home/FooterComponent.vue'

export default {
  name: 'HomeComponent',
  components: { FooterComponent, MainComponent }
}
</script>

<style scoped>

</style>