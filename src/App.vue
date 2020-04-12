<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link class="d-flex align-center logo" :to="{ name: 'Home' }">
        <v-img
          alt="Project Logo"
          class="shrink mr-2 pa-3"
          style="filter: invert(1);"
          contain
          :src="require('./assets/logo.svg')"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title>Project-name</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn :to="{ name: 'Prices' }" text>
          Prices
        </v-btn>
        <v-btn :to="{ name: 'Contacts' }" text>
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
