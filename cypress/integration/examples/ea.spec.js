/// <reference types="Cypress" />

describe("Testing of EA app", () => {

    before('Login to app', () => {
        cy.visit("/");
        cy.fixture('loginData.json').as('user');
        cy.get('@user').then((user) => {
            cy.login(user.UserName, user.Password);
        });
    });
    
    it("Perform benefit check", () => {
        cy.contains('Employee List').click();

        // cy.get('.table').find('tr > td').contains('Prashanth').parent().contains('Benefits').click();
        // cy.get('.table').find('tr').as('rows');
        // cy.get('@rows').then(($row) => {
        //     cy.wrap($row).click({multiple:true});
        // });

        //equivalent to previous block using wrap
        cy.get('.table').find('tr > td').then(($td) => {
            cy.wrap($td).contains('John').invoke('wrap').parent().contains('Benefits').click();
        });

        cy.wrap({ name: 'Karthik' }).should('have.property','name').and('eq','Karthik');

    });
})