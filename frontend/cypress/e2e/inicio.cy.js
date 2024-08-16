describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Renderização de todas as seções e itens da página inicial', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!');
    cy.getByData('sub-titulo').contains('Minha nossa, nossa, nossa!');
    cy.getByData('vantagens').contains("Vantagens do nosso banco:");
    cy.getByData('cartao').contains("Conta e cartão gratuitos");
    cy.getByData('cartao').contains("Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.");
    cy.getByData('saque').contains("Saques sem custo");
    cy.getByData('saque').contains("Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.");
    cy.getByData('programa').contains("Programa de pontos");
    cy.getByData('programa').contains("Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!");
    cy.getByData('seguro').contains("Seguro Dispositivos");
    cy.getByData('seguro').contains("Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.");
    cy.matchElement('item_teste', 'div', 'Eita pega!');
    cy.getByData('imagem').should('be.visible')
  })
})