const LoginPage = require('../pageobjects/login.page');
const BasePage = require('../pageobjects/base.page');
const CreatePage = require('../pageobjects/create.page');
const CreateFixedRatePage = require('../pageobjects/createFixedRate.page');
const ContractPage = require('../pageobjects/contract.page');

describe('Create contract', () => {
    it('The user should be able to create a Fixed Rate contract', async () => {
        await LoginPage.open();

        await LoginPage.login('moustapha@deel.com', '&trustno12345A');

        await CreatePage.fixedRateBtn.click();

        await CreateFixedRatePage.contractName.addValue('Moustaphaiscontract');
        
        await CreateFixedRatePage.taxResidence.setValue('United States');

        await browser.keys("\uE007");

        await CreateFixedRatePage.state.setValue('Colorado');

        await browser.keys("\uE007");

        await CreateFixedRatePage.jobTitle.setValue('Qa Engineer');

        await browser.keys("\uE007");

        await CreateFixedRatePage.seniorityLevel.setValue('Not applicable');

        await browser.keys("\uE007");

        await CreateFixedRatePage.savedPredefinedWorkSpaceBtn.click();

        await CreateFixedRatePage.QAEngineerBtn.click();

        const date = new Date();
        
        await CreateFixedRatePage.startDate.click();

        await $(`abbr=${date.getDate()-1}`).click();

        await CreateFixedRatePage.nextBtn.click();

        await CreateFixedRatePage.currency.setValue("GBP - British Pound");

        await browser.keys("\uE007");


        await CreateFixedRatePage.rate.addValue(1000);
        
        await CreateFixedRatePage.paymentFrequency.setValue("Weekly");

        await browser.keys("\uE007");

        await CreateFixedRatePage.nextBtn.click();

        await CreateFixedRatePage.nextBtn.click();

        await CreateFixedRatePage.specialClauseBtn.click();

        await CreateFixedRatePage.specialClauseTextArea.setValue('Special Clause');

        await CreateFixedRatePage.nextBtn.click();

        await CreateFixedRatePage.createContractBtn.click();

        const actualContractTypeName = await ContractPage.contractName.getText();

        await expect(actualContractTypeName).toEqual("Fixed");
 
        await browser.pause(2000);

        

        

        

        
    });
});
