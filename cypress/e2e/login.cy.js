describe('Testes de Login - SauceDemo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('LOGIN_001 - Login com sucesso', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory.html')
    })

    it('LOGIN_002 - Login com senha inválida', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('senha_errada')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
    })

    it('LOGIN_003 - Login com usuário bloqueado', () => {
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out')
    })
})