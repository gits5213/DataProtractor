


const landingPage = require('../pages/juliemrLandingPage.js');
const globalData = require('../utilities/globalData.json');


describe('Protractor custom test cases', function() {
    it('should add five and five', function() {
      browser.get(globalData.baseURL);
      landingPage.setFirstInputBox().sendKeys(globalData.landingPage.firstInputBoxData);
      landingPage.setSecondInputBox().sendKeys(globalData.landingPage.secondInputBoxData);
      landingPage.getClickBtn().click();

      expect(landingPage.getResult().getText()).toEqual(globalData.landingPage.validateData); 

    });
  });