/// <reference types="cypress" />

// @ts-ignore
describe("test Home component", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("should start game with counter equals 0 and level equals 1", () => {
        cy.get('#counter').contains(/^0$/);
        cy.get('#level').contains(/^1$/);
    });
    it("should increment counter and level when cookie button clicked", () => {
        for (let n=0; n<40; n++){
            cy.get('button').click()
        }
        cy.get('#counter').contains(/^40$/);
        cy.get('#level').contains(/^4$/)
    });
})