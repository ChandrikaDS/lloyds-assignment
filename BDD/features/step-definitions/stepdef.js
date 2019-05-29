const { Given, When, Then } = require('cucumber')

//require(chai).should();
console.log("*********************************")
Given(/^User lands on the Flipkart application$/, function() {
    browser.url("https://www.flipkart.com")
    browser.pause(1000)
    browser.maximizeWindow();
});
When(/^User search for Iphone from Search box in HomePage$/,function(){
    console.log("im here+++++++++++++++++++++");
});
Then(/^the Results displays$/, function() {
    console.log("im her77777777777777777");
});