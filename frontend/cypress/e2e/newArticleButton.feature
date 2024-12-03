Feature: New article button

An article will show and a button with the text 'Next article'. When clicked a new article will show up.

Scenario: Click the 'Next article' button
    Given Im on the frontpage and an article is shown
    When I click the Next article button
    Then Another new article will be shown
