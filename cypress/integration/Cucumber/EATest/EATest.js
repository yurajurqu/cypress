import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

Given(/^I visit the EA Site$/, () => {
  cy.visit("http://eaapp.somee.com/");
});

Given(/^I click login link$/, function (callback) {
  cy.contains("Login").click();
});

And(
  /^I login as user with \"([^\"]*)\" and \"([^\"]*)\"$/,
  (userName, password) => {
    cy.get("#UserName").type(userName);
      cy.get("#Password").type(password, {log:false});
    cy.get(".btn").click({ force: true });
  }
);

Given(/^I login as following$/, (datatable)=> {
    
    datatable.hashes().forEach(row => {
        console.log(row);
        cy.get("#UserName").type(row.UserName);
        cy.get("#Password").type(row.Password, {log:false});
    });
    cy.get(".btn").click({ force: true });
  });
