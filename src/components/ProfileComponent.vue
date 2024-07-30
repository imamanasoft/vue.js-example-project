<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="incrementAsync">Increment Async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'ProfileComponent',
  computed: {
    ...mapState('counter', ['count']),
  },
  methods: {
    ...mapMutations('counter', ['increment', 'decrement']),
    ...mapActions('counter', ['incrementAsync']),
  },
}
</script>

<style scoped>

</style>