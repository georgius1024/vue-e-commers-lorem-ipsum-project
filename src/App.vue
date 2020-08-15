<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link class="d-flex align-center logo" :to="{ name: 'Home' }">
        <img
          :src="require('./assets/logo.svg')"
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
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
a.logo {
  color: #fff !important;
  text-decoration: none;
}
</style>
