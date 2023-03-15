/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
import "@testing-library/cypress/add-commands";
function loginViaAuth0Ui(username: string, password: string) {
  // App landing page redirects to Auth0.
  cy.visit("http://localhost:5173/");
  cy.get("button").click();
  // Login on Auth0.
  cy.origin(
    Cypress.env("auth0_domain"),
    { args: { username, password } },
    ({ username, password }) => {
      cy.get("#username").type(username);
      cy.get("#password").type(password);
      cy.get("button[name='action']").click();
    }
  );

  // Ensure Auth0 has redirected us back to the RWA.
  cy.url().should("equal", "http://localhost:5173/");
}

Cypress.Commands.add("loginToAuth0", (username: string, password: string) => {
  const log = Cypress.log({
    displayName: "AUTH0 LOGIN",
    message: [`🔐 Authenticating | ${username}`],
    // @ts-ignore
    autoEnd: false,
  });
  log.snapshot("before");

  loginViaAuth0Ui(username, password);

  log.snapshot("after");
  log.end();
});
