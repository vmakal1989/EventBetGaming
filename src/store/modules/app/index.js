import actions from './actions'
import getters from './getters'
import mutations from './mutations'


const state = {
  loading: false,
  isAuth: false,
  authInfo: null,
  balance: 0,
  games: []
}

export default {
  state,
  actions,
  getters,
  mutations
}