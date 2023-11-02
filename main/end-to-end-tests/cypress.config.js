// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: true,
  viewportWidth: 1400,
  viewportHeight: 1000,
  video: true,
  env: {
    researcherEmail: '<EMAIL ACCOUNT OF PREMADE RESEARCHER>',
    researcherPassword: '<RESEARCHER ACCOUNT PASSWORD>',
    adminEmail: '<EMAIL ACCOUNT OF PREMADE ADMIN>',
    adminPassword: '<ADMIN ACCOUNT PASSWORD>',
    guestEmail: '<EMAIL ACCOUNT OF PREMADE GUEST>',
    guestPassword: '<GUEST PASSWORD>',
    internalGuestEmail: '<EMAIL ACCOUNT OF PREMADE INTERNAL GUEST>',
    internalGuestPassword: '<INTERNAL GUEST PASSWORD>',
    cognitoUserPoolId: '<COGNITO USER POOL ID>',
    cognitoClientId: '<COGNITO CLIENT ID>',
    workspaces: {
      sagemaker: {
        workspaceTypeName: '<NAME OF SAGEMAKER WORKSPACE TYPE>',
        configuration: '<SAGEMAKER WORKSPACE CONFIGURATION>',
        projectId: '<PROJECT TO LAUNCH SAGEMAKER WORKSPACE IN>',
      },
      ec2: {
        windows: {
          workspaceTypeName: '<NAME OF EC2 WINDOWS WORKSPACE TYPE>',
          configuration: '<EC2 WINDOWS WORKSPACE CONFIGURATION>',
          projectId: '<PROJECT TO LAUNCH EC2 WINDOWS WORKSPACE IN>',
        },
        linux: {
          workspaceTypeName: '<NAME OF EC2 LINUX WORKSPACE TYPE>',
          configuration: '<EC2 LINUX WORKSPACE CONFIGURATION>',
          projectId: '<PROJECT TO LAUNCH EC2 LINUX WORKSPACE IN>',
        },
      },
      emr: {
        workspaceTypeName: '<NAME OF EMR WORKSPACE TYPE>',
        configuration: '<EMR WORKSPACE CONFIGURATION>',
        projectId: '<PROJECT TO LAUNCH EMR WORKSPACE IN>',
      },
      rstudioServer: {
        workspaceTypeName: '<NAME OF RSTUDIO SERVER WORKSPACE TYPE>',
        configuration: '<RSTUDIO SERVER WORKSPACE CONFIGURATION>',
        projectId: '<PROJECT TO LAUNCH RSTUDIO SERVER WORKSPACE IN>',
      },
    },
    studies: {
      organizations: [
        {
          name: '<STUDY IN WHICH RESEARCHER ACCOUNT IS STUDY ADMIN>',
          researcherIsAdmin: true,
        },
        {
          name: '<STUDY IN WHICH RESEARCHER ACCOUNT IS NOT STUDY ADMIN>',
          researcherIsAdmin: false,
        },
      ],
    },
  },
  defaultCommandTimeout: 20000,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line global-require
      return require('./cypress/plugins/index')(on, config);
    },
    baseUrl: '<BASE_URL>',
  },
});
