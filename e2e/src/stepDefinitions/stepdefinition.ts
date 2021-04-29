import { logger } from "./../../utils/logging";

import { Then, When } from "cucumber";

When(/^I login into the application$/, () => {
	return true;
});

When(/^I verify title$/, () => {
	console.log("step2");
	return true;
});

Then(/^I add two numbers$/, () => {
	console.log("step-3");
	return true;
});
