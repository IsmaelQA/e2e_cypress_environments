
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
Cypress.Commands.add('SelecionarOpcaoCombo', (elemento, opcao) => {
    cy.get(elemento).should('be.visible').select(opcao)
})
Cypress.Commands.add('ClicarDuasVezes', (elemento) => {
    cy.get(elemento).should('be.visible').dblclick()
})
Cypress.Commands.add('EscreverNoCampoApagandoDado', (elemento, valor) => {
    cy.get(elemento).clear({ force: true })
    cy.get(elemento).type(valor, { force: true }).should('have.value', valor)
})
Cypress.Commands.add('VerificarCaminhoUrl', (caminho) => {
    cy.url().should("contains", caminho)
})
Cypress.Commands.add('VerificarExistenciaElemento', (elemento) => {
    cy.get(elemento).should('be.visible')
})

Cypress.Commands.add('ClicarNoElementoQueContemTexto', (elemento, texto) => {
    cy.get(elemento).contains(texto).click({ force: true })
})

Cypress.Commands.add('VerificarSeCampoTemTextoExato', (elemento, texto) => {
    cy.get(elemento).should('have.text', texto)
})

Cypress.Commands.add('VerificarSeCampoContemTexto', (elemento, texto) => {
    cy.get(elemento).should('contain.text', texto)
})

Cypress.Commands.add('VerificarSeCampoNaoContemTexto', (elemento, texto) => {
    cy.get(elemento).should('not.contain.text', texto)
})

Cypress.Commands.add('VerificarSeCampoTemValor', (elemento, valor) => {
    cy.get(elemento).should('have.value', valor)
})


Cypress.Commands.add('ConfirmarAlerta', () => {
    cy.on('window:confirm', () => true);
})

Cypress.Commands.add('ScrollAteElemento', (elemento) => {
    cy.get(elemento).scrollIntoView().should('be.visible')
})

Cypress.Commands.add('ClicarSeConterValor', (elemento, valor) => {
    cy.contains(elemento, valor).should('be.visible').click({ force: true })
})

Cypress.Commands.add('ClicarNoElementoExistente', (elemento) => {
    cy.get(elemento).should('exist').click()
})

Cypress.Commands.add('DigitarNoCampoExistente', (elemento, valor) => {
    cy.get(elemento).should('exist').type(valor)
})

Cypress.Commands.add('ObterTextoDoElemento', (elemento) => {
    cy.get(elemento).invoke('text')
})

Cypress.Commands.add('ArmazenarTextoEmNome', (elemento, nome) => {
    cy.get(elemento).invoke('text').as(nome)
})

Cypress.Commands.add('ArmazenarValorEmNome', (elemento, nome) => {
    cy.get(elemento).invoke('val').as(nome)
})

Cypress.Commands.add('ArmazenarParteDoTextoEmNome', (elemento, posicao_inicial, posicao_final, nome) => {
    cy.get(elemento).invoke('text').then((text) => {
        cy.wrap(text.slice(posicao_inicial, posicao_final)).as(nome)
    })
})

Cypress.Commands.add('ClicarCheckBoxQueContemValor', (valor) => {
    cy.get(`input[type="checkbox"][value*=` + valor + `]`).click()
})

Cypress.Commands.add('SelecionarCheckBox', (elemento) => {
    cy.get(elemento).check()
})

Cypress.Commands.add('ClicarSetaParaBaixo', (elemento) => {
    cy.get(elemento).type('{downArrow}')
})

Cypress.Commands.add('ClicarEnter', (elemento) => {
    cy.get(elemento).type('{enter}', { force: true })
})

Cypress.Commands.add('ClicarNoElementoUsandoSeuParent', (elemento1, elemento2) => {
    cy.get(elemento1).parent().find(elemento2).click()
})


Cypress.Commands.add('ClicarNoElementoUsandoSeuParentSeConterTexto', (elemento1, elemento2, texto) => {
    cy.get(elemento1).parent().find(elemento2).contains(texto).click()
})

Cypress.Commands.add('PassarMouseSobreElemento', (elemento) => {
    cy.get(elemento).trigger('mouseover')
})

Cypress.Commands.add('AnexarArquivo', (nome_arquivo, tipo_arquivo) => {
    cy.fixture(nome_arquivo).then(fileContent => {
        cy.get('input[type=file]').attachFile({
            fileContent: fileContent.toString(),
            fileName: nome_arquivo,
            mimeType: tipo_arquivo
        })
    })
    cy.TirarScreenshot()
})

Cypress.Commands.add('GerarToken', (id_cliente, endereco, ambiente, metodo) => {
    cy.request({
        method: 'GET',
        url: '',
        qs: {
            "client_id": id_cliente,
            "address": endereco,
            "env": ambiente,
            "httpMethod": metodo
        }
    }).its('body.access_token').should('not.be.empty').then(token => {
        Cypress.env('token', token)
        return token
    })
})

Cypress.Commands.add('TirarScreenshot', () => {
    cy.viewport(1280, 720)
    cy.screenshot()
    cy.viewport(1920, 1080)
    cy.wait(1000)

})