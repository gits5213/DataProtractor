


const landingPage = require('../pages/juliemrLandingPage.js');
const globalData = require('../utilities/globalData.json');


describe('Protractor Demo App', function() {
    it('should add one and two', function() {
      browser.get(globalData.baseURL);
      landingPage.setFirstInputBox().sendKeys(globalData.landingPage.firstInputBoxData);
      landingPage.setSecondInputBox().sendKeys(globalData.landingPage.secondInputBoxData);
      landingPage.getClickBtn().click();

      expect(landingPage.getResult().getText()).toEqual(globalData.landingPage.validateData); 

    });
  });