import _ from 'lodash'

// Project Module Getters
export default {
  collection: state => {
    return state.collection
  },
  fetching: state => {
    return state.fetching
  },
  filter: state => {
    return state.filter
  },
  showingInactive: state => {
    return state.showingInactive
  },
  orderBy: state => {
    return state.orderBy
  },
  filteredCollection: state => {
    return _.chain(state.collection)
    .filter(u => {
      let display = u.town_name || u.village_name || u.county_name || u.city_name || u.municipality || ''
      return display.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1 && !!u.data.report_data
    })
    // .orderBy(['data.report_data.warningCount', 'data.report_data.errorCount', 'data.report_data.noticeCount'], ['desc'])
    .orderBy(['data.report_data.errorCount'], ['desc'])
    // .drop(state.start)
    // .take(state.pageSize)
    .value()
  }
}
