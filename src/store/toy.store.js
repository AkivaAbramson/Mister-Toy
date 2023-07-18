import { toyService } from '../services/toy.service.js'

export const toyStore = {
  state: {
    toys: null,
    toysCount: null,
    currToy: null,
    allToys:null,
    filterBy: {
      name: '',
      labels: [],
      pageIdx: 0,
      pageSize: 5,
    },
    sortBy: {
      by: '',
      desc: 1,
    },
    labels:[]
  },
  getters: {
    toy({ currToy }) {
      return currToy
    },
    
    labels({ labels }) {
      return labels
    },

    toysToDisplay({ filterBy, toys }) {
      if (!toys) return null

      const { name, pageIdx, pageSize } = filterBy
      let filteredToys = toys

      const regex = new RegExp(name, 'i')
      filteredToys = filteredToys.filter((toy) => regex.test(toy.name))
      if (filterBy.labels && filterBy.labels.length > 0) {
        filteredToys = filteredToys.filter(toy => filterBy.labels.every(label => toy.labels.includes(label)))
      }   

      const startIdx = pageIdx * pageSize
      filteredToys = filteredToys.slice(startIdx, startIdx + pageSize)
      // console.log(filteredToys)

      return filteredToys
    },
    allToys({toys}){
      return toys

    }
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    setCurrToy(state, { toy }) {
      state.currToy = toy
    },
    addToy(state, { toy }) {
      state.toys.unshift(toy)
    },
    updateToy(state, { toy }) {
      const idx = state.toys.findIndex((t) => t._id === toy._id)
      state.toys.splice(idx, 1, toy)
    },
    removeToy(state, { toyId }) {
      const idx = state.toys.findIndex((toy) => toy._id === toyId)
      state.toys.splice(idx, 1)
    },
    setFilterBy(state, { filterBy }) {
      // console.log(filterBy[0])
      state.filterBy = filterBy
    },
    setLabels(state,{ labels }){
      state.labels = labels
      // console.log(state.labels)
  },
  },
  actions: {
    loadToys(context) {
      toyService
        .query()
        .then((toys) => {
          context.commit({ type: 'setToys', toys })
        })
        .catch((err) => {
          throw err
        })
    },
    saveToy({ commit, dispatch }, { toy }) {
      const actionType = toy._id ? 'updateToy' : 'addToy'
      return toyService.save(toy).then((savedToy) => {
        commit({ type: actionType, toy: savedToy })
        return savedToy
      })
    },
    removeToy({ commit, dispatch, state }, payload) {
      console.log('🚀 ~ file: toy.store.js:101 ~ payload:', payload)
      return toyService.remove(payload.toyId).then(() => {
        const toyTxt = state.toys.find(
          (toy) => toy._id === payload.toyId
        ).txt
        commit(payload) // {type: 'removeToy', toyId}
      })
    },
    getById({ commit }, { toyId }) {
      return toyService.getById(toyId).then((toy) => {
        commit({ type: 'setCurrToy', toy })
        return toy
      })
    },
    getLabels({ commit }) {
      return toyService.getLabels()
          .then(labels => {
              // console.log(labels)
              commit({ type: 'setLabels', labels})
          })
  },
  allToys(context){
    toyService
        .query()
        .then((toys) => {
          return toys
        })
        .catch((err) => {
          throw err
        })
  }
  },
  // loadToys({ commit }, { filterBy }) {
  //   toyService
  //     .query(filterBy)
  //     .then(toys => commit({ type: 'setToys', toys }))
  //     .catch(err => {
  //       throw err
  //     })
  // },
}

