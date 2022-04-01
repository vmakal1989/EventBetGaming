import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash'
import VueBus from 'vue-bus'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$_ = lodash
Vue.use(VueBus)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
