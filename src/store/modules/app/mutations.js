export const mutation = {
  SET_LOADING: 'SET_LOADING',
  SET_IS_AUTH: 'SET_IS_AUTH',
  SET_AUTH_INFO: 'SET_AUTH_INFO',
  SET_BALANCE: 'SET_BALANCE',
  SET_GAMES: 'SET_GAMES'
}


export default {
  [mutation.SET_LOADING]: (state, value) => state.loading = value,
  [mutation.SET_IS_AUTH]: (state, value) => state.isAuth = value,
  [mutation.SET_AUTH_INFO]: (state, value) => state.authInfo = value,
  [mutation.SET_BALANCE]: (state, value) => state.balance = value,
  [mutation.SET_GAMES]: (state, value) => state.games = value,
}