// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// COMANDOS BASE DO NOSSO PROJETO
Cypress.Commands.add('visitarUrl', () => {
    cy.visit('/')
})

Cypress.Commands.add('escreverNoElemento', (elemento, valor) => {
    cy.get(elemento).should('be.visible').type(valor).should('have.value', valor)
})

Cypress.Commands.add('clicarNoElemento', (elemento) => {
    cy.get(elemento).should('be.visible').click()
})

Cypress.Commands.add('ValidarSeCampoContemMensagem', (elemento, mensagem) => {
    cy.get(elemento).should('be.visible').should('contain.text', mensagem)
})