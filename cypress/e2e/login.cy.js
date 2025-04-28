describe('login test', () => {
  beforeEach (() => {
    cy.visit('https://www.saucedemo.com/');
  })

  it('C1 - Successful login', () => {
    cy.login('standard_user', 'secret_sauce')
  })
})