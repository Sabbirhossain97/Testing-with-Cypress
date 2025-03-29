describe('Table Testing', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/');
    })

    it('checks table present', () => {
        cy.get("#users-table").should('exist')
    })

    it('verifies table headers', () => {
        cy.get('#users-table thead tr th').should('have.length', 3);

        // validates header values
        cy.get('#users-table thead tr th').eq(0).should('have.text', 'Name')
        cy.get('#users-table thead tr th').eq(1).should('have.text', 'Age')
        cy.get('#users-table thead tr th').eq(2).should('have.text', 'Country')
    })

    it('verifies table rows and data', () => {

        //verify total number of rows
        cy.get('#users-table tbody tr ').should('have.length', 2)

        //verify first row data
        cy.get('#users-table tbody tr ').eq(0).within(() => {
            cy.get('td').eq(0).should('have.text', 'Alice')
            cy.get('td').eq(1).should('have.text', '25')
            cy.get('td').eq(2).should('have.text', 'USA')
        })

        //verify second row data
        cy.get('#users-table tbody tr').eq(1).within(() => {
            cy.get('td').eq(0).should('have.text', 'Bob')
            cy.get('td').eq(1).should('have.text', '30')
            cy.get('td').eq(2).should('have.text', 'Canada')
        })
    })
})