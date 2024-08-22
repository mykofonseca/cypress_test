describe('Formulário de login', () => { // contexto do nosso teste
    beforeEach(()=> {
    cy.visit('http://localhost:3000')
    })

    it('Não deve permitir um e-mail inválido!', () => {
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    
    it.only('Não deve permitir um campo em branco', () => {
        cy.getByData('botao-login').click()
        // cy.getByData('email-input').type('')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
        })

    })
    })

