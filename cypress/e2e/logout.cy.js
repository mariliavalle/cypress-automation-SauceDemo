describe('logout', () => {
    beforeEach (() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login('standard_user', 'secret_sauce');
    })

    it('C4 - Logout the system', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
    })
})