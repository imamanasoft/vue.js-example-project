<template>
  <AlertComponent />
  <h1>Users list:</h1>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">password</th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="(user, index) in users"
      :key="index"
      :class="{ 'table-danger' : index % 2 }"
    >
      <th scope="row">{{ index }}</th>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.password }}</td>
    </tr>
    </tbody>
  </table>
  <button
    class="btn btn-primary mx-auto"
    style="width: 200px;"
    @click="$emit('addNewUser')"
  >
    Add New User
  </button>
</template>

<script>
import AlertComponent from '@/components/AlertComponent.vue'

export default {
  name: 'UsersList',
  components: { AlertComponent },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  emits: ['addNewUser'],
}
</script>

<style scoped>

</style>