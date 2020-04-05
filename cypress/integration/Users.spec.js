context("Users", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/users");
  });

  it("it should add and delete a user", () => {
    cy.findByText("Add user").click();
    cy.findByLabelText("Name").type("Bob");
    cy.findByLabelText("Email").type("bob@microsoft.com{enter}");
    cy.findAllByLabelText("Delete user Bob").click();
  });
});
