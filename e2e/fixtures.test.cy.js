/// <reference types="cypress" />

describe('My Fixtures Test', () => {
  
    it('Fixtures Login & Custom Command', () => {
      // Untuk memakai dari folder fixtures user.json
      cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password
        const firstName = user.firstName
        const lastName = user.lastName
        const Zipcode = user.postalCode
      // Visit saucedemo
      cy.visit('https://www.saucedemo.com/')
      // Script Fixtures Login
      cy.get('input[id="user-name"]').type(username)
      cy.get('input[id="password"]').type(password)
      cy.get('.btn_action').click()
      cy.get('.shopping_cart_container').click()
      cy.url().should('include', 'cart.html')
      // Script Fixtures detail checkout untuk pengisian firstname,lastname,zipcode
      cy.get('#checkout').click()
      cy.get('[placeholder="First Name"]').type(firstName)
      cy.get('[placeholder="Last Name"]').type(lastName)
      cy.get('[placeholder="Zip/Postal Code"]').type(Zipcode)
    })
    })
  
  });