exports.config = {
  directConnect: false,
  capabilities: {browserName: 'chrome'},
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/protractor/insertImageSpec.js'],
  baseUrl: 'file://' + __dirname + '/demo/textAngular.com.html',
  onPrepare: function() {
    browser.resetUrl = 'file://';
  },
  rootElement: '#ng-app'
};
