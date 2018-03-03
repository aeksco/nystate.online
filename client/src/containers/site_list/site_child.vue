<template>
  <div class="col-sm-12">
    <div class='card card-body bg-dark text-light border-light mb-2'>
      <div class="row">
        <div class="col-lg-6">
          <a :href="'#/sites/' + site.swis_code">{{ displayName }}</a>
        </div>


        <div class="col-lg-6 text-right">

          <span class="badge px-2 py-2 badge-light">
            <i class="fa fa-fw fa-building"></i>
            {{ site.type }}
          </span>
          <!-- <i class="fa fa-fw fa-check-circle-o fa-lg"></i> -->
          <span class="badge px-2 py-2 badge-warning">
            <i class="fa fa-fw fa-warning"></i>
            Issues:
            {{ site.data.report_data.results.length }}
          </span>

          <a :href="site.website" target="_blank">
            <span class="badge px-2 py-2 badge-primary">
              <i class="fa fa-fw fa-home"></i>
              Website
            </span>
          </a>

        </div>
      </div>
      <!-- <pre class='text-light bg-dark'>{{ site }}</pre> -->
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  name: 'site_child',
  props: ['site'],
  computed: {
    displayName () {
      return this.site.town_name || this.site.village_name || this.site.city_name || this.site.county_name
    }
  }
}
</script>
