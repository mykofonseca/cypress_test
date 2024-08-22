it.only('Não deve permitir um campo em branco', () => {

    cy.getByData('botao-login').click()
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-erro').should('exist').and('have-text', 'o campo email é obrigatório')
    })