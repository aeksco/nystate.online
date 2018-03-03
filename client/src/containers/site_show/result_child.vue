<template>
  <li :class='className'>
    <div class="row">
      <div class="col-lg-2 text-capitalize">
        <i :class="iconCss"></i>
        {{ result.level }}
      </div>

      <div class="col-lg-10 text-right">
        <a target='_blank' :href="'http://www.w3.org/TR/WCAG20-TECHS/' + each + '.html'" v-for="each in result.noteCodes" :key="each" v-if='each !== "LayoutTable"'>
          <span class='badge badge-secondary mr-2'>{{ each }}</span>
        </a>
      </div>

      <hr>

      <div class="col-lg-12">
        {{result.message}}
      </div>
    </div>
  </li>
</template>

<!-- // // // //  -->

<script>
export default {
  name: 'result_child',
  props: ['result'],
  computed: {
    iconCss () {
      let css = ['fa fa-fw']
      let level = this.result.level
      if (level === 'notice') {
        css.push('fa-info-circle')
      } else if (level === 'error') {
        css.push('fa-times')
      } else if (level === 'warning') {
        css.push('fa-warning')
      } else {
        css.push('list-group-item-primary')
      }
      return css.join(' ')
    },
    className () {
      let css = ['list-group-item']
      let level = this.result.level
      if (level === 'notice') {
        css.push('list-group-item-info')
      } else if (level === 'error') {
        css.push('list-group-item-danger')
      } else if (level === 'warning') {
        css.push('list-group-item-warning')
      } else {
        css.push('list-group-item-primary')
      }
      return css.join(' ')
    }
    // displayName () {
      // return this.site.town_name || this.site.village_name || this.site.city_name || this.site.county_name
    // }
  }
}
</script>
