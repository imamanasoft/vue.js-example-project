<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
    <router-link class="navbar-brand" to="/home">Home</router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="navbar-brand nav-link" to="/profile">Profile</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="navbar-brand nav-link" to="/">Projects</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link 
            id="navbarDropdown" 
            class="nav-link dropdown-toggle" 
            :to="dropdownOptions.link"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >{{ dropdownOptions.label }}</router-link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <template
              v-for="item in dropdownOptions.items"
              :key="item.link"
            >
              <a class="dropdown-item" :href="item.link">{{ item.label }}</a>
              <div class="dropdown-divider"></div>
            </template>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <div class="d-flex">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </div>
    </div>
    <!---------------------------ChatGPT-------------------------------------------->
    <router-link v-if="!isAuthenticated" class="navbar-brand nav-link" to="/login">Login</router-link>
    <router-link v-if="!isAuthenticated" class="navbar-brand nav-link" to="/register">Register</router-link>
    <router-link v-if="isAuthenticated" class="navbar-brand nav-link"to="/dashboard">Dashboard</router-link>
    <button v-if="isAuthenticated" @click="logout">Logout</button>
    <!---------------------------ChatGPT-------------------------------------------->
  </nav>
</template>

<script setup>
//ChatGPT
import { computed } from 'vue';
import { useStore } from 'vuex';

defineProps({
  dropdownOptions: {
      type: Object,
      required: true
    }
})

const store = useStore();
const isAuthenticated = computed(() => store.state.user.isAuthenticated);

const logout = () => {
  store.dispatch('logout');
}
</script>

<style scoped>

</style>