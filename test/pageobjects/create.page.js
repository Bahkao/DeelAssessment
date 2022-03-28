const Page = require('./page');

class CreatePage extends Page {

    get fixedRateBtn(){
        return $('.anchor.heap-start-fixed-contract');
    }

    open(){
       return super.open('https://app.deel.training/create');
    }
}

module.exports = new CreatePage();