module.exports = {
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/', '/prices/', '/contacts/'],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
