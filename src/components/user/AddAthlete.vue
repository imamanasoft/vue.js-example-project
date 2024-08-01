<template>
  <slot></slot>
  <slot name="header" :first-name="'Anas'" :last-name="'Imam'">
    Athlete Infos:
  </slot>
  <slot name="body">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Name" />
      </div>
      <div class="form-group">
        <label for="sport">Sport</label>
        <input
          type="text"
          class="form-control"
          id="sport"
          placeholder="Sport"
        />
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input type="text" class="form-control" id="age" placeholder="Age" />
      </div>
    </form>
  </slot>
  <slot name="footer">
    <button type="button" class="btn btn-outline-primary">Add</button>
    <button type="button" class="btn btn-outline-danger">Cancel</button>
    {{ message }}
  </slot>
</template>

<script>
export default {
  name: "AddAthlete",
  props: {
    message: String,
  },
};
</script>

<style scoped></style>
