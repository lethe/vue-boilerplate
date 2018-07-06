import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'

import "@/scss/main.scss"
import storeOptions from '@/stores/store'
import routerOptions from '@/router/router'

//Components

import FormGroup from "@/components/form/FormGroup.vue"
import FormInput from "@/components/form/Input.vue"

Vue.component('FormGroup', FormGroup)
Vue.component('FormInput', FormInput)

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VeeValidate)

const router = new VueRouter(routerOptions)
const store = new Vuex.Store(storeOptions)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
