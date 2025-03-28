describe("test radio and checkbox elements", () => {

    it("test radio buttons", () => {
        cy.visit("http://127.0.0.1:5500/")

        //visibilty of radio buttons
        cy.get("input[value='male']").should('be.visible')
        cy.get("input[value='female']").should('be.visible')
        cy.get("input[value='others']").should('be.visible')

        //selecting radio buttons
        cy.get("input[value='male']").check().should('be.checked')
        cy.get("input[value='female']").should('not.be.checked')

        cy.get("input[value='female']").check().should('be.checked')
        cy.get("input[value='male']").should('not.be.checked')
    })

    it("test checkboxes ", () => {
        cy.visit("http://127.0.0.1:5500/")

        //visibilty of checkbox
        cy.get("input[value='option1']").should('be.visible')
        cy.get("input[value='option2']").should('be.visible')
        cy.get("input[value='option3']").should('be.visible')
        cy.get("input[value='option4']").should('be.visible')

        // //selecting checkbox
        cy.get("input[value='option1']").check().should('be.checked')

        //unselecting checkbox
        cy.get("input[value='option1']").uncheck().should('not.be.checked')

        // //selecting all checkbox at a time
        cy.get("input.check-input[type='checkbox']").last().check()

    })
     
    it('test dropdowns', () => {
        cy.visit("http://127.0.0.1:5500/")
        cy.get("#dropdown1").select('option3').should('have.value','option3')
    })
})