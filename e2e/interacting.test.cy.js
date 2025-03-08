/// <reference types="cypress" />

describe('My Second Test', () => {
    
  it('Should load the website & Login', () => {
    cy.visit('https://www.saucedemo.com/')
    // Memastikan pagenya benar
    cy.url().should('include', 'saucedemo.com')
    //cy.get('input[id="user-name"]').type('admin123')
  });
  
  it('Should Fill the Username & Password & Login', () => {
    // Memastikan bahwa pengisian Username dan password betul dan sudah click login
    cy.visit('https://www.saucedemo.com/')
    //testing pribadi cy.loginstep2('standard_user','secret_sauce')
    cy.get('input[id="user-name"]').type('standard_user')
    cy.get('input[id="password"]').type('secret_sauce')
    cy.get('.btn_action').click()
    
    // Click Icon Keranjang dan memastikan linknya sudah halaman keranjang
    cy.get('.shopping_cart_container').click()
    cy.url().should('include', 'cart.html')
  });
  })