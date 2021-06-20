describe('Resume download button', () => {
    it('clicking "Download this resume" downloads a pdf', () => {
        cy.visit('https://thegoogenoughtester.netlify.app/')

        cy.contains('Download this resume')
            .should('be.visible')
            .click()

        cy.readFile('cypress/downloads/Anna-Maria Orwat resume.pdf')
            .should('exist')
    })
})

describe('Github link', () => {
    it('clicking on "See code for this page" opens a Github repo in a new tab', () => {
        cy.visit('https://thegoogenoughtester.netlify.app/')

        cy.contains('See code for this page')
            .should('be.visible')
            .should('have.attr', 'href', 'https://github.com/peleda/CV-2021')
            .should('have.attr', 'target', '_blank')
            .click()
            //continuing the test in a new tab is not supported, 
            //check manually after click if the page in the link loads correctly
    })
})