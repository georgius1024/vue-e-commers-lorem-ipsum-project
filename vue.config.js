const services = require('./src/assets/services.json').map(e => e.id)
module.exports = {
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/', '/prices/', '/contacts/', '/services/', ...services.map(id => `/services/${id}/`)],
      useRenderEvent: true,
      headless: false,
      onlyProduction: true
    }
  }
}
