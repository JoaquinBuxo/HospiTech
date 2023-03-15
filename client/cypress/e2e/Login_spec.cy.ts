
describe("Auth0", function () {
  beforeEach(function () {
    cy.loginToAuth0("joshtest@test.com", "Joshtest123");
    cy.visit("http://localhost:5173/");
  });
  it("should render the home equipment page", () => {
    cy.url().should("equal", "http://localhost:5173/");
  });
  

});
