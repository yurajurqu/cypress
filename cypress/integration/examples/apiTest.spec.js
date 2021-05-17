/// <reference types="Cypress" />

context('Test API from fake JSON server', () => {

    beforeEach('DELETE before creating a new value', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/posts/2',
            failOnStatusCode: false
        }).then((res) => {
            expect(res.body).to.be.empty
         })
    })
    
    it('Test GET functionality of JSON server', () => {
        cy.request('http://localhost:3000/posts/1').its('body').should('have.property', 'id',1);
        cy.request('http://localhost:3000/posts/1').its('body').should('have.property', 'author','typicode');
    })
    it.only('test POST functionality of JSON server', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
                "id": 2,
                "title": "executeautomation",
                "author": "Omar Barboza"
            }
        }).then((res) => {
            expect(res.body).has.property('title','executeautomation')
         })
    })

})