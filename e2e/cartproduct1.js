import Cartproductpage from "./cartproduct.page";
import LoginPage from "./login.page";
const {Given, When, Then} = require ('@badeball/cypress-cucumber-preprocessor')
let productCount = 0;


Given ('I successfully login into homepage' , () => {
    LoginPage.visit();
    
    LoginPage.fillusername('standard_user');
    
    LoginPage.fillpassword('secret_sauce');
    
    LoginPage.clicksigninbutton();
})

When ('I click Add to Cart button to a product that i want to buy' , () => {
    Cartproductpage.addCartBackpack();
    productCount++;
    Cartproductpage.addCartBikelight();
    productCount++;
    Cartproductpage.addCartFleecejacket();
    productCount++;
})

Then ('The cart icon should have number of the product that i added' , () => {
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', productCount.toString())
})