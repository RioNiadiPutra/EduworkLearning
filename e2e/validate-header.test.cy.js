/// <reference types="cypress" />

describe('Validate Pokemon Header', () => {
    it('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        //cy.get('@pokemon').its('headers').its('content-type')
        //    .should('include', 'application/json; charset=utf-8')

        cy.get('@pokemon').its('body').should('have.property', 'forms')
        cy.get('@pokemon').its('body').should('have.property', 'name').and('include', 'ditto')
        cy.get('@pokemon').its('body').should('have.a.property','held_items')
        cy.get('@pokemon').its('body').its('held_items').should('be.an', 'array')

    });
})

//JSON BODY