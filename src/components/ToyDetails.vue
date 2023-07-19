<template>
    <section v-if="toy" class="toy-details">
      <h2>{{ toy.name }}</h2>
      <h5>{{ toy._id }}</h5>
      <p>Price: ${{ toy.price }}</p>
      <ul>Categories:
          <li class="category-item" v-for="label in toy.labels" :key="label">
               {{ label }}
          </li>
      </ul>
      <p>Toy released at: {{ formattedTime }}</p>
      <!-- <p>In stock: {{ toy.inStock }}</p> -->
        
    </section>
</template>

<script>
import { toyService } from '../services/toy.service.js'
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
  methods: {
        formatTimestamp(timestamp) {
            const date = new Date(timestamp)
            return date.toLocaleString()
        }
    },
  computed: {
    formattedTime() {
            if (this.toy && this.toy.createdAt) {
                return this.formatTimestamp(this.toy.createdAt)
            }
            return ''
        }
    
  },
}
</script>


