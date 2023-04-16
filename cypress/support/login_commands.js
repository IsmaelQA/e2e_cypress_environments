const elementos = {
    BOTAO_SIGNIN: '#header > div.nav > div > div > nav > div.header_user_info > a',
    INPUT_EMAIL: '#email',
    INPUT_SENHA: '#passwd',
    BOTAO_LOGAR: '#SubmitLogin > span',

}

Cypress.Commands.add('realizarLogin', (login, senha,) => {
    cy.clicarNoElemento(elementos.BOTAO_SIGNIN)
    cy.EscreverNoCampo(elementos.INPUT_EMAIL, login)
    cy.EscreverNoCampo(elementos.INPUT_SENHA, senha)
    cy.clicarNoElemento(elementos.BOTAO_LOGAR)
})

Cypress.Commands.add('ValidarMensagemBoasVindas', (mensagem) => {
    cy.ValidarSeCampoContemMensagem(locators.MY_ACCOUNT_PAGE.LABEL_WELCOME, mensagem)
})