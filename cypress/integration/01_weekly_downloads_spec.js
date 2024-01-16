describe('Cypress Website Test', () => {
  it('should scroll to "Loved by OSS, trusted by Enterprise" and verify weekly downloads', () => {
    // Visit the Cypress website
    cy.visit('https://www.cypress.io/');

    // Scroll to the "Loved by OSS, trusted by Enterprise" section
    cy.contains('Loved by').scrollIntoView();

    // Verify the weekly downloads number is visible
    cy.contains('Weekly downloads').should('be.visible');
    // Additional check, if the section does exist but the number itself is not
    cy.contains('5M+').should('be.visible');
  });
});
