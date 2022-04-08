/// <reference types="cypress" />
describe('page', () => {
  it('no workie', () => {
    cy.visit('index.html')
    cy.get('#test')
      .type('FOO{enter}BAR')
      .should('have.html', 'FOO\nBAR')
  })
})
