// Main Containers
import MainHome from '@/containers/main_home'
import MainAbout from '@/containers/main_about'
import MainLegal from '@/containers/main_legal'
import SiteList from '@/containers/site_list'
import SiteShow from '@/containers/site_show'

const MainHomeRoute = {
  path: '/',
  name: 'main_home',
  component: MainHome
}

const MainAboutRoute = {
  path: '/about',
  name: 'main_about',
  component: MainAbout
}

const MainLegalRoute = {
  path: '/terms',
  name: 'main_legal',
  component: MainLegal
}

const SiteListRoute = {
  path: '/sites',
  name: 'site_list',
  component: SiteList
}

const SiteShowRoute = {
  path: '/sites/:id',
  props: true,
  name: 'site_show',
  component: SiteShow
}

export default [
  MainHomeRoute,
  MainAboutRoute,
  MainLegalRoute,
  SiteListRoute,
  SiteShowRoute
]
