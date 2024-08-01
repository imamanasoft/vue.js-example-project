<template>
  <div class="mt-4">
    <label class="form-label">Football Player</label>
    <input type="checkbox" v-model="isFootballPlayer">
  </div>
  <div class="mt-4">
    <label class="form-label">Olympic champ</label>
    <input type="checkbox" v-model="isOlympicChamp">
  </div>
  <AddAthlete v-if="isFootballPlayer">
    <template #header="{ firstName, lastName }">
      Add Football player Infos {{ firstName }} {{ lastName }}
    </template>
    <template #footer>
      <button class="btn btn-dark">Done</button>
    </template>
  </AddAthlete>
  <AddAthlete v-else-if="isOlympicChamp">
    <template #header>
      Add Olympic champ
    </template>
    <template #footer>
      <button class="btn btn-warning">Pass it</button>
    </template>
  </AddAthlete>
  <AddAthlete
    v-else
    :message="message"
  >
    <div class="progress">
      <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <template #body>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
      </div>

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">@example.com</span>
        </div>
      </div>

      <label for="basic-url">Your vanity URL</label>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
        </div>
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">$</span>
        </div>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <div class="input-group-append">
          <span class="input-group-text">.00</span>
        </div>
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">With textarea</span>
        </div>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </template>
  </AddAthlete>
</template>

<script>
import AddAthlete from '@/components/user/AddAthlete.vue'

export default {
  name: 'FooterComponent',
  components: { AddAthlete },
  data () {
    return {
      isFootballPlayer: false,
      isOlympicChamp: false,
      message: 'Messi',
    }
  }
}
</script>

<style scoped>

</style>