/// <reference types="cypress" />
describe("Login and Logout", () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include','saucedemo.com')
        //cy.get('.btn_action').click()
});
it("Negative Testing Login", () => {
    cy.get('input[id="user-name"]').type('Invalid Username')
    cy.get('input[id="password"]').type('Invalid Password')
    cy.get('.btn_action').click()
    
    
    //cy.get('h3').should('be.visible').and('contain.text','Epic sadface: Username and password do not match any user in this service')
});

it("Notifikasi Alert Error Testing", () => {
    cy.get('h3').should('be.visible').and('contain.text','Epic sadface: Username and password do not match any user in this service')
});

});