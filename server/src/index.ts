import webdriver from "selenium-webdriver";
import { delay } from "./utils/delay";

const main = async () => {
  const by = webdriver.By;
  const until = webdriver.until;

  const driver = new webdriver.Builder().forBrowser("chrome").build();

  driver.get("https://instagram.com");
  await driver.wait(() => {
    return driver.executeScript("return docuemnt.readyState").then((ready) => {
      return ready === "complete";
    });
  });
  
  driver
    .findElement(by.name("username"))
    .sendKeys("swagdaddy")
    .then(() => {})
    .catch((err) => {
      console.error(err);
      driver.quit();
    });
};

main().catch((err) => console.error(err));
