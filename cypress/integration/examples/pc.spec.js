/// <reference types="Cypress" />

describe("Testing of Portal de Compras app", () => {

    // before('Login to app', () => {
    //     cy.visit("/");
    //     cy.fixture('loginData.json').as('user');
    //     cy.get('@user').then((user) => {
    //         cy.login(user.UserName, user.Password);
    //     });
    // });
    
    
    it("visit portal compras with HE", () => {
        // cy.server({ onAnyRequest: function (route, proxy) { proxy.xhr.setRequestHeader('x-up-calling-line-id', '51997352963'); } });
        // cy.server({
        //     headers: {
        //       'x-up-calling-line-id': '51997352963'
        //     }
        //   });

        // cy.server();

        // cy.intercept('GET','/wps/portal/rootcompras', (req) => {
        //     // do something with the intercepted request
        //     req.headers['x-up-calling-line-id'] = '51997352963'
        // })
        
        // cy.route({
        //     url: '/wps/portal/rootcompras',
        //     headers: {
        //       // set content-type headers
        //       'x-up-calling-line-id':  '51997352963'
        //     },
        //   })
        // cy.visit("https://compras.miclaro.com.pe/");
        // cy.visit("http://192.168.5.165:10039/wps/portal/rootcompras");
        // it works but only once
          cy.visit({
            url: 'http://192.168.5.165:10039/wps/portal/rootcompras',
            headers: {'x-up-calling-line-id': '51997352963'}
          })
        
        cy.get('#rec_129 > .recomendados', { timeout: 10000 }).click()
        
        cy.get('#metodoPagoItem-3').click()
        cy.get('.tyc-boton').click()
        cy.get('.buton-ingresar').click()
        cy.get('#btnFinalizarPC').click()

        
  
    });

})