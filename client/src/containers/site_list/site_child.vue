<template>
  <tr>
    <td>
      <a :href="'#/sites/' + site.swis_code">{{ displayName }}</a>
    </td>

    <td>
      <a :href="site.website" target="_blank">
        <span class="badge px-2 py-2 badge-primary w-100">
          <i class="fa fa-fw fa-external-link"></i>
          Website
        </span>
      </a>
    </td>

    <td>
      <span class="badge px-2 py-2 badge-light w-100">
        <i class="fa fa-fw fa-building" v-if='site.type === "City"'></i>
        <i class="fa fa-fw fa-university" v-if='site.type === "Town"'></i>
        <i class="fa fa-fw fa-home" v-if='site.type === "Village"'></i>
        <i class="fa fa-fw fa-flag-o" v-if='site.type === "County"'></i>
        {{ site.type }}
      </span>
    </td>

    <td class='text-right'>
      <span class="badge px-2 py-2 badge-danger w-100">
        <i class="fa fa-fw fa-times-circle"></i>
        {{ stats.errorCount }}
        Errors
      </span>
    </td>

    <td class='text-right'>
      <span class="badge px-2 py-2 badge-warning w-100">
        <i class="fa fa-fw fa-warning mr-2"></i>
        {{ stats.warningCount }}
        Warnings
      </span>
    </td>

    <td class='text-right'>
      <span class="badge px-2 py-2 badge-info w-100">
        <i class="fa fa-fw fa-info-circle"></i>
        {{ stats.noticeCount }}
        Notices
      </span>
    </td>

      <!-- <span class="badge px-2 py-2 badge-warning"> -->
        <!-- <i class="fa fa-fw fa-warning"></i> -->
        <!-- Issues: -->
        <!-- {{ site.data.report_data.results.length }} -->
      <!-- </span> -->

    </div>
  </tr>
</template>

<!-- // // // //  -->

<script>
export default {
  name: 'site_child',
  props: ['site'],
  computed: {
    stats () {
      return this.site.data.report_data
    },
    displayName () {
      return this.site.town_name || this.site.village_name || this.site.city_name || this.site.county_name
    }
  }
}
</script>
