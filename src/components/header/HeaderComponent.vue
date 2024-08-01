<template>
  <div>
    <NavbarComponent :dropdownOptions="dropdownOptions"/>
    <MousePositionComponent />
  </div>
</template>

<script>
import NavbarComponent from '@/components/header/NavbarComponent.vue'
import MousePositionComponent from '@/components/header/MousePositionComponent.vue'

export default {
  name: 'HeaderComponent',
  components: { NavbarComponent, MousePositionComponent },
  data() {
    return {
      dropdownOptions: {
        label: 'Anas',
        link: '/about',
        items: [
          {
            label: 'Go to',
            link: '/goto',
          },
          {
            label: 'Action 1',
            link: '/action1',
          },
          {
            label: 'Action 2',
            link: '/action2',
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>