<template>
  <layout-div>
    <div class="container">
      <h2 class="text-center mt-5 mb-3">Project Manager</h2>
      <div class="card">
        <div class="card-header">
          <router-link
            to="/create"
            class="btn btn-outline-primary"
          >
            Create New Project
          </router-link>
        </div>
        <div class="card-body">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th style="width: 240px">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="project in projects" :key="project.id">
              <td>{{ project.name }}</td>
              <td>{{ project.description }}</td>
              <td>
                <router-link
                  :to="`/show/${project.id}`"
                  class="btn btn-outline-info mx-1"
                >
                  Show
                </router-link>
                <router-link
                  :to="`/edit/${project.id}`"
                  class="btn btn-outline-success mx-1"
                >
                  Edit
                </router-link>
                <button
                  @click="handleDelete(project.id)"
                  class="btn btn-outline-danger mx-1"
                >
                  Delete
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </layout-div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import LayoutDiv from '../LayoutDiv.vue';
import Swal from 'sweetalert2'

export default {
  name: 'ProjectList',
  components: {
    LayoutDiv,
  },
  computed: {
    ...mapState('project', ['projects']),
  },
  created() {
    this.fetchProjectList();
  },
  methods: {
    ...mapActions('project', [
      'fetchProjects',
      'deleteProject'
    ]),
    async fetchProjectList() {
      try {
        await this.fetchProjects();
      } catch (error) {
        console.log(error)
      }
    },
    async handleDelete(id){
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.isConfirmed) {
        try {
          await this.deleteProject({
            id: id
          });

          await Swal.fire({
            icon: 'success',
            title: 'Project deleted successfully!',
            showConfirmButton: false,
            timer: 1500
          })
        } catch(error) {
          await Swal.fire({
            icon: 'error',
            title: 'An Error Occured!',
            showConfirmButton: false,
            timer: 1500
          })

          console.log(error);
        }
      }
    }
  },
};
</script>

<style scoped>

</style>