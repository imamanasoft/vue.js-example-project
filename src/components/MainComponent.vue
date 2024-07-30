<template>
  <h2>The count is {{ count }}</h2>
  <AddUserForm :displayAddUserForm="displayAddUserForm" @newUserSubmitted="updateUsersList" />
  <UsersList :users="users" @addNewUser="displayAddUserForm = true"/>
  <Teleport to="body">
    <AlertModal v-if="open"/>
  </Teleport>
</template>

<script>
import AddUserForm from '@/components/AddUserForm.vue'
import AlertModal from '@/components/AlertModal.vue'
import UsersList from '@/components/UsersList.vue'

export default {
  name: 'MainComponent',
  components: {
    AddUserForm,
    AlertModal,
    UsersList
  },
  provide() {
    // use function syntax so that we can access `this`
    return {
      message: this.labelText
    }
  },
  data () {
    return {
      displayAddUserForm: false,
      labelText: 'Hello Anas!',
      open: false,
      users: [
        { name: 'Anas', email: 'te@sj.xo', password: 'xixoxoxoox' },
        { name: 'Mehdi', email: 'dk@dssss.xod', password: '46658' },
        { name: 'Ayman', email: 'dfffe@ssq.xo', password: 'kjgggg' },
      ]
    }
  },
  watch: {
    users: {
      handler() {
        this.open = true;
      },
      deep: true
    },
  },
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  methods: {
    updateUsersList (user) {
      this.displayAddUserForm = false;
      this.users.push(user);
    }
  }
}
</script>

<style scoped>

</style>