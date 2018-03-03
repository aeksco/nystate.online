// import _ from 'lodash'

// Project Module mutations
export default {
  collection (state, collection) {
    state.collection = collection
  },
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  filter (state, filter) {
    state.filter = filter
  },
  showingInactive (state, show) {
    state.showingInactive = show
  },
  orderBy (state, orderBy) {
    state.orderBy = orderBy
  }
}
