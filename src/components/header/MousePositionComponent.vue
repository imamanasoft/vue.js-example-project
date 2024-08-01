<template>
  <div class="border p-4 my-4">
    <h2>Composable example:</h2>
    <h3>Mouse position is at: {{ x }}, {{ y }}</h3>
  </div>
</template>
  
<script>
import { useMouse } from '@/composables/useMouse.js'

export default {
  name: 'MousePositionComponent',
  setup() {
    const { x, y } = useMouse();

    return {
      x, y
    };
  },
}
</script>

<style scoped>

</style>