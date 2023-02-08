
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

// cypress/plugins/index.js
module.exports = (on, config) => {
  // optional: register cypress-grep plugin code
  // https://github.com/bahmutov/cypress-grep
  require("cypress-grep/src/plugin")(config);
  on('before:run', async (details) => {
    console.log('override before:run');
    await beforeRunHook(details);
    //If you are using other than Windows remove below two lines
    await exec("IF EXIST cypress\\screenshots rmdir /Q /S cypress\\screenshots")
    await exec("IF EXIST cypress\\reports rmdir /Q /S cypress\\reports")
  });
  on('after:run', async () => {
    console.log('override after:run');
    //if you are using other than Windows remove below line (having await exec)
    await exec("npx jrm cypress/reports/junitreport.xml cypress/reports/junit/results-*.xml");
    await afterRunHook();
  });
};

module.exports = (on, config) => {
  // optional: register cypress-grep plugin code
  // https://github.com/bahmutov/cypress-grep
  require("cypress-mochawesome-reporter/plugin")(on);
};

require("@applitools/eyes-cypress")(module);