
import { Then, When } from "cucumber";
import { logger } from "../../utils/logging.utils";
import { julieMrCalculator } from "./pageIndex";



When(/^I enter inputs as "([^"]*)" and "([^"]*)"$/, async (input1,input2) => {
	// logger.info("Test");
	// logger.debug("TestDebug");
	await julieMrCalculator.enterInputValues(input1,input2);
	return true;
});

Then(/^I verify result is "([^"]*)"$/, async (result) => {
	await julieMrCalculator.validateResult(result);
	return true;
});

When(/^I select operator "([^"]*)"$/, async (operator) => {
	await julieMrCalculator.selectOperator(operator);
	return true;
});

When(/^I click on go button$/, async () => {
	await julieMrCalculator.clickOnGoButton();
	return true;
});
