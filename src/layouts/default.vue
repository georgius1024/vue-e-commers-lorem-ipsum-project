<template>
  <v-content class="grey lighten-5">
    <v-container>
      <v-app-bar app color="primary" dark>
        <router-link class="d-flex align-center logo" :to="{ name: 'Home' }">
          <img
            :src="require('../assets/logo.svg')"
            alt="Project Logo"
            class="shrink mr-2 pa-3"
            style="filter: invert(1);"
            width="56"
          />
          <v-toolbar-title>Project-name</v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn :to="{ name: 'Home' }" exact text>
            <v-icon class="mr-2">
              mdi-home
            </v-icon>
            Home
          </v-btn>
          <v-btn :to="{ name: 'Services' }" text>
            <v-icon class="mr-2">
              mdi-beehive-outline
            </v-icon>
            Services
          </v-btn>
          <v-btn :to="{ name: 'Prices' }" text>
            <v-icon class="mr-2">
              mdi-currency-usd
            </v-icon>
            Prices
          </v-btn>
          <v-btn :to="{ name: 'Contacts' }" text>
            <v-icon class="mr-2">
              mdi-map-marker
            </v-icon>
            Contacts
          </v-btn>
        </v-toolbar-items>
        <v-toolbar-items class="ml-4">
          <v-menu offset-y v-if="1">
            <v-btn text small slot="activator">
              <span>
                user.name
              </span>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile :to="{ name: 'change-password' }">
                <v-list-tile-title>Change password</v-list-tile-title>
              </v-list-tile>
              <v-list-tile :to="{ name: 'logout' }">
                <v-list-tile-title>Logout</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <template v-else>
            <v-btn text :to="{ name: 'login' }">
              <span>
                Login
              </span>
            </v-btn>
            <v-btn text :to="{ name: 'register' }">
              <span>
                Register
              </span>
            </v-btn>
          </template>
        </v-toolbar-items>

      </v-app-bar>
      <slot />
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>
a.logo {
  color: #fff !important;
  text-decoration: none;
}
</style>
