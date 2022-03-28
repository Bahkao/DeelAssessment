const Page = require('./page');

class ContractPage extends Page {

    get contractName() {
        return $('');
    }

    open() {
        return super.open("https://app.deel.training/contract/4nPKq4kz");
    }
}

module.exports = new ContractPage();