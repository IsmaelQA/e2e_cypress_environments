const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      const environmentName = config.env.environmentName || 'homolog'
      const environmentFilename = `./${environmentName}.settings.json`
      console.log('loading %s', environmentFilename)
      const settings = require(environmentFilename)
      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl
      }
      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        }
      }
      console.log('loaded settings for environment %s', environmentName)
      return config
    },
  },
})
