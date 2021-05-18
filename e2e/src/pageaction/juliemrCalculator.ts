import { getElement, getDynamicElement } from './../../utils/getElement.utils';
import { expect } from 'chai';
import { element } from 'protractor';
import { by, ElementFinder } from 'protractor';
export class JulieMrCalculator {

    public async enterInputValues(input1: string, input2: string) {
        // await element(by.model("first")).sendKeys(input1);
        // await element(by.model("second")).sendKeys(input2);
        await getElement("juliemrCalculator.firstInput").sendKeys(input1);
        await getDynamicElement("model","second").sendKeys(input2);
    }

    public async selectOperator(selectOption:string) {
        // const ele: ElementFinder = await element(by.model("operator"))
        const ele: ElementFinder = await getElement("juliemrCalculator.operatorDdwn");
        await ele.click();
        await ele.element(by.cssContainingText("option",selectOption)).click();
    }

    public async validateResult(result: string) {
        // const resultValue: string = await element(by.xpath('//h2[@class="ng-binding"]')).getText();
        const resultValue: string = await getElement("juliemrCalculator.resultValTxt").getText();
        expect(resultValue).to.equals(result);
    }

    public async clickOnGoButton() {
        await element(by.id("gobutton")).click();
    }
}