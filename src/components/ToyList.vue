<script>
import ToyPreview from './ToyPreview.vue'
export default {
  name: 'ToyList',
  props: ['toys'],
  components:{
    ToyPreview
  }
}
</script>

<template>
	<section class="toy-list">
        <RouterLink class="btn btn-add" to="/toy/edit">Add</RouterLink>
        <ul v-if="toys.length" class="clean-list">
          <ToyPreview 
              v-for="toy in toys" 
              :key="toy._id"   
              :toy="toy" 
              @removed="$emit('removed', toy._id)" 
            />
        </ul>
        <p v-else>No toys to show..</p>
      </section>
</template>