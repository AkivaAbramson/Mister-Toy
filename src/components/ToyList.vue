
<template>
	<section class="toy-list">
        <div class="btn">
          <RouterLink to="/toy/edit">Add a New Toy!</RouterLink>
        </div>
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