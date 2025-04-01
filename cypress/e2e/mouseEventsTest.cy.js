describe("Mouse operations", () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/');
    })

    it("Mouse Hover", () => {
        cy.get('#hover-area').trigger('mouseover');
    })

    it("Right Click", () => {
        cy.get('#right-click-area').trigger('contextmenu');
    })

    it("Double Click", () => {
        cy.get('#double-click-btn').trigger('dblclick')
    })

    it("Scrolling", () => {
        cy.get('.scrollview-area').scrollIntoView({ duration: 2000 })
        cy.get('.scrollview-area').should('have.text', 'I am in the view')
    })

})