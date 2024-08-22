describe('Formulário cadastro', () => {
    beforeEach(()=> {
    cy.visit('http://localhost:3000')
    })
    it('Usuário deve conseguir se cadastrar com sucesso', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('Jose da Silva')
        cy.getByData('email-input').type('snoopdog@email.com')
        cy.getByData('senha-input').type('456789')
        cy.getByData('botao-enviar').click()    
        cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
    })

    it('Verificar mensagem de nome obrigatório', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('senha-input').type('123456')
        cy.getByData('email-input').type('eminem@email.com')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de nome é obrigatório')
    })
    
    it('Verificar mensagem de e-mail obrigatório', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
    })
    
    it('Verificar mensagem de e-mail inválido', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('email-input').type('rihanna@email')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    })

    it('Verificar mensagem de senha ausente', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('email-input').type('abba@email.com')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de senha é obrigatório')
    })

    // o campo 'Verificar mensagem de senha ausente' não consegue ser validado com a presença do nome de usuário por conta de alguma configuração do backend.
    // por algum motivo é possível cadastrar um usuário em um site sem a senha, apenas com o nome e o email.

    })
