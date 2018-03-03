<template>
  <div class="container">
    <div class="row d-flex align-items-center">
      <div class="col-lg-6">
        <h2>{{ model.municipality }}</h2>
      </div>

      <div class="col-lg-6 text-right">
        <span class="badge px-4 py-2 badge-danger">
          Errors: {{ stats.errorCount }}
        </span>
        <span class="badge px-4 py-2 badge-warning">
          Warnings: {{ stats.warningCount }}
        </span>
        <span class="badge px-4 py-2 badge-info">
          Notices: {{ stats.noticeCount }}
        </span>
      </div>

      <div class="col-lg-12">
        <hr>
      </div>

      <div class="col-lg-12">

        <ul class='list-group'>
          <ResultChild :result="each" v-for="each in model.data.report_data.results" />
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
      console.log(JSON.stringify(model.data.stats_data[0], null, 2))
      return model.data.stats_data[0]
    },
    model () {
      let collection = this.$store.getters['municipality/collection']
      console.log(collection)
      let model = _.find(collection, { swis_code: Number(this.id) })
      console.log(model)
      return model
    }
  }
}
</script>
