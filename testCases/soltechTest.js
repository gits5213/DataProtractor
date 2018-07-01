var ldpage = require('../pages/solLandingPage.js');

describe('End to End QA Search Resault ', function() {

  //beforeEach(function () {
  beforeAll(function(){
      browser.ignoreSynchronization = true;
      browser.get('http://soltech.net');
      browser.manage().window().maximize();
    });

    it('user able to click on menu link', function() {
      //$(".cd-menu-text").click();
      ldpage.manuText().click();
      browser.sleep(1000);
    });

    it('user able to click on open position', function() {
      ldpage.openPosition().click();
      browser.sleep(2000);
    });

    it('user able to switch the tab & iframe', function() {
      browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
    });
      browser.driver.switchTo().frame(0);
    });

    it('user able to search by keyword QA', function() {
      ldpage.jobImputFiled().sendKeys("qa");
      ldpage.searchBtn().click();
    });

    it('user able to validate QA search result', function() {
        // can be used class name .row or tag li
        let list = $$(".container-fluid.iCIMS_JobsTable li");
        list.count().then(function(rowCount){
            console.log("Total Number Of List/rows:"+ rowCount); 
          });
      browser.sleep(2000);
      expect(list.count()).toBe(7);
    });
  });