<template>
  <li :class='className'>
    <div class="row">
      <div class="col-sm-2 text-capitalize">
        <i :class="iconCss"></i>
        {{ result.level }}
      </div>

      <div class="col-sm-10 text-right">
        <a target='_blank' :href="'http://www.w3.org/TR/WCAG20-TECHS/' + each + '.html'" v-for="each in result.noteCodes" :key="each" v-if='each !== "LayoutTable"'>
          <span :class='badgeClass'>{{ each }}</span>
        </a>
      </div>

      <div class="col-sm-12">
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
  methods: {
    getContext () {
      let level = this.result.level
      if (level === 'notice') {
        return 'info'
      } else if (level === 'error') {
        return 'danger'
      } else if (level === 'warning') {
        return 'warning'
      } else {
        return 'primary'
      }
    }
  },
  computed: {
    iconCss () {
      let css = ['fa fa-fw']
      let level = this.result.level
      if (level === 'notice') {
        css.push('fa-info-circle')
      } else if (level === 'error') {
        css.push('fa-times-circle')
      } else if (level === 'warning') {
        css.push('fa-warning')
      } else {
        css.push('list-group-item-primary')
      }
      return css.join(' ')
    },
    className () {
      let css = ['list-group-item']
      let context = this.getContext()
      css.push(`list-group-item-${context}`)
      return css.join(' ')
    },
    badgeClass () {
      let css = ['badge', 'mr-2']
      let context = this.getContext()
      css.push(`badge-${context}`)
      return css.join(' ')
    }
    // displayName () {
      // return this.site.town_name || this.site.village_name || this.site.city_name || this.site.county_name
    // }
  }
}
</script>
