const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    //specs: ['./testCases/spec.js'],
    specs: ['./testCases/soltechTest.js'],

    

  onPrepare: function(){
    browser.manage().window().maximize();

    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        savePath: 'Reporter',
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true
      })
    );


  }
  }