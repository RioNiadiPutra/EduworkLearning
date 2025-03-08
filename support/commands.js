// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
    Cypress.Commands.add('loginstep', (username, password) => {
    cy.get('input[id="user-name"]').type(username)
    cy.get('input[id="password"]').type(password)
    cy.get('.btn_action').click()
})

Cypress.Commands.add('loginstep2', (email, pass) => {
    cy.get('input[id="user-name"]').type(email)
    cy.get('input[id="password"]').type(pass)
    cy.get('.btn_action').click()
})

Cypress.Commands.add('checkoutinformation', (firstName, lastName, Zipcode) => {
    cy.get('[placeholder="First Name"]').type(firstName)
    cy.get('[placeholder="Last Name"]').type(lastName)
    cy.get('[placeholder="Zip/Postal Code"]').type(Zipcode)
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })