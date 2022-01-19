describe("The Home Page", () => {
  it("renders", () => {
    cy.visit("https://test-web.doggosports.com");
    cy.contains("Your dog's sporting event, simplified.");
  });
});

describe("The API", () => {
  it("pings https://test-api.doggosports.com", () => {
    cy.request("https://test-api.doggosports.com");
  });
});
