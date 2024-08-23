describe('Carregamento inicial', () => {
    it('Start', () => {
    cy.visit('/')
    })
    
})

describe('Testando containers de ferramentas da página (Início)', () => {
    it('Deve conseguir acessar a página de cartões', () => {
        cy.visit('http://localhost:3000')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('app-home').find('a').eq(0).click()
        cy.location('pathname').should('eq','/home')
        cy.getByData('form-inicio').should('exist').and('contain.text', 'Nova Transação').and('contain.text', 'Valor')
    })
})

describe('Testando containers de ferramentas da página (Cartões)', () => {
    it('Deve conseguir acessar a página de cartões', () => {
        cy.visit('http://localhost:3000')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('app-home').find('a').eq(1).click()
        cy.location('pathname').should('eq','/home/cartoes')
        cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')
    })
})

describe('Testando containers de ferramentas da página (Serviços)', () => {
    it('Deve conseguir acessar a página de cartões', () => {
        cy.visit('http://localhost:3000')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('app-home').find('a').eq(2).click()
        cy.location('pathname').should('eq','/home/servicos')
        cy.getByData('servicos-ferramentas').should('exist')
            .and('contain.text', 'Empréstimo')
            .and('contain.text', 'Meus cartões')
            .and('contain.text', 'Doações')
            .and('contain.text', 'Pix')
            .and('contain.text', 'Seguros')
            .and('contain.text', 'Recarga celular');
    })
})

describe('Testando containers de ferramentas da página (Investimentos)', () => {
    it('Deve conseguir acessar a página de cartões', () => {
        cy.visit('http://localhost:3000')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('app-home').find('a').eq(3).click()
        cy.location('pathname').should('eq','/home/investimentos')
        cy.getByData('titulo-investimento').should('exist').and('have.text', 'Investimentos')
    })
})


