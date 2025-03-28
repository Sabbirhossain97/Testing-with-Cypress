describe('Tabs', () => {
    it('test child tabs', () => {
        cy.visit("http://127.0.0.1:5500/")
        cy.get("#testIframe").its("0.contentDocument.body").should('exist')
    })
}) 