// How to stop a page from loading when the element is loaded on the page

import { browser, protractor } from "protractor";

browser.actions().sendKeys(protractor.Key.ESCAPE).perform();