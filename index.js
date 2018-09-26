import Vue from 'blessed-vue'
import Facetats from './src/facetats.vue'

const el = Vue.dom.createElement()

Vue.dom.append(el)

const instance = new Vue({
  name: 'app',
  components: {
    Facetats
  },
  template: '<facetats />'
}).$mount(el)
