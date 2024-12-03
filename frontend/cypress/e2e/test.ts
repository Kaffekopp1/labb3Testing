import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'

Given('Jag är på hemsidan och knappen visar 0', () => {
  cy.visit('http://localhost:5173/')
})

Given('Jag är på hemsidan och knappen visar 1', () => {
  cy.visit('http://localhost:5173/')
  cy.get('button').click()
})

When('Jag klickar på knappen', () => {
  cy.get('button').click()
})

Then('Knappen ska visa 1', () => {
  cy.get('button').should('have.text', 'count is 1')
})

Then('Knappen ska visa 2', () => {
  cy.get('button').should('have.text', 'count is 2')
})
