/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://todomvc.com/examples/react/')
    it('cy.clearCookies() - clear browser cookies', () => {
      // https://on.cypress.io/clearcookies
      cy.getCookies().should('be.empty')
  
      cy.get('#clearCookies .set-a-cookie').click()
  
      cy.getCookies().should('have.length', 1)
  
      // cy.clearCookies() yields null
      cy.clearCookies()
  
      cy.getCookies().should('be.empty')
    })
  })

  it('All,Active and Completed filters', () => {
    
    // finds element with class "new-todo"
    cy.get('.new-todo')
      // and types three items, like a real user
      .type('Gelato Task Cypress{enter}')
      .type('Gelato Task APIs{enter}')
      .type('Gelato Technical Interview{enter}')
    // finds list elements and asserts that there are three of them
    cy.get('.todo-list li').should('have.length', 3)

    cy.get('.todo-list li').should(($listTodo) => {
      expect($listTodo.eq(0)).to.contain('Gelato Task Cypress')
      expect($listTodo.eq(1)).to.contain('Gelato Task APIs')
      expect($listTodo.eq(2)).to.contain('Gelato Technical Interview')
  })
    //verify that completed filter works
    cy.get('input.toggle').eq(0).click();
    cy.get('input.toggle').eq(1).click();
    cy.get('a').contains('Completed').click()
    cy.get('.todo-list li').should('have.length', 2)
    cy.get('.todo-list li').should(($listTodo) => {
      expect($listTodo.eq(0)).to.contain('Gelato Task Cypress')
      expect($listTodo.eq(1)).to.contain('Gelato Task APIs')
 })
    //verify that all filter works
     cy.get('a').contains('All').click()
     cy.get('.todo-list li').should(($listTodo) => {
        expect($listTodo.eq(0)).to.contain('Gelato Task Cypress')
        expect($listTodo.eq(1)).to.contain('Gelato Task APIs')
        expect($listTodo.eq(2)).to.contain('Gelato Technical Interview')
    })
    //Remove all tasks except Gelato Task Cypress and verify that only Gelato Task Cypress is left
    cy.get('button.destroy').eq(1).invoke('show').click()
    cy.get('button.destroy').eq(1).invoke('show').click()
    cy.get('.todo-list li').should(($listTodo) => {
      expect($listTodo.eq(0)).to.contain('Gelato Task Cypress')
  })



   
   })
})
