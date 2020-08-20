export default {
  setLoading: (state, loading) => {
    state.loading = loading
  },
  setUser: (state, user) => {
    state.user = user
    localStorage.setItem('user', JSON.stringify(user))
  },
  setAuth: (state, auth) => {
    state.auth = auth
    localStorage.setItem('auth', JSON.stringify(auth))
  }
}
