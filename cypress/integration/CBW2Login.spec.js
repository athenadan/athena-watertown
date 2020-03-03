context("Login", () => {
  beforeEach(() => {
    cy.visit("http://cbftadev71.englab.athenahealth.com/rcm/");
  });

  it("it should login as user TABAR and select a patient", () => {
    cy.findByLabelText("Username").type("TABAR");
    cy.findByLabelText("Password").type("tabarbar");
    cy.findByText("Log in").click();

    cy.findByText("Scheduler").click();
    cy.findAllByText("Scheduler").each(($el, index, $list) => {
      if (index === 1) {
        cy.wrap($el).trigger("mouseover");
      }
    });

    cy.findByText("Patient Services").click();

    cy.findByLabelText("ame:").type("TEST,LYNDA");

    cy.findByText("TABAR").click();
    cy.findByText("ign Out").click();
    cy.findByText("K").click();
  });
});
