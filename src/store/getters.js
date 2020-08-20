export default {
  user: state => state.user,
  token: state => state.auth && state.auth.token,
  loading: state => state.loading
}
