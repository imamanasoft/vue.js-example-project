<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Create New Project</h2>
    <div class="card">
      <div class="card-header">
        <router-link
          class="btn btn-outline-info float-right"
          to="/"
        >
          View All Projects
        </router-link>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              id="name"
              v-model="project.name"
              type="text"
              class="form-control"
              name="name"
            />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              id="description"
              v-model="project.description"
              class="form-control"
              rows="3"
              name="description"
            />
          </div>
          <button
            type="button"
            class="btn btn-outline-primary mt-3"
            :disabled="isSaving"
            @click="handleSave"
          >
            Save Project
          </button>
        </form>
      </div>
    </div>
  </layout-div>
</template>

<script>
import { mapActions } from 'vuex'

import LayoutDiv from '@/components/LayoutDiv.vue';
import Swal from 'sweetalert2'

export default {
  name: 'ProjectCreate',
  components: {
    LayoutDiv,
  },
  data() {
    return {
      isSaving:false,
      project: {
        name: '',
        description: '',
      },
    };
  },
  methods: {
    ...mapActions('project', [
      'addProject'
    ]),
    async handleSave() {
      this.isSaving = true;

      try {
        await this.addProject({
          project : this.project
        });

        await Swal.fire({
          icon: 'success',
          title: 'Project saved successfully!',
          showConfirmButton: false,
          timer: 1500
        })

        this.isSaving = false;
        this.project.name = "";
        this.project.description = "";

        this.$router.push({ name: 'projectList' });
      } catch (error) {
        this.isSaving = false

        await Swal.fire({
          icon: 'error',
          title: 'An Error Occured!',
          showConfirmButton: false,
          timer: 1500
        })

        console.log(error)
      }
    }
  },
};
</script>

<style scoped>

</style>