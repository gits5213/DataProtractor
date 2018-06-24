/*
Three way this page works below example
`var solLandingPage = function(){
 module.exports = new solLandingPage();`

`export default {};`
*/
//-----------------------Works Perfectly-------------------------------------
/*
    module.exports = {
    manuText: () => $('.cd-menu-text'),
    openPosition: () =>  $('#transformedObject > div > div > div.column.half.staff > ul:nth-child(3) > li:nth-child(3) > a'),
    jobImputFiled: () => $('#jsb_f_keywords_i'),
    searchBtn: () => $("#jsb_form_submit_i")
    }

    */

    //----------------------Object In Sepert page----

   var ladObj = require('../pages/solLandingOb.js');
    module.exports = {

        manuText: (selector, description) => {
            return $(ladObj.menuClick.selector, description);
        },

    openPosition: () =>  $('#transformedObject > div > div > div.column.half.staff > ul:nth-child(3) > li:nth-child(3) > a'),
    jobImputFiled: () => $('#jsb_f_keywords_i'),
    searchBtn: () => $("#jsb_form_submit_i")
    }



