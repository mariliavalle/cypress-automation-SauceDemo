describe ('Adding product in the cart', () => {
    beforeEach (() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login('standard_user', 'secret_sauce');
    })

    it('C2 - Adding one product in the cart', () => {
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('be.visible');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.wait(200);
        cy.get('.shopping_cart_link > .shopping_cart_badge').should('be.visible');
    })
})