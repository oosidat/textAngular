## Running Protractor Tests

* Install [Protractor](https://angular.github.io/protractor), run `webdriver-manager start`
* From the root of the textAngular project:

Test in Firefox:

```
$ protractor protractor-conf-firefox.js
```

Test in Chrome:

```
$ protractor protractor-conf-chrome.js
```

Currently, the test runs against `demo/textAngular.com.html`.

*Attempted using `multiCapabilities` - tests failed intermittently, possibly due to alert dialog prompt.*
