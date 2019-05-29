const { Given, When, Then } = require('cucumber')

//require(chai).should();
console.log("*********************************")
Given(/^User lands on the Flipkart application$/, function() {
    browser.url("https://www.flipkart.com")
    browser.pause(1000)
    browser.maximizeWindow();
});
When(/^User search for \"([^\"]*)\" from Search box in HomePage$/,function(brand){
    console.log("search for ");
});
Then(/^the Results displays$/, function() {
    console.log("");
});

Then(/^User should be able to select \"([^\"]*)\" successfully$/, function(iphone) {
    console.log("");
});
Then(/^User should be able to land in the device description page$/, function() {
    console.log("");
});
Then(/^User should be able to click on Add to cart button$/, function() {
    console.log("");
});
