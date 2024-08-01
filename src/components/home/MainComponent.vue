<template>
  <div class="border p-4 mb-4">
    <h2>Store getter example:</h2>
    <h3>The count is {{ count }}</h3>
  </div>
  <AddUserForm
    :displayAddUserForm="displayAddUserForm"
    @newUserSubmitted="updateUsersList"
  />
  <UsersList :users="users" @addNewUser="displayAddUserForm = true" />
  <Teleport to="body">
    <AlertModal 
      v-if="open" 
      :new-user="newUser"
      @closeAlertModal="open = false"  
    />
  </Teleport>
</template>

<script>
import AddUserForm from "@/components/user/AddUserForm.vue";
import AlertModal from "@/components/modals/AlertModal.vue";
import UsersList from "@/components/user/UsersList.vue";

export default {
  name: "MainComponent",
  components: {
    AddUserForm,
    AlertModal,
    UsersList,
  },
  provide() {
    // use function syntax so that we can access `this`
    return {
      message: this.labelText,
    };
  },
  data() {
    return {
      displayAddUserForm: false,
      labelText: "Hello Anas!",
      open: false,
      newUser: null,
      users: [
        { name: "Anas", email: "te@sj.xo", password: "xixoxoxoox" },
        { name: "Mehdi", email: "dk@dssss.xod", password: "46658" },
        { name: "Ayman", email: "dfffe@ssq.xo", password: "kjgggg" },
      ],
    };
  },
  watch: {
    users: {
      handler() {
        this.open = true;
      },
      deep: true,
    },
  },
  computed: {
    count() {
      return this.$store.state.counter.count;
    },
  },
  methods: {
    updateUsersList(user) {
      this.newUser = user;
      this.displayAddUserForm = false;
      this.users.push(user);
    },
  },
};
</script>

<style scoped></style>
