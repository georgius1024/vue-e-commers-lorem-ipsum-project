module.exports = {
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/', '/prices.html', '/contacts.html'],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
