/// <reference types="cypress" />

describe('My First Test', () => {
    it ('Clicking "Type" shows the right headings', () => {
      cy.visit('https://example.cypress.io')

      cy.pause()

      cy.contains('type').click()

      //Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', 'https://example.cypress.io/commands/actions')

      //Get an input, type into it and verify that the value has been updated
      cy.get('.action-email').type ('testingeduwork@gmail.com')
      cy.get('.action-email').should('have.value', 'testingeduwork@gmail.com')
    })
})
