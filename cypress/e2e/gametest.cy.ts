describe('template spec', () => {
  it('User opens two cards', () => {
    cy.visit('/')
    cy.get('#root > div > div:nth-child(3) > div:nth-child(1) > div > div > svg').click()
    cy.get('#root > div > div:nth-child(3) > div:nth-child(1) > div > div').should('have.class', 'flip')
    cy.get('#root > div > div:nth-child(3) > div:nth-child(2) > div > div > svg').click()
    cy.get('#root > div > div:nth-child(3) > div:nth-child(1) > div > div').should('have.class', 'flip')
  })
})