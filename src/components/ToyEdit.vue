<template>
    <section v-if="toy" class="toy-edit flex justify-center align-center">
        <ul>{{ toy.name }}</ul>
        <ul>{{ toy.price }}</ul>
        <ul>
            <li v-for="label in toy.labels" :key="label">{{ label }}</li>
        </ul>
        <form @submit.prevent="saveToy"
              class="flex space-between align-center">
          <input class="input" v-model="toy.name" type="text">
          <input class="input" v-model="toy.price" type="number">
          <button class="btn">Save</button>
        </form>
      </section>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { toyService } from '../services/toy.service.js'
export default {
    data() {
        return {
            toy: null,
        }
    },
    watch: {
        '$route.params': {
         handler() {
            const { toyId } = this.$route.params
            if (toyId) {
            toyService.getById(toyId).then((toy) => (this.toy = toy))

            // this.$store
            //   .dispatch({ type: 'getById', toyId })
            //   .then(() => (this.toy = this.toyClone))
            } else {
            this.toy = toyService.getEmptyToy()
            }
        },
        immediate: true,
        },
  },
  created() {},
  methods: {
    saveToy() {
      this.$store
        .dispatch({ type: 'saveToy', toy: this.toy })
        .then((toy) => {
          showSuccessMsg('Added/Updated succssefully')
          this.$router.push('/toy')
        })
        .catch((err) => {
          showErrorMsg("Couldn't add/update toy")
        })
    },
  },
}
</script>


