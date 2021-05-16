/// <reference types="Cypress" />

describe("Testing of EA app", () => {
    
    it("login application", () => {
        cy.visit("http://eaapp.somee.com/");

        //long way
        // cy.get("#loginLink").then(($link) => {
        //     // const linkText = $link.text();
        //     // expect(linkText).is.eql('Login');
        //     return $link.text();
        // }).as('linkText');

        //short way with invoke
        cy.get("#loginLink").invoke('text').as('linkText');

        cy.get('@linkText').then(($x) => {
            expect($x).is.eql('Login');
        });

        cy.get('#loginLink').click();

        cy.url().should("include", "/Account/Login");

        cy.get('#UserName').type("admin");
        cy.get('#Password').type("password");

        cy.get(".btn").click({force: true});

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
    // it("visit portal compras", () => {
    //     cy.server({ onAnyRequest: function (route, proxy) { proxy.xhr.setRequestHeader('x-up-calling-line-id', '51997352963'); } });
        
    //     cy.visit("http://compras.miclaro.com.pe/");
    //     // cy.contains("Login").click();

    //     // cy.url().should("include", "/Account/Login");

    //     // cy.get('#UserName').type("admin");
    //     // cy.get('#Password').type("password");

    //     // cy.get(".btn").click({force: true});

    // });

})