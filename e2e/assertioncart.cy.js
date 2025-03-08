/// <reference types="cypress" />

describe("Searchbox Test Eduwork", () => {
    before(() => {
        cy.visit("/")
        cy.loginstep("standard_user","secret_sauce")
});
it("Click Image", () => {
    //Melakukan Click Image & Assertion
    cy.get('img[src="/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg"]').click()
    cy.url().should('include','inventory-item.html?id=4')
    cy.get('.inventory_details_desc_container').should('contain.text','Sauce Labs Backpack')
});


// it("Untuk Assertion", () => {
 //   testing pribadi
 // cy.get('.inventory_details_desc_container').should('contain.text','Sauce Labs Backpack')
//});

});