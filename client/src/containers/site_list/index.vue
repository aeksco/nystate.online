<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-12">

        <Search :module="'municipality'" />

        <ul class='list-group'>
          <SiteChild :site="each" v-for="each in collection" :key="each.swis_code" v-if="collection[0]" />

          <li class='list-group-item list-group-item-warning text-center' v-if="!collection[0]">
            <p class="lead mb-0">
              <i class="fa fa-warning text-warning mr-2"></i>
              No sites available matching your query
            </p>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import Search from '@/components/Search'
import SiteChild from './site_child'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'site_list',
  metaInfo: {
    title: 'Site - List'
  },
  components: {
    Search,
    SiteChild
  },
  created () {
    return this.fetch()
  },
  methods: mapActions({
    fetch: 'municipality/fetchCollection'
  }),
  computed: mapGetters({
    collection: 'municipality/filteredCollection'
  })
}
</script>
