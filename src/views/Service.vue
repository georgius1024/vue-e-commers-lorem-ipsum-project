<template>
  <Layout>
    <div v-if="service">
      <v-breadcrumbs
        class="ml-4"
        :items="[
          {
            text: 'All services',
            exact: true,
            to: { name: 'Services' }
          },
          {
            text: service.title,
            exact: true,
            to: { name: 'Service', params: { id: service.id } }
          }
        ]"
      />
      <h1 class="display-2 mb-5 mt-3 text-capitalize">{{ service.title }}</h1>
      <v-row>
        <v-col cols="12">
          <v-img :src="service.image" :height="480" :width="640" />
        </v-col>
      </v-row>
      <p class="body-1 mb-4">
        {{ service.description }}
      </p>
      <v-btn color="primary" block large :to="{ name: 'Prices' }">
        Subscribe now
      </v-btn>
    </div>
  </Layout>
</template>

<script>
import { mapActions } from 'vuex'
import Layout from '../layouts/default'
export default {
  name: 'Service',
  components: { Layout },
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      service: null
    }
  },
  mounted() {
    this.fetchService(+this.id).then(service => (this.service = service))
  },
  methods: {
    ...mapActions(['fetchService'])
  }
}
</script>

<style></style>
