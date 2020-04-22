import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _51a53a66 = () => interopDefault(import('..\\pages\\articles\\index.vue' /* webpackChunkName: "pages_articles_index" */))
const _062adc5e = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages_contact_index" */))
const _6e3c864a = () => interopDefault(import('..\\pages\\indexvuetify.vue' /* webpackChunkName: "pages_indexvuetify" */))
const _2951d830 = () => interopDefault(import('..\\pages\\over-ons\\index.vue' /* webpackChunkName: "pages_over-ons_index" */))
const _95306d22 = () => interopDefault(import('..\\pages\\projecten\\index.vue' /* webpackChunkName: "pages_projecten_index" */))
const _532ed9b5 = () => interopDefault(import('..\\pages\\articles\\add.vue' /* webpackChunkName: "pages_articles_add" */))
const _8bab1a8e = () => interopDefault(import('..\\pages\\contact\\chat\\index.vue' /* webpackChunkName: "pages_contact_chat_index" */))
const _f5ec98a2 = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages_user_login" */))
const _693dcab4 = () => interopDefault(import('..\\pages\\user\\logout.vue' /* webpackChunkName: "pages_user_logout" */))
const _15f51a36 = () => interopDefault(import('..\\pages\\user\\my-account.vue' /* webpackChunkName: "pages_user_my-account" */))
const _fb53da66 = () => interopDefault(import('..\\pages\\user\\register.vue' /* webpackChunkName: "pages_user_register" */))
const _6001d2ae = () => interopDefault(import('..\\pages\\user\\adm\\dashboard\\index.vue' /* webpackChunkName: "pages_user_adm_dashboard_index" */))
const _31f85094 = () => interopDefault(import('..\\pages\\user\\adm\\dashboard\\inspire.vue' /* webpackChunkName: "pages_user_adm_dashboard_inspire" */))
const _0ce26f28 = () => interopDefault(import('..\\pages\\user\\adm\\dashboard\\inspire2.vue' /* webpackChunkName: "pages_user_adm_dashboard_inspire2" */))
const _eb8f92f8 = () => interopDefault(import('..\\pages\\user\\adm\\dashboard\\welcome\\index.vue' /* webpackChunkName: "pages_user_adm_dashboard_welcome_index" */))
const _d514bb18 = () => interopDefault(import('..\\pages\\articles\\_id\\index.vue' /* webpackChunkName: "pages_articles__id_index" */))
const _449a3fd2 = () => interopDefault(import('..\\pages\\articles\\_id\\update.vue' /* webpackChunkName: "pages_articles__id_update" */))
const _7c7dcb83 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles",
    component: _51a53a66,
    name: "articles"
  }, {
    path: "/contact",
    component: _062adc5e,
    name: "contact"
  }, {
    path: "/indexvuetify",
    component: _6e3c864a,
    name: "indexvuetify"
  }, {
    path: "/over-ons",
    component: _2951d830,
    name: "over-ons"
  }, {
    path: "/projecten",
    component: _95306d22,
    name: "projecten"
  }, {
    path: "/articles/add",
    component: _532ed9b5,
    name: "articles-add"
  }, {
    path: "/contact/chat",
    component: _8bab1a8e,
    name: "contact-chat"
  }, {
    path: "/user/login",
    component: _f5ec98a2,
    name: "user-login"
  }, {
    path: "/user/logout",
    component: _693dcab4,
    name: "user-logout"
  }, {
    path: "/user/my-account",
    component: _15f51a36,
    name: "user-my-account"
  }, {
    path: "/user/register",
    component: _fb53da66,
    name: "user-register"
  }, {
    path: "/user/adm/dashboard",
    component: _6001d2ae,
    name: "user-adm-dashboard"
  }, {
    path: "/user/adm/dashboard/inspire",
    component: _31f85094,
    name: "user-adm-dashboard-inspire"
  }, {
    path: "/user/adm/dashboard/inspire2",
    component: _0ce26f28,
    name: "user-adm-dashboard-inspire2"
  }, {
    path: "/user/adm/dashboard/welcome",
    component: _eb8f92f8,
    name: "user-adm-dashboard-welcome"
  }, {
    path: "/articles/:id",
    component: _d514bb18,
    name: "articles-id"
  }, {
    path: "/articles/:id/update",
    component: _449a3fd2,
    name: "articles-id-update"
  }, {
    path: "/",
    component: _7c7dcb83,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
