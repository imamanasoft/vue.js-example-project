<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Show Project</h2>
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
        <b class="text-muted">Name:</b>
        <p>{{ project.name }}</p>
        <b class="text-muted">Description:</b>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </layout-div>
</template>

<script>
import LayoutDiv from '@/components/ui-components/LayoutDiv.vue'
import Swal from 'sweetalert2'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ProjectShow',
  components: {
    LayoutDiv,
  },
  data() {
    return {
      isSaving:false,
    };
  },
  async created() {
    await this.initProjectData();
  },
  computed: {
    ...mapState('project', ['project']),
  },
  methods: {
    ...mapActions('project', [
      'fetchProject'
    ]),
    async initProjectData() {
      const id = this.$route.params.id;

      try {
        await this.fetchProject({
          id : id
        });
      } catch (error) {
        await Swal.fire({
          icon: 'error',
          title: 'An Error Occured!',
          showConfirmButton: false,
          timer: 1500
        })

        console.log(error)
      }
    }
  }
};
</script>

<style scoped>

</style>