import pseudoLocalization from "./src";

Cypress.Commands.add("pseudoLocalize", (opts) => {
  const defaultOptions = {
    blacklistedNodeNames: ["STYLE", "SCRIPT"],
  };

  cy.document().then((doc) => {
    pseudoLocalization(doc).start(opts || defaultOptions);
  });
});

Cypress.Commands.add("stopPseudoLocalize", () => {
  cy.document().then((doc) => {
    pseudoLocalization(doc).stop();
  });
});
