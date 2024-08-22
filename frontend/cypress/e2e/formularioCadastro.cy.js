describe('Formulário cadastro', () => {
    beforeEach(()=> {
    cy.visit('http://localhost:3000')
    })
    it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click() /* testaremos agora o botão 'cadastrar' */
    cy.getByData('nome-input').type('Jose da Silva')
    cy.getByData('email-input').type('myko@email.com')
    cy.getByData('senha-input').type('456789')
    cy.getByData('botao-enviar').click()
    cy.getByData('nome-input').should('exist')
    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
    
    //o campo acima não é capaz de realizar a detecção do campo 'have-text', pois o campo não se encontra disponível, assim como no exercício anterior. Revisão necessária .

    })
    })