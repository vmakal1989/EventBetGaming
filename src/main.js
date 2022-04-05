import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash'
import VueBus from 'vue-bus'
import router from './router'
import SharedComponents from './components/shared'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$_ = lodash

Vue.use(VueBus)
Vue.use(SharedComponents)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
