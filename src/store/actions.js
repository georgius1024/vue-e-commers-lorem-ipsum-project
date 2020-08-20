const latency = 200
export default {
  login: ({ state, commit }, { user, token }) => {
    commit.setLoading(true)
    return new Promise(resolve => {
      setTimeout(() => {
        state.user = user
        state.auth = { token }
        commit.setLoading(false)
        resolve({ user, token })
      }, latency)
    })
  },
  logout: ({ state, commit }) => {
    commit.setLoading(true)
    return new Promise(resolve => {
      setTimeout(() => {
        state.user = false
        state.auth = false
        commit.setLoading(false)
        resolve()
      }, latency)
    })
  },
  fetchServices: ({ commit }) => {
    commit.setLoading(true)
    return new Promise(resolve => {
      setTimeout(() => {
        import('../assets/services').then(services => {
          commit.setLoading(false)
          resolve(services.default)
        })
      }, latency)
    })
  },
  fetchService: ({ commit }, id) => {
    commit.setLoading(true)
    return new Promise(resolve => {
      setTimeout(() => {
        import('../assets/services').then(services => {
          commit.setLoading(false)
          resolve(services.default.find(e => e.id === id))
        })
      }, latency)
    })
  }
}
