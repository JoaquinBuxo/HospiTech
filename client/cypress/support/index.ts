declare namespace Cypress {
  interface Chainable {
    loginToAuth0(username: string, password: string): Chainable<any>;
  }
}
