<template>
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-lg-12">

        <div class="row mb-2 pb-2">
          <div class="col-lg-12 text-center">
            <!-- <img class='logo' src="@/assets/logo.png"> -->

            <h1>
              <strong>NYState.</strong>Online
            </h1>

            <p class="lead">
              How accessible is your town's website?
            </p>

          </div>
        </div>

        <div class="row py-3 mb-3">
          <div class="col-lg-10 pr-0">
            <!-- <input type='text' class='form-control' placeholder="City in NY state" v-on:input='city_autofill'> -->
            <input type='text' class='form-control' placeholder="City in NY state">
          </div>
          <div class="col-lg-2 pl-0">
            <button type='submit' class='btn btn-primary mx-2 px-1.5' @click="submitSearch()">
              <i class="fa fa-fw fa-search mr-2"></i>
              Search
            </button>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'main_home',
  metaInfo: {
    title: 'Home'
  },
  created () {
    return this.fetch()
  },
  data () {
    return {
      queryString: ''
    }
  },
  methods: mapActions({
    fetch: 'municipality/fetchCollection'
  }),
  computed: mapGetters({
    collection: 'municipality/collection'
  })
}
</script>
