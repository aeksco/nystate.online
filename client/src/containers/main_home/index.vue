<template>
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-lg-12">

        <div class="row mb-2 pb-2">
          <div class="col-lg-12 text-center">
            <!-- <img class='logo' src="@/assets/logo.png"> -->

            <h1>
              <strong>NYState</strong>Online
            </h1>

            <p class="lead">
              How accessible is your town's website?
            </p>

          </div>
        </div>

        <div class='row'>
          <div class='col-lg-12'>
            <ul class='list-group'>
              <li class='list-group-item' v-for="each in results" :key="each._id">
                {{ each.facility }}
                <!-- <pre class='text-light bg-dark'>{{ each.inspections.length }}</pre> -->
              </li>
            </ul>
          </div>
        </div>

        <div class="row py-3">
          <div class="col-lg-12 text-center input-group mb-3">
            <input type='text' class='form-control' placeholder="City in NY state" v-on:input='city_autofill'>
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

export default {
  name: 'main_home',
  metaInfo: {
    title: 'Home'
  },
  data () {
    return {
      queryString: '',
      results: []
    }
  },
  methods: {
    submitSearch () {
    },
    city_autofill () {
    }
  }
}
</script>
