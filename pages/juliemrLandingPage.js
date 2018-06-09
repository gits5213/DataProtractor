const juliemrLandingPage = function(){


    this.firstInputBox =  element(by.model('first'));
    this.setFirstInputBox = function(){
        return this.firstInputBox;
    },
    this.secondInputBox =  element(by.model('second'));
    this.setSecondInputBox = function(){
        return this.secondInputBox;
    },
    this.clickBtn =  element(by.id('gobutton'));
    this.getClickBtn = function(){
        return this.clickBtn;
    },
    this.result =  element(by.binding('latest'));
    this.getResult = function(){
        return this.result
    }




}

module.exports = new juliemrLandingPage();