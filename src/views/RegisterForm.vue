<!-- src/components/RegisterForm.vue ##ChatGPT-->
<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="form.username" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const form = ref({
  username: '',
  email: '',
  password: '',
});

const register = async () => {
  try {
    await store.dispatch('register', form.value);
    router.push('/dashboard');
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
h2 {
  color: #333;
}
form {
  max-width: 400px;
  margin: 0 auto;
}
div {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
