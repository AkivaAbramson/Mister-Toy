<template>
    <section v-if="toy" class="toy-details flex flex-column align-center justify-center">
        <p>{{toy.name}}</p>
        <p>Price: {{toy.price}}</p>
        
    </section>
</template>

<script>
import { toyService } from '../services/toy.service.local.js'
export default {
    watch: {
    '$route.params': {
      handler() {
        const { toyId } = this.$route.params

        toyService.getById(toyId).then((toy) => (this.toy = toy))

        // this.$store
        //   .dispatch({ type: 'getById', toyId })
        //   .then(toy => (this.toy = toy))
      },
      immediate: true,
    },
  },
  data() {
    return {
      toy: null,
    }
  },
  computed: {
    
  },
}
</script>


