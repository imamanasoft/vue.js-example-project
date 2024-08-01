<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Edit Project</h2>
    <div class="card">
      <div class="card-header">
        <router-link class="btn btn-outline-info float-right" to="/">
          View All Projects
        </router-link>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              id="name"
              v-model="editedProject.name"
              type="text"
              class="form-control"
              name="name"
            />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              id="description"
              v-model="editedProject.description"
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
import { mapActions, mapState } from "vuex";

import LayoutDiv from "@/components/ui-components/LayoutDiv.vue";
import Swal from "sweetalert2";

export default {
  name: "ProjectEdit",
  components: {
    LayoutDiv,
  },
  data() {
    return {
      isSaving: false,
      editedProject: null,
    };
  },
  watch: {
    project(newVal) {
      this.editedProject = newVal;
    },
  },
  computed: {
    ...mapState("project", ["project"]),
  },
  created() {
    this.initProjectData();
  },
  methods: {
    ...mapActions("project", ["fetchProject", "editProject"]),
    async initProjectData() {
      const id = this.$route.params.id;

      try {
        await this.fetchProject({ id: id });
      } catch (error) {
        await Swal.fire({
          icon: "error",
          title: "An Error Occured!",
          showConfirmButton: false,
          timer: 1500,
        });

        console.log(error);
      }
    },
    async handleSave() {
      this.isSaving = true;

      try {
        await this.editProject({ project: this.editedProject });

        await Swal.fire({
          icon: "success",
          title: "Project updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        this.isSaving = false;
        this.project.name = "";
        this.project.description = "";

        // named route
        this.$router.push({ name: "projectList" });
      } catch (error) {
        this.isSaving = false;

        await Swal.fire({
          icon: "error",
          title: "An Error Occured!",
          showConfirmButton: false,
          timer: 1500,
        });

        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
