/// <reference types="cypress" />
describe("Login and Logout", () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include','saucedemo.com')
});
it("Negative Testing Login", () => {
    cy.get('input[id="user-name"]').type('Invalid Username')
    cy.get('input[id="password"]').type('Invalid Password')
    cy.get('.btn_action').click()
});

it("Notifikasi Alert Error Testing", () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('input[id="user-name"]').type('Invalid Username')
    cy.get('input[id="password"]').type('Invalid Password')
    cy.get('.btn_action').click()
    cy.get('h3').should('be.visible').and('contain.text','Epic sadface: Username and password do not match any user in this service')
});

it("Login dan Logout", () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('input[id="user-name"]').type('standard_user')
    cy.get('input[id="password"]').type('secret_sauce')
    cy.get('.btn_action').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
   //Assertion
    cy.url().should('include' , 'https://www.saucedemo.com/')
    cy.get('h4').should('contain.text','Password for all users:')
});

});