import {
  When,
  Then,
  Given,
  Before,
} from '@badeball/cypress-cucumber-preprocessor'

let firstArticleText: string

Before(() => {
  cy.visit('http://localhost:5173/')
})

Given('Im on the homepage and an article is shown', () => {
  cy.get('.article').should('be.visible')
  cy.get('.article').then(($firstArticle) => {
    const firstArticleText = $firstArticle.text()
  })
})

When('I click on the Next article button', () => {
  cy.get('button').click()
})

Then('Another new article will be shown', () => {
  cy.get('.article')
    .should('be.visible')
    .should(($newArticle) => {
      const newArticleText = $newArticle.text()
      expect(newArticleText).not.to.eq(firstArticleText)
    })
})
