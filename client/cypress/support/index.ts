export {};

declare global {
  namespace Cypress {
    interface Chainable {
      loginToAuth0(username: string, password: string): Chainable<any>;
      getByData(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
