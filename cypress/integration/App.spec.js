// 1. yarn create react-app cypresstesting
// 2. yarn add cypress -d
// 3. add "e2e" to the scripts in package.json. "scripts": { "e2e": "cypress open" }
// 4. run "yarn run e2e" which will take a while to run
// 5. delete the tests in the examples folder
// 6. Create one file in the integrations folder App.spec.js and write valid, invalid, null inputs
// 7. Arrange Act Assert inside each one

it('should show cocktails on  load', () => {
    cy.visit('http://localhost:3000/')
    // searchbox
    cy.get('input').type('AB')
    //
    cy.get('img').should('have.length',25)
    })
