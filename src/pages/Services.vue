<template>
  <Layout>
    <template v-if="services">
      <h1 class="display-4 mb-5">Services</h1>
      <v-list three-line>
        <v-list-item-group>
          <v-list-item
            v-for="(service, index) in services"
            :key="index"
            :to="{ name: 'Service', params: { id: service.id } }"
          >
            <v-list-item-avatar>
              <v-img :src="service.image" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="service.title" />
              <v-list-item-subtitle v-text="service.description" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </template>
    <template v-else>
      <v-skeleton-loader class="mt-5" type="heading"> </v-skeleton-loader>
      <v-skeleton-loader type="list-item-avatar-three-line"> </v-skeleton-loader>
      <v-skeleton-loader type="list-item-avatar-three-line"> </v-skeleton-loader>
      <v-skeleton-loader type="list-item-avatar-three-line"> </v-skeleton-loader>
    </template>
  </Layout>
</template>

<script>
import { mapActions } from 'vuex'
import Layout from '../layouts/default'
export default {
  name: 'Services',
  components: { Layout },
  data() {
    return {
      services: null
    }
  },
  mounted() {
    this.fetchServices().then(services => (this.services = services))
  },
  methods: {
    ...mapActions(['fetchServices'])
  }
}
</script>
