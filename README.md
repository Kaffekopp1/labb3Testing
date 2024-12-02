**Fråga om detta:**

```
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
```

`warn`eller `allow` ?

För formulär:

```
npm install formik
```

Skapa en fullstack-applikation eller bygg vidare på en tidigare fullstack-applikation (till exempel Laboration 3 i Software life cycle management) och skriv mjukvarutester för denna.

Precis som i den föregående kursen måste alla kodändringar måste föras in på main-branch:en minst en gång per “arbetsdag” (Continous Integration). Mjukvarutester underlättar Continous Integration eftersom risken att saker “går sönder” minskar när det finns tester.

Projektet går att göra individuellt eller i grupp. Gruppstorlekar kan vara mellan 2 till 4 elever.

1. Om projektet görs i grupp måste en rapport som beskriver den individuella insatsen lämnas in. Rapporten har samma krav som i den föregående kursen.
2. Om projektet görs individuellt behöver inte en rapport lämnas in. Inlämningen ska innehålla en GitHub-adress till projektet. Om ditt repository är privat, bjud då in användaren “Giffel99” och "NazeehAlhosary" på GitHub/GitLab.
3. Applikationen ska ha ett frontend, ett backend och en databas.
4. Varken JavaScript eller JSX får användas. Använd TypeScript (och TSX, om React används) istället. Notera att TypeScript är en stor del av kursen och att TypeScript-insatsen därför ska vara särskilt omfattande.
5. Testa applikationens funktionalitet med E2E-tester och komponenttester. Notera att mjukvarutester är en stor del av kursen och att testinsatsen därför ska vara särskilt omfattande.
6. Alla måste individuellt utveckla en komponent med testdriven utveckling (TDD). Detta innebär att testerna ska skrivas innan koden för respektive komponentfunktionalitet. Rapporten och Git commit-historiken ska visa att testet/testen kom först. Par- eller mob-programmering är inte tillåtet för att uppfylla detta krav.
7. Alla måste individuellt utveckla någon funktionalitet som testas med BDD och Given-When-Then. Eftersom BDD är en utökning av TDD går detta krav att uppfylla samtidigt som TDD-kravet. Par- eller mob-programmering är inte heller tillåtet för att uppfylla detta krav.
8. Alla måste individuellt skapa åtminstone ett UML-diagram som beskriver någon del av projektet.
9. Alla måste individuellt följa relevanta designprinciper såsom DRY.
10. Inkludera en README.md fil som innehåller en kort beskrivning för hur man startar projektet och vilka mål som uppnåtts.
11. För G ska ett tillräckligt stort bidrag till produkten ska göras. Grundläggande förståelse för de relevanta teoretiska områdena ska uppvisas.

---

För VG ska lämpliga programmeringskonstruktioner väljas ut och tillämpas för problemen. Ett större bidrag till produkten ska göras än för G. God förståelse för de relevanta teoretiska områdena ska uppvisas.

1. För VG ska code coverage mätas och redovisas, se https://docs.cypress.io/guides/tooling/code-coverage.
2. För VG ska också testerna köras automatiskt vid varje git push-kommando, använd GitHub Actions eller liknande för detta. Det kan vara utmanande att få backend och databas att fungera i GitHub Actions (men det går, till exempel med Docker). Det är dock OK att mocka anrop till backend-applikationen med cy.intercept. Det är även OK att använda en molndatabas (till exempel Render eller ElephantSQL) för databasen. Docker behöver inte användas. Code coverage- och automatiseringskraven kan lösas i grupp.

Projektet ska redovisas på kursens sista tillfälle på höstterminen.

```

```
