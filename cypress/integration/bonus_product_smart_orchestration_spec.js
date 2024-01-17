describe('Verify Green Circle around Test Analytics', () => {
  it('should click on Product, then Smart Orchestration, and verify green circle around Test Analytics', () => {
    // Visit the Cypress website
    cy.visit('https://www.cypress.io/');

    // Click on the "Product" menu item
    cy.get('[data-cy="dropdown-product"]').trigger('mouseover');

    // Click on the "Smart Orchestration" sub-menu item
    cy.get('[data-cy="submenu"]').trigger('mouseover')
    cy.get('a[href="/cloud#smart_orchestration"]').click({multiple:true});

    // Scroll down to the "Test Analytics" section
    cy.contains(' Test Analytics ').scrollIntoView();

    // Verify that the green circle is around "Test Analytics" - selected item
    cy.get('#test_analytics')
      .contains('Test Analytics')
      .should('have.class', 'hover');

    // Optionally, you can add more assertions to verify content on the "Test Analytics" section
    cy.contains('Gain actionable insights into your test suite').should('be.visible');
  });
});
