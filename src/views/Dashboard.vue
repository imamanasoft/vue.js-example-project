<!-- src/views/Dashboard.vue ##ChatGPT-->
<template>
  <div>
    <h1>Dashboard</h1>
    <user-profile v-if="user" :user="user" />
    <file-upload />
    <chat />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

import UserProfile from '@/components/user/UserProfile.vue';
import FileUpload from '@/components/ui-components/FileUpload.vue';
import Chat from '@/components/ui-components/Chat.vue';

const store = useStore();

const user = computed(() => store.state.user);

onMounted(async () => {
  const store = useStore();

  if (!store.state.user) {
    await store.dispatch('fetchUser');
  }
});
</script>

<style scoped>
h1 {
  color: #007bff;
}
</style>
