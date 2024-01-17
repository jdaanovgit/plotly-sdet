describe('Navigate to Visual Reviews', () => {
  it('should click on Product and then on Visual Reviews', () => {
    // Visit the Cypress website
    cy.visit('https://www.cypress.io/');

    // Click on the "Product" menu item
    cy.get('[data-cy="dropdown-product"]').trigger('mouseover');
    
    // Click on the "Visual reviews" sub-menu item
    cy.contains('Visual reviews').click();

    // Verify that the page has navigated to the "Visual reviews" section
    cy.url().should('include', '/cloud#visual_reviews');

    // Optionally, you can add more assertions to verify content on the "Visual reviews" page
    cy.contains('Powerful Visual Testing').should('be.visible');
  });
});
