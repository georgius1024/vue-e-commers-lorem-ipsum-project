module.exports = {
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/', '/prices/', '/contacts/', '/services/'],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
