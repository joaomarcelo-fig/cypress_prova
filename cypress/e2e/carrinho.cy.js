describe('COMPRA_001 - Adicionar item ao carrinho', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Deve adicionar um item ao carrinho com sucesso', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_item').should('have.length', 1)
    })
})
