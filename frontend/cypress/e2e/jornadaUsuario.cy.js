describe('Jornadas de usuário', () => {
    it('Deve permitir que o usuário acesse a aplicação, realize uma transação e faça logout', () => {
    cy.visit('/')
    //login
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    //verificação página inicial
    cy.location('pathname').should('eq','/home')
    //transferencia e valor
    cy.getByData('select-opcoes').select('Transferência') 
    cy.getByData('form-input').type('80')
    cy.getByData('realiza-transacao').click()
    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80')
    //logout
    cy.getByData('botao-sair').click()
    cy.location('pathname').should('eq', '/')
    })
})