Feature: Flipkart application to add the product to the cart

    As a user on flipkart 
    I want to add Iphone to cart

    Background:

        Given User lands on the Flipkart application

    Scenario Outline: Adding a product to cart
        When User search for "<brand>" from Search box in HomePage
        And User should be able to select "<iphone>" successfully
        Then User should be able to land in the device description page
        And User should be able to click on Add to cart button in "<iphone>" pdp page

        Examples:
       | brand | iphone | 
       | iphone | Apple iPhone 7 Plus (Silver, 32 GB) |
    
