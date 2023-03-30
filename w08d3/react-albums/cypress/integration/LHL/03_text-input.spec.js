describe('Text Input', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('.search')
    .find('.search__form')
    .find('input')
    .as('searchField');
  });

  it('accepts text input', () => {
    cy.get('@searchField')
    .type('Daft Punk', { delay: 100 });
  });

  it('can handle backspace', () => {
    cy.get('@searchField')
    .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 300 });
  });

});
