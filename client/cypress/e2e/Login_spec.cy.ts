Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-test=${selector}]`);
});

const domain = 'http://localhost:5173/';

describe('Auth0', function () {
  beforeEach(function () {
    cy.loginToAuth0('joshtest@test.com', 'Joshtest123');
    cy.visit(domain);
  });

  it('should render the home equipment page', () => {
    cy.url().should('equal', domain);
  });

  it('should open the equipment create page', () => {
    cy.get('#menu-button').click();
    cy.getByData('new-equipment').click();
    cy.url().should('equal', `${domain}create-equipment`);
  });
});

const equipmentData = {
  model: 'TEST MODEL 2',
  serialNumber: 'TEST SERIAL NUMBER 2',
  type: 'TEST TYPE 2',
  condition: 'TEST CONDITION 2',
  description: 'TEST DESCRIPTION 2',
  lastRevision: '2023-03-15',
};
describe.only('Create new equipment', function () {
  beforeEach(function () {
    cy.loginToAuth0('joshtest@test.com', 'Joshtest123');
    cy.visit(`${domain}create-equipment`);
  });

  it('Should fill out form', () => {
    for (const [key, value] of Object.entries(equipmentData)) {
      cy.get(`[data-test=${key}] input`).type(value);
    }

    // Image
    cy.getByData('upload').selectFile('cypress/fixtures/test-image.png', {
      force: true,
    });
    cy.getByData('image-container').children().should('have.length', 1);
    cy.getByData('image-container').find('> .img-upload');

    // Submit
    cy.getByData('submit').click();

    // cy.getByData('form').submit();

    cy.url().should('equal', `${domain}`);
  });
});
