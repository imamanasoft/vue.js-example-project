<!-- src/components/UserProfile.vue ##ChatGPT-->
<template>
  <div>
    <h3>User Profile</h3>
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

<script setup>
defineProps(['user'])
</script>

<style scoped>
h3 {
  color: #333;
}
p {
  margin: 5px 0;
}
</style>
