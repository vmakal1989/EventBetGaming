import { mutation } from './mutations'

export default {
	setLoading: ({ commit }, value) => commit(mutation.SET_LOADING, value),
}