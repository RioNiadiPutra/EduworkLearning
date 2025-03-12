const {Given, When, Then} = require ('@badeball/cypress-cucumber-preprocessor')
let productCount = 0;
// Scenario 1 Homepage
Given ('I successfully login into homepage' , () => {
    cy.visit('www.saucedemo.com')
    cy.get('input[id="user-name"]').type('standard_user')
    cy.get('input[id="password"]').type('secret_sauce')
    cy.get('.btn_action').click()
})

When ('I click Add to Cart button to a product that i want to buy' , () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    productCount++;
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    productCount++;
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    productCount++;
})

Then ('The cart icon should have number of the product that i added' , () => {
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', productCount.toString())
})

//Scenario 2 Want to know the detail of the cart
//Given ('I have added the product' , () => {
//    cy.get('[data-test="shopping-cart-badge"]').click()
//})

//When ('I click the cart button' , () => {
//    cy.get('[data-test="shopping-cart-badge"]').click()
//})

//Then ('I see the list of product that i have added with quantity and price' , () => {
//    cy.url().should('contain.text', 'cart.html')
//})