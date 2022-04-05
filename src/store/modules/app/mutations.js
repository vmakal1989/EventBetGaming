export const mutation = {
	SET_LOADING: 'SET_LOADING',
}


export default {
	[mutation.SET_LOADING]: (state, value) => state.loading = value,
}