require("chromedriver");
const selenium = require ("selenium-webdriver");
const  driver = new selenium.Builder().forBrowser("chrome").build();
const url = "https://townwork.net/appInpt/?joid=Y0055J4X";


const By = selenium.By ;

const runSelenium= function(){
  //get the browser open
  driver.get(url);

  //name

  driver.findElement(By.css("#textfield000")).sendKeys("Shanti lamichhane khadka");

  //furikana name
  driver.findElement(By.css("#textfield001")).sendKeys("ぜんち　らみちゃるね　かだか");

  //ph
  driver.findElement(By.css("#textfield002")).sendKeys("07075251093");

  //email
  driver.findElement(By.css("#jsi-mailaddress")).sendKeys("khadkahom61@gmail.com");

  //birthday date
  driver.findElement(By.xpath("//select[@id='jsi-date-birth-year']//option[@value='1997']")).click();
  driver.findElement(By.xpath("//select[@id='selectfield001']//option[@value='07']")).click();
  driver.findElement(By.xpath("//select[@id='selectfield002']//option[@value='12']")).click();

  //sex
  //driver.findElement(By.xpath("//li//label[@for='men']")).click();
  driver.findElement(By.xpath("//li//label[@for='women']")).click();


  //current occupation
  driver.findElement(By.xpath("//select[@id='selectfield003']//option[@value='09']")).click();



  driver.findElement(By.xpath("//input[@type='submit']")).submit();

};

runSelenium();
