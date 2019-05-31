const { Given, When, Then } = require('cucumber')

//require(chai).should();
Given(/^User lands on the Flipkart application$/, function() {
    browser.url("https://www.flipkart.com")
    browser.$('//button[@class="_2AkmmA _29YdH8"]').click();

});
When(/^User search for \"([^\"]*)\" from Search box in HomePage$/,function(brand){
    const searchbox = browser.$('//input[@title="Search for products, brands and more"]')
    searchbox.click();
    searchbox.setValue(brand)
    browser.$('//button[@class="vh79eN"]').click();
    browser.pause(3000);
  
});

Then(/^User should be able to select \"([^\"]*)\" successfully$/,function(iphone){
    
    let noOfPages = browser.$("(//*[@class='_2zg3yZ']//span)[1]").getText().split("of ")[1];
    console.log(noOfPages);
    let found = false;
    let i = 1;
        
    while(i <= noOfPages){
        console.log(`${i}`);
        var phoneElem  = browser.$('//div[text()="' + iphone +'"]');
     
        if(! phoneElem.error){
            found = true;
            browser.$(`//*[@class='_3wU53n' and text()="${iphone}"]/ancestor::a`).click();
            break;
        }else{
            i++;
            browser.$(`(//*[@class='_2Xp0TH'])[${i}]`).click();
            browser.pause(1000);
        }
    }
    
    if(!found) {
        console.log(`${iphone} not found!`);
    }
}); 

Then(/^User should be able to land in the device description page$/, function() {
browser.pause(5000);
    console.log(browser.getWindowHandles());
    browser.switchToWindow(browser.getWindowHandles()[1]);
    console.log(browser.getUrl());
});

Then(/^User should be able to click on Add to cart button in \"([^\"]*)\" pdp page$/, function(iphone) {
    var addtoCart = browser.$("//*[text()='ADD TO CART']");
    if(!addtoCart.error){
        addtoCart.click();
    }
    else{
        console.log("Element is out of stock");
    }
    browser.pause(5000);
});
