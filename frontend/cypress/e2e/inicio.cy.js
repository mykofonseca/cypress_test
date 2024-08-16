describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!');
    cy.getByData('sub-titulo').contains('Minha nossa, nossa, nossa!');
    cy.getByData('vantagens').contains("Vantagens do nosso banco:");
    cy.getByData('icone').contains("Conta e cartão gratuitos");
    cy.getByData('icone').contains("Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.");
    cy.getByData('saque').contains("Saques sem custo");
    cy.getByData('saque').contains("Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.");
    cy.matchElement('item_teste', 'div', 'Eita pega!');
  })
})