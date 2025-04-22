/// <reference types="cypress" />

describe("5 Tugas Testing Scenario", () => {
    beforeEach(() => {    
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    });

    it('Login failed karena username tidak terdaftar', () => {
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type('asd')
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
        cy.get('.text-danger').should('be.visible').and('contain.text','Login failed! Please ensure the username and password are valid.')
    });

    it('Login failed karena password salah', () => {
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('123')
        cy.get('#btn-login').click()
        cy.get('.text-danger').should('be.visible').and('contain.text','Login failed! Please ensure the username and password are valid.')
    });

    it('Login failed karena password salah dan username salah', () => {
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type('asd')
        cy.get('#txt-password').type('123')
        cy.get('#btn-login').click()
        cy.get('.text-danger').should('be.visible').and('contain.text','Login failed! Please ensure the username and password are valid.')
    });

    it('Login dengan username dan password yang benar', () => {
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
    });

    it('Melakukan book appointment tanpa mengisi tanggal visit', () => {
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
        cy.get('#btn-book-appointment').click()
    });









});