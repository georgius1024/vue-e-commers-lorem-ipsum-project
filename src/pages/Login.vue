<template>
  <Layout>
    <v-flex md6 offset-md3 xs12 class="mt-3">
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="Login" v-model="loginName" required key="login"></v-text-field>
            <v-text-field label="Password" v-model="password" required type="password" key="password"></v-text-field>
          </v-form>
          <v-alert type="error" v-if="error">
            {{ error }}
          </v-alert>
          <div>
            <a href="javascript:void" @click="fakeLogin">Login as test customer</a>
          </div>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn block color="primary" @click="doLogin">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </Layout>
</template>
<script type="text/babel">
import Layout from '../layouts/default'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: { Layout },
  data() {
    return {
      loginName: '',
      password: '',
      error: ''
    }
  },
  methods: {
    fakeLogin() {
      this.loginName = 'customer'
      this.password = 'password'
      this.doLogin()
    },
    async doLogin() {
      if (this.loginName && this.password) {
        try {
          await this.login({ login: this.loginName, password: this.password })
          this.$router.push({ name: 'Home' })
        } catch (error) {
          this.error = error
        }
      }
    },
    ...mapActions(['login'])
  }
}
</script>
