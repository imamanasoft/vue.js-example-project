<template>
  <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Information</h5>
        <button 
          type="button" 
          class="btn-close" 
          data-bs-dismiss="modal" 
          aria-label="Close"
          @click="$emit('closeAlertModal')"
          ></button>
      </div>
      <div class="modal-body">
        <p v-if="!newUser">User added successfully!</p>
        <p v-else>User <span class="fw-bold">{{ newUser.name }}</span> added successfully!</p>
      </div>
      <div v-if="displayModalFooter" class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('closeAlertModal')">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AlertModal',
  props: {
    newUser: Object
  },
  data() {
    return {
      displayModalFooter: false,
    }
  },
  emits: ['closeAlertModal']
}
</script>

<style scoped>
.modal {
    display: block;
}
</style>