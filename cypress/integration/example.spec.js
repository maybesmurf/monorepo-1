describe("The Home Page", () => {
  it("renders", () => {
    cy.visit("http://web:3000");
    cy.contains("Your dog's sporting event, simplified.");
  });
});

describe("The API", () => {
  it("pings http://rest_api", () => {
    cy.request("http://rest_api");
  });

  it("pings http://rest_api:5000", () => {
    cy.request("http://rest_api:5000");
  });

  it("pings http://localhost:5000", () => {
    cy.request("http://localhost:5000");
  });

  it("pings http://0.0.0.0:5000", () => {
    cy.request("http://0.0.0.0:5000");
  });
});
