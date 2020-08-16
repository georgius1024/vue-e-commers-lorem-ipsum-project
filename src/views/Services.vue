<template>
  <v-container v-if="services">
    <h1 class="display-4 mb-5">Services</h1>
    <v-list three-line>
      <v-list-item-group>
        <v-list-item v-for="(service, index) in services" :key="index" :to="service.name">
          <v-list-item-avatar>
            <v-img :src="`${service.image}?lock=${index + 1}`" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="service.title" />
            <v-list-item-subtitle v-text="service.description" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
  <v-alert type="warning" v-else class="ma-5">
    Services are loading
    <v-progress-circular indeterminate color="red" class="ml-4"/>
  </v-alert>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      services: null
    }
  },
  mounted() {
    setTimeout(() => {
      import('../assets/services').then(services => (this.services = services))
    }, 1000)
  }
}
</script>
