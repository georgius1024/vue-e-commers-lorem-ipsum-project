export default {
  user: (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) || false,
  auth: (localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth'))) || false,
  loading: false
}
