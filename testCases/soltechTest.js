describe('End to End QA Search Resault ', function() {

  //beforeEach(function () {
  beforeAll(function(){
      browser.ignoreSynchronization = true;
      browser.get('http://soltech.net');
      browser.manage().window().maximize();
    });

    it('user able to click on menu link', function() {
      $(".cd-menu-text").click();
      browser.sleep(1000);
    });

    it('user able to click on open position', function() {
      $("#transformedObject > div > div > div.column.half.staff > ul:nth-child(3) > li:nth-child(3) > a").click();
      browser.sleep(2000);
    });

    it('user able to switch the tab & iframe', function() {
      browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
    });
      browser.driver.switchTo().frame(0);
    });

    it('user able to search by keyword QA', function() {
        $("#jsb_f_keywords_i").sendKeys("qa");
        $("#jsb_form_submit_i").click();
    });

    it('user able to validate QA search result', function() {
        // can be used class name .row or tag li
        $$(".container-fluid.iCIMS_JobsTable li").count().then(function(rowCount){
            console.log("Total Number Of List/rows:"+ rowCount); 
          });
      browser.sleep(2000);
    });
  });