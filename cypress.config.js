const { defineConfig } = require("cypress");
const fs = require('fs'); // Import the file system module

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Get the environment from the CLI (e.g., --env env=dev), default to 'dev'
      const environment = config.env.env || 'dev';

      // Construct the file path for the environment-specific config
      const envFilePath = `./cypress.env.${environment}.json`;

      // Load the environment-specific variables if the file exists
      if (fs.existsSync(envFilePath)) {
        const envVariables = require(envFilePath);
        config.env = { ...config.env, ...envVariables }; // Merge variables
      } else {
        console.error(`Environment file not found: ${envFilePath}`);
      }

      return config; // Return the updated config
    },
    defaultCommandTimeout: 10000, // Set default timeout for Cypress commands
  },
});
