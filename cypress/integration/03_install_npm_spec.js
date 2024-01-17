describe('Verify Install Command', () => {
  it('should click on Install and verify copied text', () => {
    // Visit the Cypress website
    cy.visit('https://www.cypress.io/');

    // Click on the "Install" button from home page
    cy.contains('npm install cypress').click();

    // Click on "npm install cypress" from popup/div
    cy.contains('[data-cy="modal-install-copy"]').click();

    // Verify that the copied text is "npm install cypress --save-dev"
    cy.get('.copy-code-action').click();

    // Get the copied text from the clipboard and assert 
    cy.window().invoke('navigator.clipboard.readText').should('eq', 'npm install cypress --save-dev');
  });
});
