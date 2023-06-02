describe('Validate Tests', () => {
    it("Testando botão da home", () => {
      cy.visit("http://localhost:3000")
      cy.get('[data-cy="addUser"]').click()
    })
    
    it("Validação em adicionar usuário", () => {
        cy.visit("http://localhost:3000/add")
        cy.get('input[name="name"]').type('bianca')
        cy.get('input[name="email"]').type('test@gmail.com')
        cy.get('input[name="pwd"]').type('123')
        cy.get('[data-cy="enviar"]').click()
    })

    it("Clicar em editar", () => {
      cy.visit("http://localhost:3000")
      cy.get(`[data-cy="edit-1"]`).click()
    })

    it("Validação em editar", () => {
      cy.visit("http://localhost:3000/edit/96")
      const name = cy.get('input[name="name"]')
      name.clear()
      name.type('b')
      const email = cy.get('input[name="email"]')
      email.clear()
      email.type('st@gmail.com')
      const pwd = cy.get('input[name="pwd"]')
      pwd.clear()
      pwd.type('3')
      cy.get('[data-cy="editar"]').click()
    })

    it("Clicando em deletar", () => {
      cy.visit("http://localhost:3000")
      cy.get(`[data-cy="delete-1"]`).click()
    })
})