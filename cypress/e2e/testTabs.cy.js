describe('Tabs', () => {
    it('test child tabs', () => {
        cy.visit("http://127.0.0.1:5500/")
        cy.get("a[target='_blank']").click();
        cy.url().should('include','https://www.youtube.com/')
    })
}) 