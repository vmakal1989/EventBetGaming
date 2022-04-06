import { mutation } from './mutations'
import appApi from '@/api/app'
import Vue from 'vue';
import _ from 'lodash'

export default {
  setLoading: ({ commit }, value) => commit(mutation.SET_LOADING, value),
  sendLoginRequest: async ({commit, dispatch}, value) => {
    dispatch('setLoading', true)

    let response = await appApi.authUser(value)

    if(response.status === 200) {
      commit(mutation.SET_AUTH_INFO, response.data.data[0].attributes)
      commit(mutation.SET_IS_AUTH, true)
      dispatch('startRefreshToken')
      dispatch('refreshBalance')
      Vue.bus.emit('is-auth', {isAuth: true})
    }

    dispatch('setLoading', false)
  },
  startRefreshToken: ({state, commit, dispatch}) => {
    let refreshTime = state.authInfo['life-time'] * 1000 - 100000
    
    let refrash = setTimeout( async () => {
      try {
        let response = await appApi.refrashToken(state.authInfo['refresh-token'])
        if(response.status === 200) {
          commit(mutation.SET_AUTH_INFO, response.data)
          dispatch('startRefreshToken')
        }
      }
      catch {
        commit(mutation.SET_IS_AUTH, false)
        Vue.bus.emit('is-auth', {isAuth: false})
        clearTimeout(refrash)
      }      
    }, refreshTime)
  },
  refreshBalance: ({commit, state}) => {
    let balanceRequest = (refrash) => {
      appApi.balanceRequest(state.authInfo.token)
      .then(response => {
        commit(mutation.SET_BALANCE, response.data.data[0].attributes.available)
      })
      .catch(() => clearTimeout(refrash))
    }
    let refrash = balanceRequest()
    setInterval(() => {
      balanceRequest(refrash)
    }, 30000)
  },
  gamesRequest: async ({dispatch, commit}) => {
    dispatch('setLoading', true)

    let response = await appApi.gamesRequest()
    let games = _.filter(response.data.data, (el, index) => index < 12 )

    commit(mutation.SET_GAMES, games)

    dispatch('setLoading', false)
  },
  playDemo: async ({dispatch}, id) => {
    dispatch('setLoading', true)

    try {
      let response = await appApi.demoGameRequest(id)
      if(response.status === 200) {
        let gameUrl = response.data.data[0].attributes['launch-options']['game-url']
        dispatch('openGame', gameUrl)
      }
    }
    catch {
      console.log('request error')
    }    

    dispatch('setLoading', false)
  },
  openGame: (event, url) => {
    window.open(url)
  }
}