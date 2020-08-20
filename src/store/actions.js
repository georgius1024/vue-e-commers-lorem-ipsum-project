const latency = 500
const rightLogin = 'customer'
const rightPassword = 'password'
const userName = 'John D. Dow'
const token = '710efd4d-2cdc-4e69-9ec4-d4a51ed56ee4'
export default {
  login: ({ commit }, { login, password }) => {
    commit('setLoading', true)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('setLoading', false)
        if (login === rightLogin && password === rightPassword) {
          const user = { name: userName }
          const auth = { token }
          commit('setUser', user)
          commit('setAuth', auth)
          resolve(user)
        } else {
          commit('setUser', false)
          commit('setAuth', false)
          reject(new Error('Wrong credentials!'))
        }
      }, latency)
    })
  },
  logout: ({ commit }) => {
    commit('setLoading', true)
    return new Promise(resolve => {
      setTimeout(() => {
        commit('setLoading', false)
        commit('setUser', false)
        commit('setAuth', false)
        resolve()
      }, latency)
    })
  },
  fetchServices: ({ commit }) => {
    commit('setLoading', true)
    return new Promise(resolve => {
      setTimeout(() => {
        import('../assets/services').then(services => {
          commit('setLoading', false)
          resolve(services.default)
        })
      }, latency)
    })
  },
  fetchService: ({ commit }, id) => {
    commit('setLoading', true)
    return new Promise(resolve => {
      setTimeout(() => {
        import('../assets/services').then(services => {
          commit('setLoading', false)
          resolve(services.default.find(e => e.id === id))
        })
      }, latency)
    })
  }
}
