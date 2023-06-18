const elementos = {
    BOTAO_SIGNIN: '#header > div.nav > div > div > nav > div.header_user_info > a',
    INPUT_EMAIL: '#email',
    INPUT_SENHA: '#passwd',
    BOTAO_LOGAR: '#SubmitLogin > span',
    BOTAO_HOME: '#columns > div.breadcrumb.clearfix > a > i',
    LABEL_NOME_LOGIN: '#header > div.nav > div > div > nav > div:nth-child(1) > a > span'

}

Cypress.Commands.add('realizarLogin', (login, senha,) => {
    cy.clicarNoElemento(elementos.BOTAO_SIGNIN)
    cy.EscreverNoCampo(elementos.INPUT_EMAIL, login)
    cy.EscreverNoCampo(elementos.INPUT_SENHA, senha)
    cy.clicarNoElemento(elementos.BOTAO_LOGAR)
})

Cypress.Commands.add('ValidarLogin', (mensagem) => {
    cy.clicarNoElemento(elementos.BOTAO_HOME)
    cy.ValidarSeCampoContemMensagem(elementos.LABEL_NOME_LOGIN, mensagem)

})