/// <reference types="cypress" />

describe('Validate Pokemon Response Body', () => {
    it('Validate Body', () => {
        var ability = {
            "name": "limber",
            "url": "https://pokeapi.co/api/v2/ability/7/"
        }       
        
        cy.request('https://pokeapi.co/api/v2/ability/7/').then((response)=>{
        expect(response.body.name).to.eq(ability.name)
        // TASK EDUWORK
        })
    });

    it('Validate Body #2', () => { 
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should('include', {name: "ditto"}) 
    });

    it('Validate Body #3', () => {
            cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
              expect(response.body.abilities[1].ability.name).to.eq('imposter');
           // [0] mengacu pada elemen pertama dalam array abilities (yang memiliki indeks 0).
           // Tanda [0] di dalam kode merujuk pada indeks pertama dari array yang ada di dalam properti abilities.
            })
        
    });

})

