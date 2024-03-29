/// <reference types="cypress" />
// Bem vindo ao Cypress!
//
// Classe de teste para portifólio onde iremos fazer testes na pagina WEB: https://www.stz.com.br/login?url=/

describe('Suite de testes para funcionalidade de login', () => {
  beforeEach(() => {
    cy.visitarUrl()
  })

  it('Realização de login com sucesso utilizando environments', () => {

    cy.realizarLogin(Cypress.env('login'), Cypress.env('senha'))
    cy.ValidarLogin('Ismael Batista')
  })
})