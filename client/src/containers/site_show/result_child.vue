<template>
  <li :class='className' @click='expandToggle'>
    <div class="row">

      <div class="col-sm-6 text-capitalize text-truncate">
        <i :class="iconCss"></i>
        {{ result.level }}: {{result.message}}
      </div>

      <div class="col-sm-6 text-right">
        <a target='_blank' :href="'http://www.w3.org/TR/WCAG20-TECHS/' + each + '.html'" v-for="each in result.noteCodes" :key="each" v-if='each !== "LayoutTable"'>
          <span :class='badgeClass'>{{ each }}</span>
        </a>
      </div>

      <div :class="toggledCss">
        <div class="card card-body card-nested mt-2 border-dark">
          <div class="row">

            <div class="col-sm-12 text-capitalize text-truncate">
              {{result.message}}
            </div>

            <div class="col-sm-12">
              <span :class='badgeClass'>Selector: {{result.selector}}</span>
              <!-- <pre class='bg-dark text-light'>{{result.context}}</pre> -->
            </div>

          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<!-- // // // //  -->

<script>
export default {
  name: 'result_child',
  props: ['result'],
  data () {
    return {
      toggled: false
    }
  },
  methods: {
    expandToggle () {
      this.toggled = !this.toggled
    },
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
    toggledCss () {
      let css = ['col-sm-12']
      if (!this.toggled) {
        css.push('toggled')
      }
      return css.join(' ')
    },
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
      let css = ['list-group-item', 'result-item']
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

<style lang="sass">
  li.list-group-item.result-item
    cursor: pointer

    .toggled
      opacity: 0
      height: 0

    .card.card-body.card-nested
      background-color: rgba(0, 0, 0, 0.05)

</style>
