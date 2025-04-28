describe ('checkout the cart', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login('standard_user', 'secret_sauce');
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('be.visible');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.wait(200);
        cy.get('.shopping_cart_link > .shopping_cart_badge').should('be.visible');
    })
    it('C3 - checkout the cart succesfully', () => {
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Ron');
        cy.get('[data-test="lastName"]').type('Weasley');
        cy.get('[data-test="postalCode"]').type('123-4567');
        cy.get('[data-test="continue"]').click();
        cy.wait(200);
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="complete-header"]').should('contain.text', 'Thank you for your order!');
      })

    
})