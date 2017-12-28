var webdriver = require('./../node_modules/selenium-webdriver');
var chrome = require('./../node_modules/selenium-webdriver/chrome');
var test = require('./../node_modules/selenium-webdriver/testing');
var driver;
var signUpPage;

var SignUpPage = require('./../pages/personalCapitalSignUpPage.js');

const timeOut = 15000;


test.describe('Fill Sign Up Form', function() {
	  this.timeout(timeOut);

	test.beforeEach(function() {
		driver = new webdriver.Builder().
			forBrowser('chrome').
			build();
		signUpPage = new SignUpPage(driver);
		signUpPage.view();
	});

	test.afterEach(function() {
		driver.quit();
	});

	test.it('Fill Sign Up Form', function() {
		signUpPage.navigateToFinancialTools();
		signUpPage.clickOnSignUpNow();
		signUpPage.fillSignUpForm("someemail@email.com","password","18001231234");
		
	});
});
