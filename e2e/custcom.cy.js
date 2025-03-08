/// <reference types="cypress" />

describe('My Fixtures Test & Custom Command', () => {
  
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
      // Script Fixtures & Custom Command pengisian user login dan password
      cy.loginstep(username,password)
      cy.get('.shopping_cart_container').click()
      cy.url().should('include', 'cart.html')
      // Script Fixtures & Custom command Pengisian FirstName & LastName & ZipCode
      cy.get('#checkout').click()
      cy.checkoutinformation(firstName,lastName,Zipcode)
    })
    })
  
  });