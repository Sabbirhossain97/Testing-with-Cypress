describe('Alerts', () => {

    it('JS Alerts', () => {
        cy.visit("http://127.0.0.1:5500/")
        cy.get('button[onclick="jsAlert()"]').click()

        //event and message validation
        cy.on('window:alert', (str) => {
            expect(str).to.contains("I am a JS Alert")
        })
    })

    it('JS confirm alert', () => {
        cy.visit("http://127.0.0.1:5500/")
        cy.get('button[onclick="jsConfirm()"]').click()

        //event and message validation
        cy.on('window:confirm', (str) => {
            expect(str).to.contains("I am a JS Confirm Alert")
        })

        //cancel confirm alert
        cy.on('window.confirm', () => false)

    })

    it('JS Prompt Alert', () => {
        cy.visit("http://127.0.0.1:5500/");

        cy.window().then((win)=> {
            cy.stub(win, 'prompt').returns('Hello World')
        })

        cy.get('button[onclick="jsPrompt()"]').click()

    })
})