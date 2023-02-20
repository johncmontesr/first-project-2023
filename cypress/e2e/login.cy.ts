describe('Login to website', () => {

  let environment: string = Cypress.env('urlWebsite');
  let username: string = Cypress.env('usernameStandard');
  let password: string = Cypress.env('password');
 
  it('passes', () => {
    cy.clearAllLocalStorage()
    cy.visit({url: `${environment}`, failOnStatusCode: false})
    cy.get("#user-name").type(username)
    cy.get("#password").type(password)
    cy.get("#login-button").click()
  });
});