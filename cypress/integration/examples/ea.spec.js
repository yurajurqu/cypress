/// <reference types="Cypress" />

describe("Testing of EA app", () => {
    
    it("login application", () => {
        cy.visit("http://eaapp.somee.com/");
        cy.contains("Login").click();

        cy.url().should("include", "/Account/Login");

        cy.get('#UserName').type("admin");
        cy.get('#Password').type("password");

        cy.get(".btn").click({force: true});

        cy.contains('Employee List').click();

        cy.get('.table').find('tr > td').contains('Prashanth').parent().contains('Benefits').click(); 

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