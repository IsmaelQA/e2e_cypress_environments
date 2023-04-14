import locators from "./locators"

Cypress.Commands.add('realizarLogin', (login, senha,) => {
    
    cy.escreverNoElemento(locators.LOGIN_PAGE.INPUT_USERNAME, login)
    cy.escreverNoElemento(locators.LOGIN_PAGE.INPUT_PASSWORD, senha)
    cy.clicarNoElemento(locators.LOGIN_PAGE.BOTAO_LOGIN)
})

Cypress.Commands.add('ValidarMensagemBoasVindas', (mensagem) => {
    cy.ValidarSeCampoContemMensagem(locators.MY_ACCOUNT_PAGE.LABEL_WELCOME, mensagem)
})