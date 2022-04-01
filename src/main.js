import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash'
import VueBus from 'vue-bus'

Vue.config.productionTip = false

Vue.prototype.$_ = lodash
Vue.use(VueBus)


new Vue({
  render: h => h(App),
}).$mount('#app')
