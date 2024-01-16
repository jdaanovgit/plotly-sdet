describe('Verify Install Command', () => {
  it('should click on Install and verify copied text', () => {
    // Visit the Cypress website
    cy.visit('https://www.cypress.io/');

    // Click on the "Install" button
    cy.contains('npm install cypress').click();

    // Click on "npm install cypress"
    cy.contains('npm install cypress').click();

    // Verify that the copied text is "npm install cypress --save-dev"
    cy.get('.copy-code-action').click();

    // Get the copied text from the clipboard and assert 
    cy.window().invoke('navigator.clipboard.readText').should('eq', 'npm install cypress --save-dev');
  });
});
