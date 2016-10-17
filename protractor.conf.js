exports.config = {

  framework: 'jasmine',

  specs: [
    'tests/*.js'
  ],

  capabilities: {'browserName': 'chrome'},
  directConnect: true,

  baseUrl: 'http://localhost:3000/',

  useAllAngular2AppRoots: true,

  allScriptsTimeout: 120000,
  getPageTimeout: 120000,

  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }
};