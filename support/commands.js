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
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add('loginViaAPI', (id = Cypress.env('userEmail'),
pass = Cypress.env('userPassword')
    ) => {
    cy.request('POST', 'https://reqres.in/api/login', {    
        email: id,
        password: pass
    }).then((response) => {
        //cy.setCookie('sessionId', responsive.body.sessionId)
        //cy.setCookie('userId', responsive.body.userId)
        //cy.setCookie('userName', responsive.body.userName)
        //cy.visit('/#!/main')
    })
 })

//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })