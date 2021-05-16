/// <reference types="Cypress" />

describe('Test lambdatest website XHR', () => {
    
    beforeEach('Navigate to lambdatest', () => {
        cy.visit('https://accounts.lambdatest.com/login')
    })

    it('Perform login and verify XHR', () => {


        //start the server
        cy.server();

        cy.route({
            method: 'GET',
            url: '/api/user/organization/automation-test-summary'
        }).as('apicheck');

        cy.fixture('lambdaUser').as('user');

        cy.get('@user').then((user) => {
            cy.get('[name="email"]').debug().type(user.UserName);
            cy.get('[name="password"]').debug().type(user.Password);
        });

        cy.get("[class='btn btn-dark submit-btn']").click();

        // explicit
        cy.get("@apicheck").then((xhr) => {
            expect(xhr.status).to.eq(200);
            expect(xhr.response.body).to.have.property('maxMinutes',100);
            expect(xhr.response.body.maxMinutes).to.eq(100);
        })

        // implicit 
        cy.get("@apicheck").its('response.body').should('have.property', 'maxMinutes').and('eql', 100);


    })

    it('verify lambdatest cookies', () => {
        cy.fixture('lambdaUser').as('user');

        cy.get('@user').then((user) => {
            cy.get('[name="email"]').debug().type(user.UserName);
            cy.get('[name="password"]').debug().type(user.Password);
        });

        cy.get("[class='btn btn-dark submit-btn']").click();

        cy.getCookie('user_id').should('have.property','value','461676')
    })
})