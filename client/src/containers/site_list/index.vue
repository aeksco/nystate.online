<template>
  <div class="container">
    <div class="row align-items-center">

      <div class="col-sm-12">
        <h3>NY State Websites</h3>
      </div>

      <div class="col-sm-12">
        <hr class='border-light'>
      </div>

      <div class="col-sm-12">
        <Search :module="'municipality'" />
      </div>

      <div class="col-sm-12">
        <table class="table">
          <thead>
            <th>Name</th>
            <th class='text-center'>Website</th>
            <th class='text-center'>Type</th>
            <th class='text-center'>Errors</th>
            <th class='text-center'>Warnings</th>
            <th class='text-center'>Notices</th>
          </thead>
          <tbody>
            <SiteChild :site="each" v-for="each in collection" :key="each.swis_code" v-if="collection[0]" />
          </tbody>
        </table>
      </div>

      <div class="col-sm-12">
        <ul class='list-group'>
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
