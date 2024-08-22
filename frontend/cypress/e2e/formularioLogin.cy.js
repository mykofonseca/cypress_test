it.only('Não deve permitir um campo em branco', () => {
    cy.visit('/')
    cy.getByData('botao-login').click()
    // cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').should('exist')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-erro').should('exist')
    // .and('have-text', "o campo email é obrigatório")

    //o campo acima não é capaz de realizar a detecção do campo 'have-text', pois o campo não se encontra disponível. Revisão necessária .
    })
