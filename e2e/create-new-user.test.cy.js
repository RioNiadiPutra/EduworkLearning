/// <reference types="cypress" />

describe('Create new user', () => {
    it('Success create new user', () => {
        var user = {
            "name": "Eduwork",
            "job": "Teacher"
        }
        
        cy.request('POST', 'https://reqres.in/api/users', user).then((response)=> {
            expect(response.status).equal(201)
            expect(user.name).equal("Eduwork")
            expect(user.job).equal("Teacher")
        })
    });
})