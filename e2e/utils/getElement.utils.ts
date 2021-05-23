import { browser, by, element, ElementFinder } from "protractor";
let locator: ElementFinder | undefined;

export const getElement = (locatorVal: string) => {
  const yamlObj = browser.params.pageObject;
  const loc = getJsonKey(yamlObj, locatorVal);
  if (loc !== undefined) {
    return loc;
  } else {
    throw new Error(`${locatorVal} - Element Not Present in YAML/JSON`);
  }
};

export const getJsonKey = (
  source: any,
  target: string,
  parentKey: string = ""
) => {
  for (const [key, value] of Object.entries(source)) {
    if (typeof value === "object") {
      getJsonKey(value, target, key);
    } else {
      if (key === target && typeof value === "string") {
        locator = getLocator(parentKey, value);
        break;
      }
    }
  }
  return locator;
};

export const getDynamicElement = (
  locatorType: "id" | "xpath" | "model" | "binding",
  locatorVal: string
) => {
  return getLocator(locatorType, locatorVal);
};

export const getLocator = (locatorType: string, locatorVal: string) => {
  switch (locatorType.toLowerCase()) {
    case "id":
      return element(by.id(locatorVal));
    case "model":
      return element(by.model(locatorVal));
    case "xpath":
      return element(by.xpath(locatorVal));
    case "css":
      return element(by.css(locatorVal));
    case "css":
      return element(by.linkText(locatorVal));
    case "binding":
      return element(by.binding(locatorVal));
    case "buttonText":
      return element(by.buttonText(locatorVal));
    case "exactBinding":
      return element(by.exactBinding(locatorVal));
    case "exactRepeater":
      return element(by.exactRepeater(locatorVal));
    case "name":
      return element(by.name(locatorVal));
    case "repeater":
      return element(by.repeater(locatorVal));
    case "tagName":
      return element(by.tagName(locatorVal));
    case "partialButtonText":
      return element(by.partialButtonText(locatorVal));
    case "partialLinkText":
      return element(by.partialLinkText(locatorVal));
    default:
      throw new Error(
        "Please provide valid JSON/YAML data, unable load locator based on locator type"
      );
  }
};
