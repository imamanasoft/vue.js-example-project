<template>
  <div>
    <NavbarComponent :dropdownOptions="dropdownOptions"/>
    <h3>Mouse position is at: {{ x }}, {{ y }}</h3>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import { useMouse } from '@/composables/useMouse.js'

export default {
  name: 'HeaderComponent',
  components: { NavbarComponent },
  setup() {
    const { x, y } = useMouse();

    return {
      x, y
    };
  },
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