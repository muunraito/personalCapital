var webdriver = require('selenium-webdriver');

SignUpPage = function SignUpPage(driver) {
	this.driver = driver
	this.url = "https://www.personalcapital.com/";
	this.financialTools = webdriver.By.css("[data-automation-id='header.financial-software']");
	this.signUpNow = webdriver.By.css(".track-join-now-cta.rectangular-CTA-button");
	this.username = webdriver.By.css("#username");
	this.passwd = webdriver.By.css("#passwd");
	this.phoneNumber = webdriver.By.css("#phoneNumber");

};

SignUpPage.prototype.view = function() {
	this.driver.get(this.url);
	return webdriver.promise.fulfilled(true);
};

SignUpPage.prototype.navigateToFinancialTools = function() {
	return this.driver.findElement(this.financialTools).click();
};

SignUpPage.prototype.clickOnSignUpNow = function() {
	return this.driver.findElement(this.signUpNow).click();
};

SignUpPage.prototype.fillSignUpForm = function(email, password, number) {
	this.driver.findElement(this.username).sendKeys(email);
	this.driver.findElement(this.passwd).sendKeys(password);
	this.driver.findElement(this.phoneNumber).sendKeys(number);
	return webdriver.promise.fulfilled(true);
};

module.exports = SignUpPage;