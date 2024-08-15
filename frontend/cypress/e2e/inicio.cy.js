describe('Página Principal', () => {
  it('Deve renderizar h1 com o texto!', () => {
    cy.visit('http://localhost:3000')
    cy.get('h2').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})
