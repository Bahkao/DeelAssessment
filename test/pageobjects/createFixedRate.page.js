const Page = require('./page');

class CreateFixedRatePage extends Page {

    get contractName(){
        return $('//input[@name="name"]');
    }
    
    get rate() {
        return $('//input[@name="rate"]');
    }

    get taxResidence(){
        return $('');
    } 

    get state() {
        return $('');
    }

    get jobTitle(){
        return $('');
    }



    get scopeOfWork(){
        return $('');
    }

    get QAEngineerBtn(){
        return $('');
    }

    get startDate(){
        return $('');
    }

    get currency() {
        return $('');
    }

    get paymentFrequency() {
        return $('');
    }

    get specialClauseBtn() {
        return $('');
    }

 

    open(){
        return super.open('https://app.deel.training/create/fixed');
    }
}

module.exports = new CreateFixedRatePage();