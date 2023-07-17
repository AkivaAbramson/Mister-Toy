<template>
	<section class="toy-filter flex space-between">
        <input class="input" 
                v-model="filterBy.txt"
                @input="setFilterTxt" 
                type="text"
                placeholder="Search toy..">
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
	export default {
	data() {
		return {
			filterBy: {
				txt: '',
			},
			sortBy: {
				by: '',
				desc: 1,
			},
			
		}
  },
  methods: {

    setFilterTxt() {
      this.$emit('filteredTxt', this.filterBy.txt)
    },
  },
	}
</script>


