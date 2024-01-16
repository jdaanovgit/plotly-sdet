describe('Navigate to About Cypress', () => {
  it('should click on Company from the menu and then on About Cypress, as a sub-menu item', () => {
    // Visit the Cypress website
    cy.visit('https://www.cypress.io/');

    // Click on the "Company" menu item
    cy.get('#dropdownCompany').click();

    // Click on the "About Cypress" sub-menu item
    cy.contains('About Cypress').click();

    // Verify that the page has navigated to the "About Cypress" section
    cy.url().should('include', '/about-us');

    // Optionally, another assertion to verify content on the "About Cypress" page
    cy.contains('Cypress testing tools support developers all around the world').should('be.visible');
  });
});
