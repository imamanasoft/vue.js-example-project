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
          <a
            id="navbarDropdown"
            class="nav-link dropdown-toggle"
            :href="dropdownOptions.link"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ dropdownOptions.label }}
          </a>
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
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  props: {
    dropdownOptions: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>