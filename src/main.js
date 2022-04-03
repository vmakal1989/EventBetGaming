import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash'
import VueBus from 'vue-bus'
import router from './router'
import SharedComponents from './components/shared'

Vue.config.productionTip = false

Vue.prototype.$_ = lodash

Vue.use(VueBus)
Vue.use(SharedComponents)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
