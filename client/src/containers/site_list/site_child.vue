<template>
  <li class='list-group-item'>
    <div class="row">
      <div class="col-lg-3">
        <a :href="'#/sites/' + site.swis_code">{{ displayName }}</a>
        {{ site.type }}
      </div>

      <div class="col-lg-6">
        <strong>Type:</strong> {{ site.type }}
      </div>

      <div class="col-lg-3 text-right">

        <!-- <i class="fa fa-fw fa-check-circle-o fa-lg"></i> -->
        <span class="badge badge-warning">
          <i class="fa fa-fw fa-warning"></i>
          Issues:
          {{ site.data.report_data.results.length }}
        </span>

        <a :href="site.website" target="_blank">
          <span class="badge badge-primary">
            <i class="fa fa-fw fa-home"></i>
            Website
          </span>
        </a>

      </div>
    </div>
    <!-- <pre class='text-light bg-dark'>{{ site }}</pre> -->
  </li>
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
