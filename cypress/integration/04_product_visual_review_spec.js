describe('Navigate to Visual Reviews', () => {
  it('should click on Product and then on Visual Reviews', () => {
    // Visit the Cypress website
    cy.visit('https://www.cypress.io/');

    // Click on the "Product" menu item
    cy.get('[data-cy="dropdown-product"]').trigger('mouseover');
    
    // Click on the "Visual reviews" sub-menu item
    //according to spec: “visual review” - such section does not exist, updated according to the production state
    cy.contains('Visual Reviews').click();

    // Verify that the page has navigated to the "Visual reviews" section
    cy.url().should('eq', 'https://www.cypress.io/cloud#visual_reviews');

    // Optionally, you can add more assertions to verify content on the "Visual reviews" page
    cy.contains('Review and debug failures visually').should('be.visible');
  });
});
