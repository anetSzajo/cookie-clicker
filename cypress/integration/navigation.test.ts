/// <reference types="cypress" />

// @ts-ignore
context("test app navigation", () => {
    const getHomeLinkElement = () => cy.get('#navbar--links___container > a').eq(0);
    const getAchievementsLinkElement = () => cy.get('#navbar--links___container > a').eq(1);
    const getShopLinkElement = () => cy.get('#navbar--links___container > a').eq(2);

    const homeLinkPath: string = "/home";
    const achievementsLinkPath: string = "/achievements";
    const shopLinkPath: string = "/shop";

    beforeEach(() => {
        cy.visit("/");
    });

    it("render 3 navbar links in order as home, achievements, shop", () => {
        cy.get('#navbar--links___container').children().should('have.length', 3);
        cy.get('#navbar--links___container > a').eq(0).contains(/^HOME$/);
        cy.get('#navbar--links___container > a').eq(1).contains(/^ACHIEVEMENTS$/);
        cy.get('#navbar--links___container > a').eq(2).contains(/^SHOP$/);
    })
    it("navigates home page when home link clicked", () => {
        getHomeLinkElement().click()
        cy.location('pathname').should('equal', homeLinkPath)
    })
    it("navigates achievements page when achievements link clicked", () => {
        getAchievementsLinkElement().click()
        cy.location('pathname').should('equal', achievementsLinkPath);
    })
    it("navigates shop page when shop link clicked", () => {
        getShopLinkElement().click()
        cy.location('pathname').should('equal', shopLinkPath);
    })
    it("navigates back or forward in browser's history", () => {
        getShopLinkElement().click();
        getAchievementsLinkElement().click();

        cy.go('back')
        cy.location('pathname').should('equal', shopLinkPath);

        cy.go('forward')
        cy.location('pathname').should('equal', achievementsLinkPath);

        cy.go(-1)
        cy.location('pathname').should('equal', shopLinkPath);

        cy.go(1)
        cy.location('pathname').should('equal', achievementsLinkPath);
    })
})