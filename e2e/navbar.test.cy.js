/// <reference types="cypress" />

describe("Login and Logout", () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.loginstep("standard_user","secret_sauce")
    });

    it('Should display Sauce Labs Backpack content', () => {
        cy.get('img[src="/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg"]').click()
        cy.url().should('include','inventory-item.html?id=4')
        cy.get('.inventory_details_desc_container').should('contain.text','Sauce Labs Backpack')
        cy.get('#back-to-products').click()
        cy.url().should('include','inventory.html')
    });

    it('Should display Sauce Labs Bike Light', () => {
        cy.get('img[src="/static/media/bike-light-1200x1500.37c843b0.jpg"]').click()
        cy.url().should('include','inventory-item.html?id=0')
        cy.get('.inventory_details_price').should('have.text', '$9.99')
        cy.get('#back-to-products').click()
        cy.url().should('include','inventory.html')
    });

    it('Should display your cart after adding product', () => {
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
        cy.get('.shopping_cart_link').click()
        cy.url().should('include','cart.html')
        cy.get('.title').should('have.text', 'Your Cart')
    });

});