<template>
  <form v-if="displayAddUserForm">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        v-model="name"
        class="form-control"
        placeholder="Enter name"
        aria-describedby="name"
        @change="checkName"
      >
      <small
        v-show="showNameError"
        id="nameError"
        class="form-text text-danger"
      >
        {{ errorNameMessage }}
      </small>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        id="exampleInputEmail1"
        type="email"
        v-model="email"
        class="form-control"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        @input="checkEmail"
      >
      <small
        v-show="showEmailError"
        id="emailHelp"
        class="form-text text-danger"
      >
        {{ errorEmailMessage }}
      </small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        id="exampleInputPassword1"
        type="password"
        v-model="password"
        class="form-control"
        placeholder="Password"
      >
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button
      type="submit"
      class="btn btn-primary mt-2"
      :disabled="!isSubmitButtonActivated"
      @click.prevent="addUser"
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: 'AddUserForm',
  props: {
    displayAddUserForm: Boolean
  },
  data() {
    return {
      email: '',
      errorEmailMessage: '',
      errorNameMessage: '',
      name: '',
      password: '',
      showNameError: false,
      showEmailError: false
    }
  },
  emits: ['newUserSubmitted'],
  computed: {
    isSubmitButtonActivated () {
      return this.name !== '' && this.email !== '' && this.password !== '';
    }
  },
  methods: {
    checkName () {
      this.showNameError = false;

      if (this.name.length < 2) {
        this.showNameError = true;
        this.errorNameMessage = 'Name should have at least 2 characters'
      }
    },
    checkEmail () {
      this.showEmailError = false;

      if (!this.email.includes('@')) {
        this.showEmailError = true;
        this.errorEmailMessage = 'Name should have at xxx@xxx.xx form'
      }
    },
    addUser () {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      this.resetNewUserValue();

      this.$emit('newUserSubmitted', newUser);
    },
    resetNewUserValue () {
      this.name = '';
      this.email = '';
      this.password = '';
    }
  }
}
</script>

<style scoped>

</style>