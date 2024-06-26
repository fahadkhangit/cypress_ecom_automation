const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000, // Set the default command timeout to 10000ms
    baseUrl: 'https://www.automationexercise.com/' // Set the base URL
  },
});
