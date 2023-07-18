<template>
	<section class="toy-filter flex space-between">
        <input class="input" 
                v-model="filterBy.name"
                @input="setFilter" 
                type="text"
                placeholder="Search toy..">
        <div>
          <label for="labels">Labels:</label>
          <select
            id="labels"
            multiple
            v-model="filterBy.labels"
            @change="setFilter">
            <option v-for="label in labels" :key="label" :value="label">
              {{ label }}
            </option>
          </select>
        </div>
        <!-- <div class="filter-btns flex align-center">
          <FilterButton
            v-for="button in buttons" 
            :button="button"
            :key="button.id"
            @filtered="setFilterStatus" />
        </div> -->
    </section>
</template>

<script>
import { utilService } from '../services/util.service.js'
	export default {
	data() {
		return {
      selectedLabels: [],
			filterBy: {
				name: '',
        inStock: false,
        labels: []
			},
			sortBy: {
				by: '',
				desc: 1,
			},
      labels:[]
			
		}
  },
  created() {
    // this.setFilter = utilService.debounce(() => {
    //   this.$emit('setFilter', this.filterBy)
    // }, 500)
    this.$store.dispatch('getLabels')
        .then(() => {
         this.labels = this.$store.getters.labels 
        //  console.log(this.labels) 
        })
  },
  // watch: {
  //   filterBy: {
  //     handler() {
  //       this.setFilter()
  //     },
  //     deep: true,
  //   },
  // },
  methods: {

    setFilter() {
      this.$emit('filteredToys', this.filterBy)
      // console.log(this.filterBy.labels)
    },
    setLabels(){
      console.log(this.filterBy.labels)
    }
  },
	}
</script>


