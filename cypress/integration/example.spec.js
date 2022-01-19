describe("The Home Page", () => {
  it("renders", () => {
    cy.visit("http://web:3000");
    cy.contains("Your dog's sporting event, simplified.");
  });
});

describe("The API", () => {
  it("pings http://rest_api:5000", () => {
    cy.request("http://rest_api:5000");
  });
});
