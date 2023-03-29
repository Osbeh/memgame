import { getByLabelText, getByRole } from "@testing-library/react"

describe('difficulty', () => {
    it('User changes difficulty', () => {
        cy.visit('/')
        cy.get('select').select("Medium")
        cy.get('[data-testid="playcard"]').should('have.length', 12)
        cy.get('select').select("Hard")
        cy.get('[data-testid="playcard"]').should('have.length', 24)
        cy.get('select').select("Easy")
        cy.get('[data-testid="playcard"]').should('have.length', 6)
    })
  })