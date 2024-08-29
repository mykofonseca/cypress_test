describe('Testando proporções de dispositivos móveis para o menu lateral', () => {
//     context('Resolução de 424x800 (mínima largura)', () => {
//       beforeEach(() => {
//         //set da proporção
//         cy.viewport(424, 800)
//       })
//       it('Deve existir um menu burguer', () => {
//         //set do endereço da página 
//         cy.visit('http://localhost:3000')
//         //login
//         cy.getByData('botao-login').click()
//         cy.getByData('email-input').type('neilton@alura.com')
//         cy.getByData('senha-input').type('123456')
//         cy.getByData('botao-enviar').click()
//         //verificação de local
//         cy.location('pathname').should('eq','/home')
//         //checagem do menu
//         cy.getByData('menu-burguer').click()
//         cy.getByData('menu-lateral').find('a').eq(3).click()			
//         cy.location('pathname').should('eq','/home/investimentos')})	
//     })

//     context('Resolução do Iphone 5 ', () => {
//       beforeEach(() => {
//         //set da proporção
//         cy.viewport('iphone-5')
//       })
//         it('Deve existir um menu burguer', () => {
//         //set do endereço da página 
//         cy.visit('http://localhost:3000')
//         //login
//         cy.getByData('botao-login').click()
//         cy.getByData('email-input').type('neilton@alura.com')
//         cy.getByData('senha-input').type('123456')
//         cy.getByData('botao-enviar').click()
//         //verificação de local
//         cy.location('pathname').should('eq','/home')
//         //checagem do menu
//         cy.getByData('menu-burguer').click()
//         cy.getByData('menu-lateral').find('a').eq(3).click()			
//         cy.location('pathname').should('eq','/home/investimentos')})
      
//     })


//     context('Resolução do Iphone 6 ', () => {
//       beforeEach(() => {
//         //set da proporção
//         cy.viewport('iphone-6')
//       })
//         it('Deve existir um menu burguer', () => {
//         //set do endereço da página 
//         cy.visit('http://localhost:3000')
//         //login
//         cy.getByData('botao-login').click()
//         cy.getByData('email-input').type('neilton@alura.com')
//         cy.getByData('senha-input').type('123456')
//         cy.getByData('botao-enviar').click()
//         //verificação de local
//         cy.location('pathname').should('eq','/home')
//         //checagem do menu
//         cy.getByData('menu-burguer').click()
//         cy.getByData('menu-lateral').find('a').eq(3).click()			
//         cy.location('pathname').should('eq','/home/investimentos')})
      
//     })

//     context('Resolução do Iphone 7 ', () => {
//       beforeEach(() => {
//         //set da proporção
//         cy.viewport('iphone-7')
//       })
//         it('Deve existir um menu burguer', () => {
//         //set do endereço da página 
//         cy.visit('http://localhost:3000')
//         //login
//         cy.getByData('botao-login').click()
//         cy.getByData('email-input').type('neilton@alura.com')
//         cy.getByData('senha-input').type('123456')
//         cy.getByData('botao-enviar').click()
//         //verificação de local
//         cy.location('pathname').should('eq','/home')
//         //checagem do menu
//         cy.getByData('menu-burguer').click()
//         cy.getByData('menu-lateral').find('a').eq(3).click()			
//         cy.location('pathname').should('eq','/home/investimentos')})
      
//     })

        context('Resolução em formato paisagem', () => {
            beforeEach(() => {
            //set da proporção
            cy.viewport('iphone-8', 'landscape')
            })
            it('Deve existir um menu burguer', () => {
            //set do endereço da página 
            cy.visit('http://localhost:3000')
            //login
            cy.getByData('botao-login').click()
            cy.getByData('email-input').type('neilton@alura.com')
            cy.getByData('senha-input').type('123456')
            cy.getByData('botao-enviar').click()
            //verificação de local
            cy.location('pathname').should('eq','/home')
            //checagem do menu
            cy.getByData('menu-burguer').click()
            cy.getByData('menu-lateral').find('a').eq(3).click()			
            cy.location('pathname').should('eq','/home/investimentos')})
          })

        //o modelo de visualização landscape não funcionará a menos que seja efetuado um scroll down na página, por conta do alinhamento do layout disposto na tela. Dado que é um viewport do aparelho telefone Iphone 8, com 4.7 polegadas de tela utilizavel.
  })