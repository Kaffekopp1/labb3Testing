Feature: Räknarknapp

det skall finnas text

Scenario: Ett första klick
  Given Jag är på hemsidan och knappen visar 0
  When Jag klickar på knappen
  Then Knappen ska visa 1

Scenario: Ett andra klick
  Given Jag är på hemsidan och knappen visar 1
  When Jag klickar på knappen
  Then Knappen ska visa 2
