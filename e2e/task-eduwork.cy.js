/// <reference types="cypress" />

describe('Login Via API', () => {
    it('Login via API dan main page', () => {
        // Login via API
        cy.loginViaAPI()

        // Validasi apakah berhasil diarahkan ke halaman main
        //cy.url().should('include', '/#!/main')
        
        // Validasi bahwa cookies telah diset
        //cy.getCookie('sessionId').should('exist')
        //cy.getCookie('userId').should('exist')
        //cy.getCookie('userName').should('exist')
    })
})