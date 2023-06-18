
// COMANDOS BASE DO NOSSO PROJETO
Cypress.Commands.add('visitarUrl', () => {
    cy.visit('/')
})

Cypress.Commands.add('EscreverNoCampo', (elemento, valor) => {
    cy.get(elemento).type(valor, { force: true }).should('have.value', valor)
})

Cypress.Commands.add('clicarNoElemento', (elemento) => {
    cy.get(elemento).should('be.visible').click()
})

Cypress.Commands.add('ValidarSeCampoContemMensagem', (elemento, mensagem) => {
    cy.get(elemento).should('be.visible').should('contain.text', mensagem)
})