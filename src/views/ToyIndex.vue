
<template>
	<section class="toy-app">
    
    <ToyFilter class="toy-filter" @filteredToys="debounceHandler" />
    <ToyList v-if="toys"
              :toys="toys"
              @removed="removeToy" />
    <div class="flex space-between">
      <button class="btn" @click="setPage(-1)">Prev</button>
      <button class="btn" @click="setPage(1)">Next</button>
    </div>
    <Chart/>
    <RouterView />
</section>
</template>


<script>
import ToyList from '../components/ToyList.vue'
import ToyFilter from '../components/ToyFilter.vue'
import Chart from '../components/Chart.vue'
import { utilService } from '../services/util.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
    export default {
  
  
  name: 'ToyIndex',
  components: {
    ToyList,
    ToyFilter,
    Chart,
  },
  data() {
    return {
      isLoading: false,
      filterBy: {
        name: '',
        labels: [],
        pageIdx: 0,
        pageSize: 6,
      },
      
    }
  },
  created() {
    this.debounceHandler = utilService.debounce(this.setFilterBy, 500)
  },
  methods: {
    removeToy(toyId) {
      this.$store
        .dispatch({ type: 'removeToy', toyId })
        .then(() => {
          showSuccessMsg('Toy removed')
        })
        .catch((err) => {
          showErrorMsg('Cannot remove toy')
        })
    },
    filterToys() {
      const filterBy = { ...this.filterBy }
      this.$store.commit({ type: 'setFilterBy', filterBy })

      // If filtering in backend/service
      // this.isLoading = true
      // this.$store
      //   .dispatch({ type: 'loadToys', filterBy })
      //   .then(() => (this.isLoading = false))
    },
    setPage(diff) {
      this.filterBy.pageIdx += diff
      const maxPageIdx = Math.floor(this.toys.length / this.filterBy.pageSize)
      if (this.filterBy.pageIdx < 0) {
        this.filterBy.pageIdx = 0
      } else if (this.filterBy.pageIdx > maxPageIdx) {
        this.filterBy.pageIdx = maxPageIdx
      }
      this.filterToys()
    },
    setFilterBy({name, labels}) {
      this.filterBy.name = name
      this.filterBy.labels = labels
      this.filterToys()
    },
    // setFilterByStatus(status) {
    //   this.filterBy.status = status
    //   this.filterToys()
    // },
  },
  computed: {
    toys() {
      return this.$store.getters.toysToDisplay
    },
  },
  unmounted() {},
}
  
</script>








