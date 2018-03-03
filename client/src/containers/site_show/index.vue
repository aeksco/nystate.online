<template>
  <div class="container">
    <div class="row d-flex align-items-center">
      <div class="col-sm-12 col-lg-4">
        <h3>{{ model.municipality }}</h3>
      </div>

      <div class="col-sm-12 col-lg-8 text-lg-right">
        <span class="badge px-2 py-2 badge-light">
          <i class="fa fa-fw fa-building"></i>
          {{ model.type }}
        </span>
        <a :href="model.website" target="_blank">
          <span class="badge px-2 py-2 badge-primary">
            <i class="fa fa-fw fa-home"></i>
            Website
          </span>
        </a>
        <span class="badge px-2 py-2 badge-danger">
          <i class="fa fa-fw fa-times-circle"></i>
          {{ stats.errorCount }} Errors
        </span>
        <span class="badge px-2 py-2 badge-warning">
          <i class="fa fa-fw fa-warning mr-2"></i>
          {{ stats.warningCount }} Warnings
        </span>
        <span class="badge px-2 py-2 badge-info">
          <i class="fa fa-fw fa-info-circle"></i>
          {{ stats.noticeCount }} Notices
        </span>
      </div>

      <div class="col-lg-12">
        <hr class="border-light">
      </div>

      <div class="col-lg-12">

        <ul class='list-group'>
          <ResultChild :result="each" v-for="each in sortedResults" />
        </ul>

        <!-- <a href="http://www.w3.org/TR/WCAG20-TECHS/H25.html">H25</a> -->

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import ResultChild from './result_child'
import { mapActions } from 'vuex'

export default {
  name: 'site_list',
  props: ['id'],
  metaInfo: {
    title: 'Site - Show'
  },
  components: {
    ResultChild
  },
  created () {
    return this.fetch()
  },
  methods: mapActions({
    fetch: 'municipality/fetchCollection'
  }),
  computed: {
    stats () {
      let collection = this.$store.getters['municipality/collection']
      let model = _.find(collection, { swis_code: Number(this.id) })
      return model.data.report_data
    },
    model () {
      let collection = this.$store.getters['municipality/collection']
      console.log(collection)
      let model = _.find(collection, { swis_code: Number(this.id) })
      console.log(model)
      return model
    },
    sortedResults () {
      let collection = this.$store.getters['municipality/collection']
      let model = _.find(collection, { swis_code: Number(this.id) })
      let results = model.data.report_data.results
      return _.orderBy(results, ['level'], ['asc'])
    }
  }
}
</script>
