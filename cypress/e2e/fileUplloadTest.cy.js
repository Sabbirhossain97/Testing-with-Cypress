describe("Mouse operations", () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/upload');
    })

    it("Single File upload", () => {
        cy.get('#file-upload').attachFile('Test1.pdf');
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get("div.example h3").should("have.text", 'File Uploaded!')

    })

    it("File upload - rename", () => {
        cy.get('#file-upload').attachFile({ filePath: 'Test1.pdf', fileName: 'myFile.pdf' });
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get("div.example h3").should("have.text", 'File Uploaded!')
    })

    it("File upload - drag and drop", () => {
        cy.get('#drag-drop-upload').attachFile("Test1.pdf", { subjectType: 'drag-n-drop' });
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('have.text', 'Test1.pdf')
    })

    it("Multiple Files Upload", () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['Test1.pdf', 'Test2.pdf'])
    })

})