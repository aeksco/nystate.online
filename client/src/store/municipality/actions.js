import _ from 'lodash'
let website_data = require('../completeData.json')
window.data = website_data
window._ = _
// // // //

// Project module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  fetchCollection: ({ state, commit, rootGetters }) => {
    commit('fetching', true)
    commit('collection', website_data)
    commit('fetching', false)
  },

  toggleOrderBy ({ state, commit }) {
    const ORDER_ASC = 'asc'
    const ORDER_DESC = 'desc'
    if (state.orderBy === ORDER_ASC) {
      commit('orderBy', ORDER_DESC)
    } else {
      commit('orderBy', ORDER_ASC)
    }
  },

  // module/toggleInactive
  toggleInactive ({ state, commit, dispatch }) {
    if (state.showingInactive) {
      commit('showingInactive', false)
    } else {
      commit('showingInactive', true)
    }
    // Re-fetches the collection
    dispatch('fetchCollection')
  },

  // module/setFilter
  // Updates the current search query, invokes the module/filter mutation
  setFilter ({ commit }, filter) {
    commit('filter', filter)
  }
}
